require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-etherscan")
require("dotenv").config()

module.exports = {
  solidity: "0.8.17",
  networks: {
    mumbai: {
      url: `${process.env.ALCHEMY_MUMBAI_URL}`,
      accounts: [`0x${process.env.MUMBAI_PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: "BIGEVX3YJAYQZSY94JTPRYJYEANCK2SG7T",
  },
}
