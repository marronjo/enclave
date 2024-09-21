// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import { L2Resolver } from "./L2Resolver.sol";
import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

contract L2Registry is Ownable {

    L2Resolver defaultResolver;

    struct Record {
        address owner;
        address resolver;
    }

    mapping(string id => Record) records;

    constructor() Ownable(msg.sender) {
        defaultResolver = new L2Resolver(address(this));
        records["app.myenclave.eth"] = Record(address(msg.sender), address(defaultResolver));
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

    function getRegistryOwner() public view returns (address) {
        return owner();
    }
}