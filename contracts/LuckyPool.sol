pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "hardhat/console.sol";

contract LuckyPool is Ownable {

    struct Pool {
        uint256 id;
        string poolName;
        uint256 ticketPrice;
        uint256 time;
        bool completed;
    }

    Pool[] pools;
    uint256 poolIdCounter = 1;

    mapping(uint256 => address[]) poolToParticipants;
    mapping(uint256 => address) public poolToWinner;

    IERC20 depositTokenAddress;

    constructor(address _tokenAddress) {
        createPool("first pool", 100, 120);
        depositTokenAddress = IERC20(_tokenAddress);
    }

    function createPool (string memory _poolName, uint256 _ticketPrice, uint256 _time) public onlyOwner  {
        pools.push(
                Pool({
                    id: poolIdCounter,
                    poolName: _poolName,
                    ticketPrice: _ticketPrice,
                    time: _time,
                    completed: false
            })
        );
        poolIdCounter++;
    }

    function joinPool(uint256 _poolId) public {
        depositTokenAddress.transferFrom(msg.sender, address(this), pools[_poolId].ticketPrice);
        poolToParticipants[_poolId].push(msg.sender);
    }

    function announceWinnerByPool(uint256 _poolId) public onlyOwner {
        uint256 randomWinnerIndex = random() % poolToParticipants[_poolId].length;
        poolToWinner[_poolId] = poolToParticipants[_poolId][randomWinnerIndex];
    }

    function random() private view returns (uint256) {
        return uint256(keccak256(abi.encodePacked(block.difficulty, block.timestamp)));
    }

    function prizeDistribute(uint256 _poolId) public onlyOwner {
        depositTokenAddress.transfer(poolToWinner[_poolId], depositTokenAddress.balanceOf(address(this)));
    }

    function getPoolToParticipants(uint256 _poolId) public view returns (address[] memory) {
        return poolToParticipants[_poolId];
    }

}
