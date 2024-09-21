// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import { L2Resolver } from "./L2Resolver.sol";

contract L2Registry {

    L2Resolver defaultResolver;

    struct Record {
        address owner;
        address resolver;
    }

    mapping(string id => Record) records;

    constructor() {
        defaultResolver = new L2Resolver(address(this));
        records["me.enclave.eth"] = Record(address(msg.sender), address(defaultResolver));
    }

    function setRecord(string calldata id,  address owner) public {
        records[id].resolver = address(defaultResolver);
        records[id].owner = owner;
    }

    function getRecord(string calldata id) public view returns (Record memory) {
        return records[id];
    }

    function getOwner(string calldata id) public view returns (address) {
        return records[id].owner;
    }

    function getResolver(string calldata id) public view returns (address) {
        return records[id].resolver;
    }
}