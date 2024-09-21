"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { WagmiProvider, useAccount } from "wagmi";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";
import { useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";
//import { FhenixClient, Permission, getPermit } from "fhenixjs";
//import { createPublicClient, http } from 'viem'
//import { fhenixHelium } from "~~/fhenixHelium";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  const encrypted_value = "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
  const decrypted_value = "12345678"; 

  const RegistryOwner = () => {
    const { data, error } = useScaffoldReadContract({
      contractName: "L2Registry",
      functionName: "getRegistryOwner",
    });
    if (error) {
      return <div>Error: {error.message}</div>;
    }
    return <div>L2 Resolver Owner: {data}</div>;
  }

  const FetchResolverAddressFromRegistry = () => {
    const { data, error } = useScaffoldReadContract({
      contractName: "L2Registry",
      functionName: "getResolver",
      args: ["app.myenclave.eth"],
    });
    if (error) {
      return <div>Error: {error.message}</div>;
    }
    
    return <div>L2 Resolver Address for 'app.myenclave.eth': {data}</div>;
  }

  const FetchResolverAddress = () => {
    const { data, error } = useScaffoldReadContract({
      contractName: "L2Resolver",
      functionName: "getAddrRecord",
      args: ["app.myenclave.eth", BigInt(0)],
    });
    if (error) {
      return <div>Error: {error.message}</div>;
    }
    
    return <div>L2 Address Record for 'app.myenclave.eth': {data}</div>;
  }

  const FetchResolverText = () => {
    const { data, error } = useScaffoldReadContract({
      contractName: "L2Resolver",
      functionName: "getTextRecord",
      args: ["app.myenclave.eth", "secret"],
    });
    if (error) {
      return <div>Error: {error.message}</div>;
    }
    
    return <div>L2 Text Record for 'app.myenclave.eth': {data}</div>;
  }

  return (
    <>
        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <h1>Registry Items</h1>
          {RegistryOwner()}
          {FetchResolverAddressFromRegistry()}
        </div>

        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <h1>Resolver Items</h1>
          {FetchResolverAddress()}
          {FetchResolverText()}<br/>

          Encrypted on-chain value : {encrypted_value}<br/>
          Decrypted on-chain value : {decrypted_value}<br/>
        </div>

        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <BugAntIcon className="h-8 w-8 fill-secondary" />
              <p>
                Tinker with your smart contract using the{" "}
                <Link href="/debug" passHref className="link">
                  Debug Contracts
                </Link>{" "}
                tab.
              </p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <MagnifyingGlassIcon className="h-8 w-8 fill-secondary" />
              <p>
                Explore your local transactions with the{" "}
                <Link href="/blockexplorer" passHref className="link">
                  Block Explorer
                </Link>{" "}
                tab.
              </p>
            </div>
          </div>
        </div>
    </>
  );
};

export default Home;
