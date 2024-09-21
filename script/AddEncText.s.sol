// // SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.25 <0.9.0;

import { L2Resolver } from "../src/L2Resolver.sol";
import { FHE, euint256 } from "@fhenixprotocol/contracts/FHE.sol";

import { BaseScript } from "./Base.s.sol";

/// @dev See the Solidity Scripting tutorial: https://book.getfoundry.sh/tutorials/solidity-scripting
contract AddEncText is BaseScript {
    function run() public broadcast returns (L2Resolver resolver, euint256 num) {
        resolver = new L2Resolver(address(1));

        num = FHE.asEuint256(12345678);
    }
}
