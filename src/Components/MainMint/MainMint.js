import React from "react";
import { useState } from "react";
import { ethers, BigNumber } from "ethers";
import { CryptoUndies } from "@/Abis/CryptoUndies.json";

const cryptoUndiesNFTAddress = "0x70e48577f38dc1F21Ab3980aC88B4A7C1fDBA769";

function MainMint({ accounts, setAccounts, isConected }) {
  const [mintAmmount, setMintAmmount] = useState(1);
  console.log("isConected from MainMint", isConected);

  async function handleMint() {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      //this allows ethers to connect to the blockchain
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        cryptoUndiesNFTAddress,
        CryptoUndies.abi,
        signer
      );
      try {
        const response = await contract.mint(BigNumber.from(mintAmmount));
        console.log("response:", response);
      } catch (err) {
        console.error(err);
      }
    }
  }

  const handleDecrement = () => {
    if (mintAmmount <= 1) return;
    setMintAmmount(mintAmmount - 1);
  };

  const handleIncrement = () => {
    if (mintAmmount < 3) return;
    setMintAmmount(mintAmmount + 1);
  };
  //   this is because in the contract we said that the max ammount is 3 per wallet.

  return (
    <div>
      <h1>CryptoUndies</h1>
      <p> Mint CryptoUndies and express yourself to the fullest</p>
      {isConected ? (
        <div>
          <div>
            <button onClick={handleDecrement}>-</button>
            <input type="number" value={mintAmmount} />
            <button onClick={handleIncrement}>+</button>
          </div>
          <button onClick={handleMint}> Mint Now!</button>
        </div>
      ) : (
        <p> You must be connected to Mint</p>
      )}
    </div>
  );
}

export default MainMint;
