// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

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
contract L2Resolver is Ownable {

    mapping(string id => mapping(string key => string value)) public textRecords;
    mapping(string id => mapping(uint256 coinType => bytes32 addr)) addrRecords;

    constructor() Ownable(msg.sender) {}

    function setTextRecord(string calldata id, string calldata key, string calldata value) onlyOwner public {
        textRecords[id][key] = value;
    }

    function setAddrRecord(string calldata id, uint256 coinType, bytes32 addr) onlyOwner public {
        addrRecords[id][coinType] = addr;
    }

    function getTextRecord(string calldata id, string calldata key) public view returns(string memory) {
        return textRecords[id][key];
    }

    function getAddrRecord(string calldata id, uint256 coinType) public view returns(bytes32) {
        return addrRecords[id][coinType];
    }

}