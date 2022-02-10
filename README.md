# Unstoppable Swap

Lucky Pool is a lottery play to earn game. Anyone can join the current pool with USDC coin and try their luck to win the lottery. Currently it is declaring the winner by simple random function but I am building on it to choose random winner with Chainlink randomness. I am planning to build this as `No Loss Lottery` by depositing this amount at AAVE protocol.

# Live at

[https://lucky-pool.netlify.app/](https://lucky-pool.netlify.app/ "Unstoppable Swap")

# Setup and run the app

1. Clone this repo

2. At root directory, Setup `secrets.json` file with InfuraUrl and privateKey <br />

2. Deploy Contracts using `npx hardhat run scripts/lucky-pool.js --network rinkeby`<br />

3. go to fronent directory and install required dependencies by `cd luckypool-frontend && npm install`<br />

4. run `npm start` .<br />
