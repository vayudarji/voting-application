/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.11",
  defaultNetwork: "sepolia", // Set the default network to "sepolia"
  networks: {
    hardhat: {},
    sepolia: { // Define the "sepolia" network configuration
      url: API_URL, // Use the API URL from your .env file
      accounts: [`0x${PRIVATE_KEY}`], // Use the private key from your .env file
      
    },
  },
};
