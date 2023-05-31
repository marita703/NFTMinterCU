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

## Commands to deploy

npx hardhat clean
npx hardhat deploy

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
