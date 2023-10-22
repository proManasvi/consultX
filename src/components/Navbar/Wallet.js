'use client'

import React, { useState } from "react";
import { ethers } from "ethers";

const networks = {
  polygon: {
    chainId: `0x${Number(80001).toString(16)}`,
    chainName: "Polygon Testnet",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: ["https://rpc-mumbai.maticvigil.com/"],
    blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
  },
};

const Wallet = () => {
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState("");
  const [connected, setConnected] = useState(false);

  const connectWallet = async () => {
    if (!window.ethereum) {
      console.error("window.ethereum is not available");
      return;
    }

    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });

      const provider = new ethers.providers.Web3Provider(window.ethereum, "any");

      if (provider.network && provider.network.name !== "matic") {
        await window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              ...networks["polygon"],
            },
          ],
        });
      }

      const account = provider.getSigner();
      const Address = await account.getAddress();
      setAddress(Address);

      const Balance = ethers.utils.formatEther(await account.getBalance());
      setBalance(Balance);

      setConnected(true); // Set the connected state to true
    } catch (error) {
      console.error("Error connecting wallet: ", error);
    }
  };

  return (
    <div>
      {connected ? (
        <div className="bg-blue-500 text-white px-4 py-2 rounded-full">
          <div className="text-right">{address.slice(0, 6)}...{address.slice(39)}</div>
          <div className="text-right">{balance.slice(0, 4)} Matic</div>
        </div>
      ) : (
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full"
          onClick={connectWallet}
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default Wallet;
