// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import { Permissioned, Permission } from "@fhenixprotocol/contracts/access/Permissioned.sol";
import { euint256, inEuint256, FHE } from "@fhenixprotocol/contracts/FHE.sol";

/*
  Contract that stores encrypted values, manages permissions for each value etc.
*/
contract Enclave is Ownable, Permissioned {
    euint256 secret;
    address owner;

    constructor(inEuint256 memory _secret) Ownable(msg.sender) {
        secret = FHE.asEuint256(_secret);
        owner = msg.sender;
    }

    function getSecret(Permission calldata permission) public view onlySender(permission) returns(string memory) {
        return FHE.sealoutput(secret, permission.publicKey);
    }

    //TODO manage permission for multiple people
}