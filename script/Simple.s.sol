// // SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.25 <0.9.0;

import { SimpleRegistry } from "../src/simple/SimpleResolver.sol";

import { BaseScript } from "./Base.s.sol";

/// @dev See the Solidity Scripting tutorial: https://book.getfoundry.sh/tutorials/solidity-scripting
contract Simple is BaseScript {
    function run() public broadcast returns (SimpleRegistry registry) {
        registry = new SimpleRegistry();
    }
}
