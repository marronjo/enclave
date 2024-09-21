// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

library StringUtils {

    function toUint256(string memory str) public pure returns (uint256) {
        uint256 result = 0;
        for (uint256 i = 0; i < bytes(str).length; i++) {
            uint256 digit = uint256(uint8(bytes(str)[i]) - 48);
            result = result * 10 + digit;
        }
        return result;
    }   
}