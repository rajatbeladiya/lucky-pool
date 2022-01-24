pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract LuckyPool is Ownable {

    struct Pool {
        string poolName;
        uint256 ticketPrice;
        uint256 time;
        bool completed;
    }

    Pool[] public pools;

    function createPool (string memory _poolName, uint256 _ticketPrice, uint256 _time) public onlyOwner  {
        pools.push(
                Pool({
                poolName: _poolName,
                ticketPrice: _ticketPrice,
                time: _time,
                completed: false
            })
        );
    }

    function getPool (uint _index)
        public
        view
        returns (string memory poolName, uint256 ticketPrice, uint256 time, bool completed)
    {
        Pool storage pool = pools[_index];
        return (pool.poolName, pool.ticketPrice, pool.time, pool.completed);
    }

}