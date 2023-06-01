This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Dependencies:

create-react-app: https://create-react-app.dev/
hardhat: https://hardhat.org/
infura: https://infura.io/
etherscan: https://etherscan.io/
node: https://nodejs.org/en/download/
chakra ui: https://chakra-ui.com/docs/getting-st...

## Etherscan deployed contract :

https://sepolia.etherscan.io/address/0x70e48577f38dc1f21ab3980ac88b4a7c1fdba769

## Contract address:

0x70e48577f38dc1F21Ab3980aC88B4A7C1fDBA769

## do not forget to install the dotev package:

npm install -D dotenv

## Create a new deploy file for each of the contracts that you have and change the names of the constanst for:

```
const hre = require("hardhat");

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const unlockTime = currentTimestampInSeconds + 60;

  const lockedAmount = hre.ethers.utils.parseEther("0.001");

  const CryptoUndies = await hre.ethers.getContractFactory("CryptoUndies");
  const cryptoUndies = await CryptoUndies.deploy();

  await cryptoUndies.deployed();

  console.log(
    `Lock with ${ethers.utils.formatEther(
      lockedAmount
    )}ETH and unlock timestamp ${unlockTime} deployed to ${
      cryptoUndies.address
    }`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

```

Pay attention to the the const with capital letters and the ones underscores change it with the name of your contracts.

## Important configuration from the hardhat.config.js

```
require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
const dotenv = require("dotenv");
dotenv.config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: process.env.MY_ALCHEMY_RPC_ENDPOINT,
      accounts: [process.env.MY_PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: process.env.MY_ETHERSCAN_KEY,
  },
};

```

## Commands to deploy

npx hardhat clean
npx hardhat compile
npx hardhat run scripts/"name of the deploy file for each contract in the scripts directory"(in this case is "deployCryptoUndies.js") --network "name of the network" (in this case is sepolia)

## .env file

MY_ALCHEMY_RPC_ENDPOINT= "Go to alchemy and create a new project, you will recieve an API key"

MY_PRIVATE_KEY= "This is the private key of your wallet that is going to deploy the contract"

MY_ETHERSCAN_KEY= "create an account in etherscan and then ask for a private key"

## DO NOT FORGET TO GO TO THE CONTRACT AGAIN AND CHANGE THE ISABLETOMINT to "True"

otherwise the contract will not be allowed to be mint. Remember that this can be done only by the wallet that deployed the contract.

## Command to verify the contract once is already available and deployed on the blockchain:

npx hardhat run scripts/deploy.ts --network sepolia

(google to see what is what you have to install in order for this command to work)

## Constructor function , has to have same parameters as the script function that is going to be used to deploy.

in this case I got an error because my script had 2 parameters and my constructor had 0 parameters. They always have to match.

## The package that we need to install in order to verify the contract in ethrscan, because when we deploy the contract will be in bits and not in human readable code is:

npm i -D @nomiclabs/hardhat-etherscan

now we add this to the hardatconfig package:

require(nomiclabs/hardhat-ether)

## Run the command to verify:

npx hardhat verify --network "name of the network" (in this case the network is sepolia) contract address

npx hardhat verify --network sepolia 0x70e48577f38dc1F21Ab3980aC88B4A7C1fDBA769
