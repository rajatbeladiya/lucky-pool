import { ethers } from 'ethers';

import LuckyPool from '../contracts/contracts/LuckyPool.sol/LuckyPool.json';


export const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545/");
export const signer = provider.getSigner();

export const luckyPoolDeployedAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
export const luckyPoolContract = new ethers.Contract(luckyPoolDeployedAddress, LuckyPool.abi, provider);
