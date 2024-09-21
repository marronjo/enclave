// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import { Permissioned, Permission } from "@fhenixprotocol/contracts/access/Permissioned.sol";
import { FHE, euint256, inEuint256 } from "@fhenixprotocol/contracts/FHE.sol";

// add more fields, for metadata etc.
// need mapping string, string, string for generic fields
// need mapping for address
// what if it doesn't confrom to addres type
// name => coinType => bytes address

// text records
// address records

// make contract into NFT

// encrypted records ??

/*
  Contract called by custom gateway to resolve id to enclave address
*/
contract L2Resolver is Ownable, Permissioned {

    mapping(string id => mapping(uint256 coinType => bytes addr)) addrRecords;

    mapping(string id => mapping(string key => string value)) public textRecords;

    mapping(string id => mapping(string key => euint256 encValue)) public encTextRecords;

    constructor() Ownable(msg.sender) {}

    function setAddrRecord(string calldata id, uint256 coinType, bytes calldata addr) onlyOwner public {
        addrRecords[id][coinType] = addr;
    }

    function setTextRecord(string calldata id, string calldata key, string calldata value) onlyOwner public {
        textRecords[id][key] = value;
    }

    function setEncTextRecord(string calldata id, string calldata key, inEuint256 calldata encValue) onlyOwner public {
        encTextRecords[id][key] = FHE.asEuint256(encValue);
    }

    function getAddrRecord(string calldata id, uint256 coinType) public view returns(bytes memory) {
        return addrRecords[id][coinType];
    }

    function getTextRecord(string calldata id, string calldata key) public view returns(string memory) {
        return textRecords[id][key];
    }

    function getEncTextRecord(Permission calldata permission, string calldata id, string calldata key) onlySender(permission) public view returns(string memory) {
        return FHE.sealoutput(encTextRecords[id][key], permission.publicKey);
    }
}