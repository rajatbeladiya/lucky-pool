import { ethers } from 'ethers';

import LuckyPool from '../contracts/contracts/LuckyPool.sol/LuckyPool.json';
import USDC from '../contracts/contracts/USDC.sol/USDC.json';


export const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545/");
export const signer = provider.getSigner();

export const luckyPoolDeployedAddress = "0x59b670e9fA9D0A427751Af201D676719a970857b";
export const luckyPoolContract = new ethers.Contract(luckyPoolDeployedAddress, LuckyPool.abi, signer);

export const usdcDeployedAddress = '0x68B1D87F95878fE05B998F19b66F4baba5De1aed';
export const usdcContract = new ethers.Contract(usdcDeployedAddress, USDC.abi, signer);
