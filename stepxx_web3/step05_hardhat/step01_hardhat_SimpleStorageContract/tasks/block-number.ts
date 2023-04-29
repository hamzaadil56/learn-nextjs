import { HardhatRuntimeEnvironment } from "hardhat/types";
import { task } from "hardhat/config";

task("block-number", "Prints the current block number").setAction(
  // const blockTask = async function() => {}
  // async function blockTask() {}
  async (taskArgs: string, hre: HardhatRuntimeEnvironment) => {
    const blockNumber = await hre.ethers.provider.getBlockNumber();
    console.log(`Current block number: ${blockNumber}`);
  }
);
