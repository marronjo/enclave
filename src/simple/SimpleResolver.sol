// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import { SimpleRegistry } from "./SimpleRegistry.sol";
import { Strings } from "@openzeppelin/contracts/utils/Strings.sol";

// make contract into NFT ?
// encrypted records in string format

/*
    owner can read / write / assign new delegates
    delegate can read / assign new delegates
*/
contract SimpleResolver {

    error L2Registry__UnauthorizedRead(address user);
    error L2Registry__UnauthorizedWrite(address user);
    error L2Registry__UnauthorizedAssign(address user);
    error L2REgistry__DelegateAlreadyChanged(address assigner, address delegate);

    using Strings for uint256;      // OZ convert uint256 to string
    //using StringUtils for string;   // my library convert string to uint256

    SimpleRegistry registry;

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
        if(registry.getRegistryOwner() != msg.sender){
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

    constructor(address _registry) {
        addrRecords["app.myenclave.eth"][0] = abi.encode(0x51);
        textRecords["app.myenclave.eth"]["secret"] = uint256(10).toString();
        registry = SimpleRegistry(_registry);
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
     * Get address record, must be owner or delegate
     */
    function getAddrRecord(string calldata id, uint256 coinType) public view returns(bytes memory) {
        return addrRecords[id][coinType];
    }

    /**
     * Get plain text record, must be owner or delegate
     */
    function getTextRecord(string calldata id, string calldata key) public view returns(string memory) {
        return textRecords[id][key];
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
        return registry.getRegistryOwner() == msg.sender || delegates[id][msg.sender] == true;
    }
}