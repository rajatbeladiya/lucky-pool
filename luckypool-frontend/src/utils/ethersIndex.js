import { ethers } from 'ethers';

import LuckyPool from '../contracts/contracts/LuckyPool.sol/LuckyPool.json';
import USDC from '../contracts/contracts/USDC.sol/USDC.json';


export const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545/");
export const signer = provider.getSigner();

export const luckyPoolDeployedAddress = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9";
export const luckyPoolContract = new ethers.Contract(luckyPoolDeployedAddress, LuckyPool.abi, signer);

export const usdcDeployedAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
export const usdcContract = new ethers.Contract(usdcDeployedAddress, USDC.abi, signer);
