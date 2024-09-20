// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

/*
  Contract that stores encrypted values, manages permissions for each value etc.
*/
contract SimpleEnclave is Ownable {
    bytes secret;
    address owner;

    constructor(bytes memory _secret) Ownable(msg.sender) {
        secret = _secret;
        owner = msg.sender;
    }

    function getSecret() onlyOwner public view returns(bytes memory) {
        return secret;
    }
}