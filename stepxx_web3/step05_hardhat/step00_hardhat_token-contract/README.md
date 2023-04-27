# Hardhat-Tutorial for Beginners

================================

Hardhat is a development environment for building and testing smart contracts on the Ethereum blockchain. It provides a set of tools and libraries that make it easy for developers to write, deploy, and test their smart contracts.

[Read this documentation to setup your development environment according to your OS.](https://hardhat.org/tutorial/setting-up-the-environment)

## Create a new project

Open a new terminal and run these commands to create a new folder:

```mkdir hardhat-tutorial
cd hardhat-tutorial
npm init
npm install --save-dev hardhat
npx hardhat

```

Select Create a TypeScript project with your keyboard and hit enter.

## Writing smart contracts

Go to contracts directory and create a file inside the directory called Token.sol. Delete Lock.sol file.

Paste the code from the repository in Token.sol file and take a minute to read the code. It's simple and it's full of comments explaining the basics of Solidity.

## Compiling Contracts

To compile the contract run npx hardhat compile in your terminal. The compile task is one of the built-in tasks.

```
npx hardhat compile

```

The contract has been successfully compiled and it's ready to be used.

## Testing Contracts

Go to a directory called test inside our project root directory and replace Lock.ts file with Token.ts.

Copy the code from Token.ts file which is located in this project's test directory.

In your terminal run:

```
npx hardhat test

```

You should see the following output:

```
Token contract
    ✓ Deployment should assign the total supply of tokens to the owner (654ms)


  1 passing (663ms)
```

## Deploying Contract

Go to a directory called as scripts inside the project root's directory, and paste the code from deploy.ts from this project to the file in your directory

Run the following command in your terminal

```
npx hardhat run scripts/deploy.ts

```

This will deploy the smart contract in the local hardhat network which is built in hardhat enoironment.

### Deploying Contract to Live Network

To deploy to a remote network such as mainnet or any testnet, you need to add a network entry to your hardhat.config.ts file. We’ll use Sepolia for this example, but you can add any network similarly:

Read hardhat.config.ts file from this repository and you will find how to set configuring options to connect with Sepolia testnet.

Finally, run:

```
npx hardhat run scripts/deploy.js --network sepolia

```

If everything went well, you should see the deployed contract address.
