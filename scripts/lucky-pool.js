// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  let deployer, account2, account3;
  const INITIAL_TOKEN_BALANCE = hre.ethers.utils.parseEther('100');

  [deployer, account2, account3] = await hre.ethers.getSigners();

  console.log('deployer======', deployer.address);
  console.log('account2======', account2.address);
  console.log('account3======', account3.address);

  // We get the contract to deploy
  const USDC = await hre.ethers.getContractFactory("USDC");
  const usdc = await USDC.deploy();

  await usdc.deployed();

  await usdc.transfer(account2.address, INITIAL_TOKEN_BALANCE);
  await usdc.transfer(account3.address, INITIAL_TOKEN_BALANCE);

  console.log('account2 balance=====', await usdc.balanceOf(account2.address));
  console.log('account3 balance=====', await usdc.balanceOf(account3.address));

  const LuckyPool = await hre.ethers.getContractFactory("LuckyPool");
  const luckyPool = await LuckyPool.deploy(usdc.address);

  await luckyPool.deployed();

  console.log("luckypool deployed to:", luckyPool.address);
  console.log("USDC deployed to :", usdc.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
