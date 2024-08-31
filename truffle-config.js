const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config(); // Ensure this line is included to load environment variables

module.exports = {
  networks: {
    customEDUChain: {
      provider: () => new HDWalletProvider({
        mnemonic: process.env.MNEMONIC, // Make sure the MNEMONIC environment variable is set correctly
        providerOrUrl: "https://open-campus-codex-sepolia.drpc.org",
        numberOfAddresses: 1,
        addressIndex: 0
      }),
      network_id: "656476", // Updated Network ID in decimal
      gas: 30000000, // Adjust based on network requirements
      gasPrice: 1000000000, // 1 Gwei (adjust as needed)
      confirmations: 1, // Number of confirmations to wait between deployments
      timeoutBlocks: 200, // Number of blocks to wait before timing out
      skipDryRun: true // Skip the dry run before migrations
    },
  },
  compilers: {
    solc: {
      version: "0.8.20", // Specify the Solidity compiler version
    },
  },
};
