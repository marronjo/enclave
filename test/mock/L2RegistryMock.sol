// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import { L2Resolver } from "../../src/L2Resolver.sol";

contract L2RegistryMock {

    address owner;

    constructor(address _owner) {
        owner = _owner;
    }

    // function setRecord(string calldata id,  address owner) public {
    //     records[id].resolver = address(defaultResolver);
    //     records[id].owner = owner;
    // }

    // function getRecord(string calldata id) public view returns (Record memory) {
    //     return records[id];
    // }

    function getOwner(string calldata /*id*/) public view returns (address) {
        return owner;
    }

    // function getResolver(string calldata id) public view returns (address) {
    //     return records[id].resolver;
    // }
}