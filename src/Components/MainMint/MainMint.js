import React from "react";
import { useState } from "react";
import { ethers, BigNumber } from "ethers";
import CryptoUndies from "../../Abis/CryptoUndies.json";

import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";

const cryptoUndiesNFTAddress = "0x70e48577f38dc1F21Ab3980aC88B4A7C1fDBA769";

function MainMint({ accounts, setAccounts, isConected }) {
  const [mintAmmount, setMintAmmount] = useState(1);
  console.log("isConected from MainMint", isConected);
  const abi = CryptoUndies.abi;

  async function handleMint() {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      //this allows ethers to connect to the blockchain
      const signer = provider.getSigner();
      const contract = new ethers.Contract(cryptoUndiesNFTAddress, abi, signer);
      try {
        const response = await contract.mint(BigNumber.from(mintAmmount), {
          value: ethers.utils.parseEther((0.002 * mintAmmount).toString()),
        });
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
    if (mintAmmount >= 3) return;
    setMintAmmount(mintAmmount + 1);
    console.log("mintAmmount: ", mintAmmount);
  };
  //   this is because in the contract we said that the max ammount is 3 per wallet.

  return (
    <Flex justify="center" align="center" height="100vh" paddingBottom="150px">
      <Box width="250px">
        <div>
          <Text
            fontSize="48px"
            textShadow="0 5 #000000"
            fontFamily="Amatic-bold"
          >
            CryptoUndies
          </Text>
          <Text fontSize="30px" letterSpacing="-5.5%">
            {" "}
            Mint CryptoUndies and express yourself to the fullest
          </Text>
        </div>
        {isConected ? (
          <div>
            <Flex align="center" justify="center">
              <Button
                backgroundColor="#D6517d"
                borderRadius="5px"
                boxShadow="0px 2px 2px 1px #0f0f0f"
                color="white"
                cursor="pointer"
                fontFamily="inherit"
                padding="15px"
                margin="0px 15px"
                onClick={handleDecrement}
              >
                -
              </Button>
              <Input
                readOnly
                fontFamily="inherit"
                width="100%"
                type="number"
                textAlign="center"
                height="40px"
                paddingLeft="19px"
                marginTop="10px"
                value={mintAmmount}
              />
              <Button
                backgroundColor="#D6517d"
                borderRadius="5px"
                boxShadow="0px 2px 2px 1px #0f0f0f"
                color="white"
                cursor="pointer"
                fontFamily="inherit"
                padding="15px"
                margin="0px 15px"
                onClick={handleIncrement}
              >
                +
              </Button>
            </Flex>
            <Button
              backgroundColor="#D6517d"
              borderRadius="5px"
              boxShadow="0px 2px 2px 1px #0f0f0f"
              color="white"
              cursor="pointer"
              fontFamily="inherit"
              padding="15px"
              margin="0px 15px"
              onClick={handleMint}
              marginTop="10px"
            >
              Mint Now!
            </Button>
          </div>
        ) : (
          <Text> You must be connected to Mint</Text>
        )}
      </Box>
    </Flex>
  );
}

export default MainMint;
