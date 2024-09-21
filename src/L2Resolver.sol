// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import { Permissioned, Permission } from "@fhenixprotocol/contracts/access/Permissioned.sol";
import { FHE, euint256, inEuint256, euint128, inEuint128, euint64, inEuint64, euint32, inEuint32, euint16, inEuint16, euint8, inEuint8 } from "@fhenixprotocol/contracts/FHE.sol";
import { L2Registry } from "./L2Registry.sol";
import { Strings } from "@openzeppelin/contracts/utils/Strings.sol";
import { StringUtils } from "./StringUtils.sol";

// make contract into NFT ?
// encrypted records in string format

/*
    owner can read / write / assign new delegates
    delegate can read / assign new delegates
*/
contract L2Resolver is Ownable, Permissioned {

    error L2Registry__UnauthorizedRead(address user);
    error L2Registry__UnauthorizedWrite(address user);
    error L2Registry__UnauthorizedAssign(address user);
    error L2REgistry__DelegateAlreadyChanged(address assigner, address delegate);

    using Strings for uint256;      // OZ convert uint256 to string
    using StringUtils for string;   // my library convert string to uint256

    L2Registry registry;

    mapping(string id => mapping(uint256 coinType => bytes addr)) addrRecords;    // hold users addresses for given ens domain

    mapping(string id => mapping(string key => string value)) public textRecords; // need to store encrypted values here in string, conform to ens interface

    mapping(string id => mapping(address delegate => bool authorized)) delegates; // store users delegate permissions

    /**
     * ensure reader is owner or has delegate permissions
     */
    modifier authorizedRead(string calldata id){
        if(!checkOwnerOrDelegate(id)){
            revert L2Registry__UnauthorizedRead(msg.sender);
        }
        _;
    }

    /**
     * ensure writer is the owner
     */
    modifier authorizedWrite(string calldata id){
        if(registry.getOwner(id) != msg.sender){
            revert L2Registry__UnauthorizedWrite(msg.sender);
        }
        _;
    }

    /**
     * ensure new delegate assigner is owner or has delegate permissions
     */
    modifier authorizedAssign(string calldata id){
        if(!checkOwnerOrDelegate(id)){
            revert L2Registry__UnauthorizedAssign(msg.sender);
        }
        _;
    }

    constructor(address _registry) Ownable(msg.sender) {
        addrRecords["me.enclave.eth"][0] = abi.encode(0x51);
        registry = L2Registry(_registry);
    }

    /**
     * Add new user address to mapping
     */
    function setAddrRecord(string calldata id, uint256 coinType, bytes calldata addr) authorizedWrite(id) public {
        addrRecords[id][coinType] = addr;
    }

    /**
     * Add new text entry into mapping
     */
    function setTextRecord(string calldata id, string calldata key, string calldata value) authorizedWrite(id) public {
        textRecords[id][key] = value;
    }

    /**
     * Add new encrypted entry into text mapping (256 bit)
     */
    function setEuint256TextRecord(string calldata id, string calldata key, inEuint256 calldata value) authorizedWrite(id) public {
        euint256 e = FHE.asEuint256(value);
        uint256 u = euint256.unwrap(e);
        textRecords[id][key] = u.toString();
    }

    /**
     * Add new encrypted entry into text mapping (128 bit)
     */
    function setEuint128TextRecord(string calldata id, string calldata key, inEuint128 calldata value) authorizedWrite(id) public {
        euint128 e = FHE.asEuint128(value);
        uint256 u = euint128.unwrap(e);
        textRecords[id][key] = u.toString();
    }

    /**
     * Add new encrypted entry into text mapping (64 bit)
     */
    function setEuint64TextRecord(string calldata id, string calldata key, inEuint64 calldata value) authorizedWrite(id) public {
        euint64 e = FHE.asEuint64(value);
        uint256 u = euint64.unwrap(e);
        textRecords[id][key] = u.toString();
    }

    /**
     * Add new encrypted entry into text mapping (32 bit)
     */
    function setEuint32TextRecord(string calldata id, string calldata key, inEuint32 calldata value) authorizedWrite(id) public {
        euint32 e = FHE.asEuint32(value);
        uint256 u = euint32.unwrap(e);
        textRecords[id][key] = u.toString();
    }

    /**
     * Add new encrypted entry into text mapping (16 bit)
     */
    function setEuint16TextRecord(string calldata id, string calldata key, inEuint16 calldata value) authorizedWrite(id) public {
        euint16 e = FHE.asEuint16(value);
        uint256 u = euint16.unwrap(e);
        textRecords[id][key] = u.toString();
    }

    /**
     * Add new encrypted entry into text mapping (8 bit)
     */
    function setEuint8TextRecord(string calldata id, string calldata key, inEuint8 calldata value) authorizedWrite(id) public {
        euint8 e = FHE.asEuint8(value);
        uint256 u = euint8.unwrap(e);
        textRecords[id][key] = u.toString();
    }

    /**
     * Get address record, must be owner or delegate
     */
    function getAddrRecord(string calldata id, uint256 coinType) authorizedRead(id) public view returns(bytes memory) {
        return addrRecords[id][coinType];
    }

    /**
     * Get plain text record, must be owner or delegate
     */
    function getTextRecord(string calldata id, string calldata key) authorizedRead(id) public view returns(string memory) {
        return textRecords[id][key];
    }

    /**
     * Get encrypted text record, must be owner or delegate
     */
    function getEncTextRecord(Permission calldata permission, string calldata id, string calldata key) authorizedRead(id) public view returns(string memory) {
        string memory rec = textRecords[id][key];
        uint256 x = rec.toUint256();
        return FHE.sealoutput(FHE.asEuint256(x), permission.publicKey);
    }

    /**
     * Add new delegate, must be owner or delegate
     */
    function addNewDelegate(string calldata id, address newDelegate) authorizedAssign(id) public {
        if(delegates[id][newDelegate] == true){
            revert L2REgistry__DelegateAlreadyChanged(msg.sender, newDelegate);
        }
        delegates[id][newDelegate] = true;
    }

    /**
     * Remove existing delegate, must be owner or delegate
     */
    function removeDelegate(string calldata id, address delegate) authorizedAssign(id) public {
        if(delegates[id][msg.sender] == false){
            revert L2REgistry__DelegateAlreadyChanged(msg.sender, delegate);
        }
        delegates[id][delegate] = false;
    }

    /**
     * return true if msg.sender is an owner or a delegate
     */
    function checkOwnerOrDelegate(string calldata id) private view returns(bool){
        return registry.getOwner(id) == msg.sender || delegates[id][msg.sender] == true;
    }
}