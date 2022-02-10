import { ethers } from 'ethers';

import LuckyPool from '../contracts/contracts/LuckyPool.sol/LuckyPool.json';
import USDC from '../contracts/contracts/USDC.sol/USDC.json';


export const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545/");
export const signer = provider.getSigner();

export const luckyPoolDeployedAddress = "0xa513E6E4b8f2a923D98304ec87F64353C4D5C853";
export const luckyPoolContract = new ethers.Contract(luckyPoolDeployedAddress, LuckyPool.abi, signer);

export const usdcDeployedAddress = '0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9';
export const usdcContract = new ethers.Contract(usdcDeployedAddress, USDC.abi, signer);
