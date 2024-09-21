import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

/**
 * @example
 * const externalContracts = {
 *   1: {
 *     DAI: {
 *       address: "0x...",
 *       abi: [...],
 *     },
 *   },
 * } as const;
 */
const externalContracts = {
    // 11155111: {
    //     SimpleRegistry: {
    //         address: "0x74cbb672e9f4cf46120f68d35139e68c718c5c0b",//"0x5bd16aa3d42af4fa891284ae004068e781baab9b",
    //         abi: [
    //             {
    //                 "type": "constructor",
    //                 "inputs": [],
    //                 "stateMutability": "nonpayable"
    //             },
    //             {
    //                 "type": "function",
    //                 "name": "getOwner",
    //                 "inputs": [
    //                     {
    //                         "name": "id",
    //                         "type": "string",
    //                         "internalType": "string"
    //                     }
    //                 ],
    //                 "outputs": [
    //                     {
    //                         "name": "",
    //                         "type": "address",
    //                         "internalType": "address"
    //                     }
    //                 ],
    //                 "stateMutability": "view"
    //             },
    //             {
    //                 "type": "function",
    //                 "name": "getRecord",
    //                 "inputs": [
    //                     {
    //                         "name": "id",
    //                         "type": "string",
    //                         "internalType": "string"
    //                     }
    //                 ],
    //                 "outputs": [
    //                     {
    //                         "name": "",
    //                         "type": "tuple",
    //                         "internalType": "struct SimpleRegistry.Record",
    //                         "components": [
    //                             {
    //                                 "name": "owner",
    //                                 "type": "address",
    //                                 "internalType": "address"
    //                             },
    //                             {
    //                                 "name": "resolver",
    //                                 "type": "address",
    //                                 "internalType": "address"
    //                             }
    //                         ]
    //                     }
    //                 ],
    //                 "stateMutability": "view"
    //             },
    //             {
    //                 "type": "function",
    //                 "name": "getRegistryOwner",
    //                 "inputs": [],
    //                 "outputs": [
    //                     {
    //                         "name": "",
    //                         "type": "address",
    //                         "internalType": "address"
    //                     }
    //                 ],
    //                 "stateMutability": "view"
    //             },
    //             {
    //                 "type": "function",
    //                 "name": "getResolver",
    //                 "inputs": [
    //                     {
    //                         "name": "id",
    //                         "type": "string",
    //                         "internalType": "string"
    //                     }
    //                 ],
    //                 "outputs": [
    //                     {
    //                         "name": "",
    //                         "type": "address",
    //                         "internalType": "address"
    //                     }
    //                 ],
    //                 "stateMutability": "view"
    //             },
    //             {
    //                 "type": "function",
    //                 "name": "owner",
    //                 "inputs": [],
    //                 "outputs": [
    //                     {
    //                         "name": "",
    //                         "type": "address",
    //                         "internalType": "address"
    //                     }
    //                 ],
    //                 "stateMutability": "view"
    //             },
    //             {
    //                 "type": "function",
    //                 "name": "renounceOwnership",
    //                 "inputs": [],
    //                 "outputs": [],
    //                 "stateMutability": "nonpayable"
    //             },
    //             {
    //                 "type": "function",
    //                 "name": "setRecord",
    //                 "inputs": [
    //                     {
    //                         "name": "id",
    //                         "type": "string",
    //                         "internalType": "string"
    //                     },
    //                     {
    //                         "name": "owner",
    //                         "type": "address",
    //                         "internalType": "address"
    //                     }
    //                 ],
    //                 "outputs": [],
    //                 "stateMutability": "nonpayable"
    //             },
    //             {
    //                 "type": "function",
    //                 "name": "transferOwnership",
    //                 "inputs": [
    //                     {
    //                         "name": "newOwner",
    //                         "type": "address",
    //                         "internalType": "address"
    //                     }
    //                 ],
    //                 "outputs": [],
    //                 "stateMutability": "nonpayable"
    //             },
    //             {
    //                 "type": "event",
    //                 "name": "OwnershipTransferred",
    //                 "inputs": [
    //                     {
    //                         "name": "previousOwner",
    //                         "type": "address",
    //                         "indexed": true,
    //                         "internalType": "address"
    //                     },
    //                     {
    //                         "name": "newOwner",
    //                         "type": "address",
    //                         "indexed": true,
    //                         "internalType": "address"
    //                     }
    //                 ],
    //                 "anonymous": false
    //             },
    //             {
    //                 "type": "error",
    //                 "name": "OwnableInvalidOwner",
    //                 "inputs": [
    //                     {
    //                         "name": "owner",
    //                         "type": "address",
    //                         "internalType": "address"
    //                     }
    //                 ]
    //             },
    //             {
    //                 "type": "error",
    //                 "name": "OwnableUnauthorizedAccount",
    //                 "inputs": [
    //                     {
    //                         "name": "account",
    //                         "type": "address",
    //                         "internalType": "address"
    //                     }
    //                 ]
    //             }
    //         ],
    //     },
    //     SimpleResolver: {
    //         address: "0xbc1fa1e711e480819bb70da20ae57d9a6ddece84",
    //         abi: [
    //             {
    //                 "type": "constructor",
    //                 "inputs": [
    //                     {
    //                         "name": "_registry",
    //                         "type": "address",
    //                         "internalType": "address"
    //                     }
    //                 ],
    //                 "stateMutability": "nonpayable"
    //             },
    //             {
    //                 "type": "function",
    //                 "name": "addNewDelegate",
    //                 "inputs": [
    //                     {
    //                         "name": "id",
    //                         "type": "string",
    //                         "internalType": "string"
    //                     },
    //                     {
    //                         "name": "newDelegate",
    //                         "type": "address",
    //                         "internalType": "address"
    //                     }
    //                 ],
    //                 "outputs": [],
    //                 "stateMutability": "nonpayable"
    //             },
    //             {
    //                 "type": "function",
    //                 "name": "getAddrRecord",
    //                 "inputs": [
    //                     {
    //                         "name": "id",
    //                         "type": "string",
    //                         "internalType": "string"
    //                     },
    //                     {
    //                         "name": "coinType",
    //                         "type": "uint256",
    //                         "internalType": "uint256"
    //                     }
    //                 ],
    //                 "outputs": [
    //                     {
    //                         "name": "",
    //                         "type": "bytes",
    //                         "internalType": "bytes"
    //                     }
    //                 ],
    //                 "stateMutability": "view"
    //             },
    //             {
    //                 "type": "function",
    //                 "name": "getTextRecord",
    //                 "inputs": [
    //                     {
    //                         "name": "id",
    //                         "type": "string",
    //                         "internalType": "string"
    //                     },
    //                     {
    //                         "name": "key",
    //                         "type": "string",
    //                         "internalType": "string"
    //                     }
    //                 ],
    //                 "outputs": [
    //                     {
    //                         "name": "",
    //                         "type": "string",
    //                         "internalType": "string"
    //                     }
    //                 ],
    //                 "stateMutability": "view"
    //             },
    //             {
    //                 "type": "function",
    //                 "name": "removeDelegate",
    //                 "inputs": [
    //                     {
    //                         "name": "id",
    //                         "type": "string",
    //                         "internalType": "string"
    //                     },
    //                     {
    //                         "name": "delegate",
    //                         "type": "address",
    //                         "internalType": "address"
    //                     }
    //                 ],
    //                 "outputs": [],
    //                 "stateMutability": "nonpayable"
    //             },
    //             {
    //                 "type": "function",
    //                 "name": "setAddrRecord",
    //                 "inputs": [
    //                     {
    //                         "name": "id",
    //                         "type": "string",
    //                         "internalType": "string"
    //                     },
    //                     {
    //                         "name": "coinType",
    //                         "type": "uint256",
    //                         "internalType": "uint256"
    //                     },
    //                     {
    //                         "name": "addr",
    //                         "type": "bytes",
    //                         "internalType": "bytes"
    //                     }
    //                 ],
    //                 "outputs": [],
    //                 "stateMutability": "nonpayable"
    //             },
    //             {
    //                 "type": "function",
    //                 "name": "setTextRecord",
    //                 "inputs": [
    //                     {
    //                         "name": "id",
    //                         "type": "string",
    //                         "internalType": "string"
    //                     },
    //                     {
    //                         "name": "key",
    //                         "type": "string",
    //                         "internalType": "string"
    //                     },
    //                     {
    //                         "name": "value",
    //                         "type": "string",
    //                         "internalType": "string"
    //                     }
    //                 ],
    //                 "outputs": [],
    //                 "stateMutability": "nonpayable"
    //             },
    //             {
    //                 "type": "function",
    //                 "name": "textRecords",
    //                 "inputs": [
    //                     {
    //                         "name": "id",
    //                         "type": "string",
    //                         "internalType": "string"
    //                     },
    //                     {
    //                         "name": "key",
    //                         "type": "string",
    //                         "internalType": "string"
    //                     }
    //                 ],
    //                 "outputs": [
    //                     {
    //                         "name": "value",
    //                         "type": "string",
    //                         "internalType": "string"
    //                     }
    //                 ],
    //                 "stateMutability": "view"
    //             },
    //             {
    //                 "type": "error",
    //                 "name": "L2REgistry__DelegateAlreadyChanged",
    //                 "inputs": [
    //                     {
    //                         "name": "assigner",
    //                         "type": "address",
    //                         "internalType": "address"
    //                     },
    //                     {
    //                         "name": "delegate",
    //                         "type": "address",
    //                         "internalType": "address"
    //                     }
    //                 ]
    //             },
    //             {
    //                 "type": "error",
    //                 "name": "L2Registry__UnauthorizedAssign",
    //                 "inputs": [
    //                     {
    //                         "name": "user",
    //                         "type": "address",
    //                         "internalType": "address"
    //                     }
    //                 ]
    //             },
    //             {
    //                 "type": "error",
    //                 "name": "L2Registry__UnauthorizedRead",
    //                 "inputs": [
    //                     {
    //                         "name": "user",
    //                         "type": "address",
    //                         "internalType": "address"
    //                     }
    //                 ]
    //             },
    //             {
    //                 "type": "error",
    //                 "name": "L2Registry__UnauthorizedWrite",
    //                 "inputs": [
    //                     {
    //                         "name": "user",
    //                         "type": "address",
    //                         "internalType": "address"
    //                     }
    //                 ]
    //             }
    //         ],
    //     },
    // },
    8008135:{
        L2Registry: {
            address: "0x45776686c138e782Fb9ea26FFd54A6C3EAAbf677",
            abi: [
                {
                    "type": "constructor",
                    "inputs": [],
                    "stateMutability": "nonpayable"
                },
                {
                    "type": "function",
                    "name": "getOwner",
                    "inputs": [
                        {
                            "name": "id",
                            "type": "string",
                            "internalType": "string"
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "address",
                            "internalType": "address"
                        }
                    ],
                    "stateMutability": "view"
                },
                {
                    "type": "function",
                    "name": "getRecord",
                    "inputs": [
                        {
                            "name": "id",
                            "type": "string",
                            "internalType": "string"
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "tuple",
                            "internalType": "struct L2Registry.Record",
                            "components": [
                                {
                                    "name": "owner",
                                    "type": "address",
                                    "internalType": "address"
                                },
                                {
                                    "name": "resolver",
                                    "type": "address",
                                    "internalType": "address"
                                }
                            ]
                        }
                    ],
                    "stateMutability": "view"
                },
                {
                    "type": "function",
                    "name": "getRegistryOwner",
                    "inputs": [],
                    "outputs": [
                        {
                            "name": "",
                            "type": "address",
                            "internalType": "address"
                        }
                    ],
                    "stateMutability": "view"
                },
                {
                    "type": "function",
                    "name": "getResolver",
                    "inputs": [
                        {
                            "name": "id",
                            "type": "string",
                            "internalType": "string"
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "address",
                            "internalType": "address"
                        }
                    ],
                    "stateMutability": "view"
                },
                {
                    "type": "function",
                    "name": "owner",
                    "inputs": [],
                    "outputs": [
                        {
                            "name": "",
                            "type": "address",
                            "internalType": "address"
                        }
                    ],
                    "stateMutability": "view"
                },
                {
                    "type": "function",
                    "name": "renounceOwnership",
                    "inputs": [],
                    "outputs": [],
                    "stateMutability": "nonpayable"
                },
                {
                    "type": "function",
                    "name": "setRecord",
                    "inputs": [
                        {
                            "name": "id",
                            "type": "string",
                            "internalType": "string"
                        },
                        {
                            "name": "owner",
                            "type": "address",
                            "internalType": "address"
                        }
                    ],
                    "outputs": [],
                    "stateMutability": "nonpayable"
                },
                {
                    "type": "function",
                    "name": "transferOwnership",
                    "inputs": [
                        {
                            "name": "newOwner",
                            "type": "address",
                            "internalType": "address"
                        }
                    ],
                    "outputs": [],
                    "stateMutability": "nonpayable"
                },
                {
                    "type": "event",
                    "name": "OwnershipTransferred",
                    "inputs": [
                        {
                            "name": "previousOwner",
                            "type": "address",
                            "indexed": true,
                            "internalType": "address"
                        },
                        {
                            "name": "newOwner",
                            "type": "address",
                            "indexed": true,
                            "internalType": "address"
                        }
                    ],
                    "anonymous": false
                },
                {
                    "type": "error",
                    "name": "OwnableInvalidOwner",
                    "inputs": [
                        {
                            "name": "owner",
                            "type": "address",
                            "internalType": "address"
                        }
                    ]
                },
                {
                    "type": "error",
                    "name": "OwnableUnauthorizedAccount",
                    "inputs": [
                        {
                            "name": "account",
                            "type": "address",
                            "internalType": "address"
                        }
                    ]
                }
            ]
        },
        L2Resolver: {
            address: "0x86dC3dAc4a2Fe779fb0A383A689bE65793377040",
            abi: [
                {
                    "type": "constructor",
                    "inputs": [
                        {
                            "name": "_registry",
                            "type": "address",
                            "internalType": "address"
                        }
                    ],
                    "stateMutability": "nonpayable"
                },
                {
                    "type": "function",
                    "name": "addNewDelegate",
                    "inputs": [
                        {
                            "name": "id",
                            "type": "string",
                            "internalType": "string"
                        },
                        {
                            "name": "newDelegate",
                            "type": "address",
                            "internalType": "address"
                        }
                    ],
                    "outputs": [],
                    "stateMutability": "nonpayable"
                },
                {
                    "type": "function",
                    "name": "addrRecords",
                    "inputs": [
                        {
                            "name": "id",
                            "type": "string",
                            "internalType": "string"
                        },
                        {
                            "name": "coinType",
                            "type": "uint256",
                            "internalType": "uint256"
                        }
                    ],
                    "outputs": [
                        {
                            "name": "addr",
                            "type": "bytes",
                            "internalType": "bytes"
                        }
                    ],
                    "stateMutability": "view"
                },
                {
                    "type": "function",
                    "name": "delegates",
                    "inputs": [
                        {
                            "name": "id",
                            "type": "string",
                            "internalType": "string"
                        },
                        {
                            "name": "delegate",
                            "type": "address",
                            "internalType": "address"
                        }
                    ],
                    "outputs": [
                        {
                            "name": "authorized",
                            "type": "bool",
                            "internalType": "bool"
                        }
                    ],
                    "stateMutability": "view"
                },
                {
                    "type": "function",
                    "name": "eip712Domain",
                    "inputs": [],
                    "outputs": [
                        {
                            "name": "fields",
                            "type": "bytes1",
                            "internalType": "bytes1"
                        },
                        {
                            "name": "name",
                            "type": "string",
                            "internalType": "string"
                        },
                        {
                            "name": "version",
                            "type": "string",
                            "internalType": "string"
                        },
                        {
                            "name": "chainId",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "verifyingContract",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "salt",
                            "type": "bytes32",
                            "internalType": "bytes32"
                        },
                        {
                            "name": "extensions",
                            "type": "uint256[]",
                            "internalType": "uint256[]"
                        }
                    ],
                    "stateMutability": "view"
                },
                {
                    "type": "function",
                    "name": "getAddrRecord",
                    "inputs": [
                        {
                            "name": "id",
                            "type": "string",
                            "internalType": "string"
                        },
                        {
                            "name": "coinType",
                            "type": "uint256",
                            "internalType": "uint256"
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "bytes",
                            "internalType": "bytes"
                        }
                    ],
                    "stateMutability": "view"
                },
                {
                    "type": "function",
                    "name": "getEncTextRecord",
                    "inputs": [
                        {
                            "name": "permission",
                            "type": "tuple",
                            "internalType": "struct Permission",
                            "components": [
                                {
                                    "name": "publicKey",
                                    "type": "bytes32",
                                    "internalType": "bytes32"
                                },
                                {
                                    "name": "signature",
                                    "type": "bytes",
                                    "internalType": "bytes"
                                }
                            ]
                        },
                        {
                            "name": "id",
                            "type": "string",
                            "internalType": "string"
                        },
                        {
                            "name": "key",
                            "type": "string",
                            "internalType": "string"
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "string",
                            "internalType": "string"
                        }
                    ],
                    "stateMutability": "view"
                },
                {
                    "type": "function",
                    "name": "getTextRecord",
                    "inputs": [
                        {
                            "name": "id",
                            "type": "string",
                            "internalType": "string"
                        },
                        {
                            "name": "key",
                            "type": "string",
                            "internalType": "string"
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "string",
                            "internalType": "string"
                        }
                    ],
                    "stateMutability": "view"
                },
                {
                    "type": "function",
                    "name": "removeDelegate",
                    "inputs": [
                        {
                            "name": "id",
                            "type": "string",
                            "internalType": "string"
                        },
                        {
                            "name": "delegate",
                            "type": "address",
                            "internalType": "address"
                        }
                    ],
                    "outputs": [],
                    "stateMutability": "nonpayable"
                },
                {
                    "type": "function",
                    "name": "setAddrRecord",
                    "inputs": [
                        {
                            "name": "id",
                            "type": "string",
                            "internalType": "string"
                        },
                        {
                            "name": "coinType",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "addr",
                            "type": "bytes",
                            "internalType": "bytes"
                        }
                    ],
                    "outputs": [],
                    "stateMutability": "nonpayable"
                },
                {
                    "type": "function",
                    "name": "setEuint128TextRecord",
                    "inputs": [
                        {
                            "name": "id",
                            "type": "string",
                            "internalType": "string"
                        },
                        {
                            "name": "key",
                            "type": "string",
                            "internalType": "string"
                        },
                        {
                            "name": "value",
                            "type": "tuple",
                            "internalType": "struct inEuint128",
                            "components": [
                                {
                                    "name": "data",
                                    "type": "bytes",
                                    "internalType": "bytes"
                                },
                                {
                                    "name": "securityZone",
                                    "type": "int32",
                                    "internalType": "int32"
                                }
                            ]
                        }
                    ],
                    "outputs": [],
                    "stateMutability": "nonpayable"
                },
                {
                    "type": "function",
                    "name": "setEuint16TextRecord",
                    "inputs": [
                        {
                            "name": "id",
                            "type": "string",
                            "internalType": "string"
                        },
                        {
                            "name": "key",
                            "type": "string",
                            "internalType": "string"
                        },
                        {
                            "name": "value",
                            "type": "tuple",
                            "internalType": "struct inEuint16",
                            "components": [
                                {
                                    "name": "data",
                                    "type": "bytes",
                                    "internalType": "bytes"
                                },
                                {
                                    "name": "securityZone",
                                    "type": "int32",
                                    "internalType": "int32"
                                }
                            ]
                        }
                    ],
                    "outputs": [],
                    "stateMutability": "nonpayable"
                },
                {
                    "type": "function",
                    "name": "setEuint256TextRecord",
                    "inputs": [
                        {
                            "name": "id",
                            "type": "string",
                            "internalType": "string"
                        },
                        {
                            "name": "key",
                            "type": "string",
                            "internalType": "string"
                        },
                        {
                            "name": "value",
                            "type": "tuple",
                            "internalType": "struct inEuint256",
                            "components": [
                                {
                                    "name": "data",
                                    "type": "bytes",
                                    "internalType": "bytes"
                                },
                                {
                                    "name": "securityZone",
                                    "type": "int32",
                                    "internalType": "int32"
                                }
                            ]
                        }
                    ],
                    "outputs": [],
                    "stateMutability": "nonpayable"
                },
                {
                    "type": "function",
                    "name": "setEuint32TextRecord",
                    "inputs": [
                        {
                            "name": "id",
                            "type": "string",
                            "internalType": "string"
                        },
                        {
                            "name": "key",
                            "type": "string",
                            "internalType": "string"
                        },
                        {
                            "name": "value",
                            "type": "tuple",
                            "internalType": "struct inEuint32",
                            "components": [
                                {
                                    "name": "data",
                                    "type": "bytes",
                                    "internalType": "bytes"
                                },
                                {
                                    "name": "securityZone",
                                    "type": "int32",
                                    "internalType": "int32"
                                }
                            ]
                        }
                    ],
                    "outputs": [],
                    "stateMutability": "nonpayable"
                },
                {
                    "type": "function",
                    "name": "setEuint64TextRecord",
                    "inputs": [
                        {
                            "name": "id",
                            "type": "string",
                            "internalType": "string"
                        },
                        {
                            "name": "key",
                            "type": "string",
                            "internalType": "string"
                        },
                        {
                            "name": "value",
                            "type": "tuple",
                            "internalType": "struct inEuint64",
                            "components": [
                                {
                                    "name": "data",
                                    "type": "bytes",
                                    "internalType": "bytes"
                                },
                                {
                                    "name": "securityZone",
                                    "type": "int32",
                                    "internalType": "int32"
                                }
                            ]
                        }
                    ],
                    "outputs": [],
                    "stateMutability": "nonpayable"
                },
                {
                    "type": "function",
                    "name": "setEuint8TextRecord",
                    "inputs": [
                        {
                            "name": "id",
                            "type": "string",
                            "internalType": "string"
                        },
                        {
                            "name": "key",
                            "type": "string",
                            "internalType": "string"
                        },
                        {
                            "name": "value",
                            "type": "tuple",
                            "internalType": "struct inEuint8",
                            "components": [
                                {
                                    "name": "data",
                                    "type": "bytes",
                                    "internalType": "bytes"
                                },
                                {
                                    "name": "securityZone",
                                    "type": "int32",
                                    "internalType": "int32"
                                }
                            ]
                        }
                    ],
                    "outputs": [],
                    "stateMutability": "nonpayable"
                },
                {
                    "type": "function",
                    "name": "setTextRecord",
                    "inputs": [
                        {
                            "name": "id",
                            "type": "string",
                            "internalType": "string"
                        },
                        {
                            "name": "key",
                            "type": "string",
                            "internalType": "string"
                        },
                        {
                            "name": "value",
                            "type": "string",
                            "internalType": "string"
                        }
                    ],
                    "outputs": [],
                    "stateMutability": "nonpayable"
                },
                {
                    "type": "function",
                    "name": "textRecords",
                    "inputs": [
                        {
                            "name": "id",
                            "type": "string",
                            "internalType": "string"
                        },
                        {
                            "name": "key",
                            "type": "string",
                            "internalType": "string"
                        }
                    ],
                    "outputs": [
                        {
                            "name": "value",
                            "type": "string",
                            "internalType": "string"
                        }
                    ],
                    "stateMutability": "view"
                },
                {
                    "type": "event",
                    "name": "EIP712DomainChanged",
                    "inputs": [],
                    "anonymous": false
                },
                {
                    "type": "error",
                    "name": "InvalidShortString",
                    "inputs": []
                },
                {
                    "type": "error",
                    "name": "L2REgistry__DelegateAlreadyChanged",
                    "inputs": [
                        {
                            "name": "assigner",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "delegate",
                            "type": "address",
                            "internalType": "address"
                        }
                    ]
                },
                {
                    "type": "error",
                    "name": "L2Registry__UnauthorizedAssign",
                    "inputs": [
                        {
                            "name": "user",
                            "type": "address",
                            "internalType": "address"
                        }
                    ]
                },
                {
                    "type": "error",
                    "name": "L2Registry__UnauthorizedRead",
                    "inputs": [
                        {
                            "name": "user",
                            "type": "address",
                            "internalType": "address"
                        }
                    ]
                },
                {
                    "type": "error",
                    "name": "L2Registry__UnauthorizedWrite",
                    "inputs": [
                        {
                            "name": "user",
                            "type": "address",
                            "internalType": "address"
                        }
                    ]
                },
                {
                    "type": "error",
                    "name": "SignerNotMessageSender",
                    "inputs": []
                },
                {
                    "type": "error",
                    "name": "SignerNotOwner",
                    "inputs": []
                },
                {
                    "type": "error",
                    "name": "StringTooLong",
                    "inputs": [
                        {
                            "name": "str",
                            "type": "string",
                            "internalType": "string"
                        }
                    ]
                }
            ]
        }
    },
} as const;

export default externalContracts satisfies GenericContractsDeclaration;
