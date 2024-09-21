// SPDX-License-Identifier: MIT
pragma solidity >=0.8.25 <0.9.0;

import { Test } from "forge-std/src/Test.sol";

import { L2Registry } from "../src/L2Registry.sol";

contract L2RegistryTest is Test {

    L2Registry registry;

    address user = makeAddr("user");

    function setUp() public virtual {
        vm.prank(user);
        registry = new L2Registry();
    }

    function testGetDefaultRecord() external view {
        L2Registry.Record memory record = registry.getRecord("me.enclave.eth");
        assertEq(record.owner, user);
    }
}