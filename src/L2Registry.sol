// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract L2Registry {

    struct Record {
        address owner;
        address resolver;
    }

    mapping(string => Record) records;

    constructor() {
        records["me.enclave.eth"] = Record(address(0x1234), address(0x5678));
    }

    function setRecord(string calldata name, address resolver, address owner) public {
        records[name].resolver = resolver;
        records[name].owner = owner;
    }

    function getRecord(string calldata name) public view returns (Record memory) {
        return records[name];
    }

    function getOwner(string calldata name) public view returns (address) {
        return records[name].owner;
    }

    function getResolver(string calldata name) public view returns (address) {
        return records[name].resolver;
    }

}