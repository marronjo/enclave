// SPDX-License-Identifier: MIT
pragma solidity >=0.8.25 <0.9.0;

import { Test } from "forge-std/src/Test.sol";

import { L2Resolver } from "../src/L2Resolver.sol";
import { L2Registry } from "../src/L2Registry.sol";
import { FheEnabled } from "../util/FheHelper.sol";
import { inEuint256 } from "@fhenixprotocol/contracts/FHE.sol";
import { Permission, PermissionHelper } from "../util/PermissionHelper.sol";

contract L2ResolverTest is Test, FheEnabled {

    L2Resolver resolver;

    PermissionHelper private permitHelper;

    address user1 = vm.addr(0xB0B);
    uint256 user1PrivateKey = 0xB0B;

    address user2 = vm.addr(0xA11CE);
    uint256 user2PrivateKey = 0xA11CE;
    
    address registry;

    uint256 defaultCoinType = 0;
    bytes defaultAddress = abi.encode(100);
    string testEnsDomain = "me.test.eth";
    string key = "secret";

    Permission permission;

    function setUp() public virtual {
        initializeFhe();

        vm.startPrank(user1);
        registry = address(new L2Registry());
        resolver = new L2Resolver(registry);

        permitHelper = new PermissionHelper(address(resolver));
        permission = permitHelper.generatePermission(user1PrivateKey);
        vm.stopPrank();
    }

    function testSetAddrRecord_Success() external {
        vm.startPrank(user1);
        resolver.setAddrRecord(testEnsDomain, defaultCoinType, defaultAddress);

        bytes memory addr = resolver.getAddrRecord(testEnsDomain, defaultCoinType);
        vm.stopPrank();

        assertEq(addr, defaultAddress);
    }

    function testSetTextRecord_Success() external {
        vm.startPrank(user1);
        resolver.setTextRecord(testEnsDomain, key, "myText");

        string memory text = resolver.getTextRecord(testEnsDomain, key);
        vm.stopPrank();

        assertEq(text, "myText");
    }

    function testSetEnc256TextRecord_Success() external {
        uint256 v = 325;
        inEuint256 memory inputSecret = encrypt256(v);
        
        vm.startPrank(user1);
        resolver.setEuint256TextRecord(testEnsDomain, key, inputSecret);

        string memory encTextRecord = resolver.getEncTextRecord(permission, testEnsDomain, key);

        uint256 decryptedValue = unseal(address(resolver), encTextRecord);
        assertEq(decryptedValue, v);

        vm.stopPrank();
    }

    function testGetEnc256TextRecord_Success() external {
        vm.startPrank(user1);

        string memory encTextRecord = resolver.getEncTextRecord(permission, "me.enclave.eth", "secret");

        uint256 decryptedValue = unseal(address(resolver), encTextRecord);
        assertEq(decryptedValue, 10);

        vm.stopPrank();
    }
}