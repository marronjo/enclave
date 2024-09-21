// // SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.25 <0.9.0;

import { L2Registry } from "../src/L2Resolver.sol";

import { BaseScript } from "./Base.s.sol";

/// @dev See the Solidity Scripting tutorial: https://book.getfoundry.sh/tutorials/solidity-scripting
contract DeployRegistry is BaseScript {
    function run() public broadcast returns (L2Registry registry) {
        registry = new L2Registry();
    }
}
