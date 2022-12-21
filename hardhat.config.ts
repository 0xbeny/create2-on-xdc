import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-deploy"
import "@nomiclabs/hardhat-ethers"

import * as dotenv from "dotenv";

dotenv.config()

const privateKey =
  process.env.PRIVATE_KEY_1;
const privateKey2 =process.env.PRIVATE_KEY_2;

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  defaultNetwork:"hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
      forking: {
        url: "https://rpc.ankr.com/bsc",
        enabled:false
      },
    },
    bsc:{
      url: "https://rpc.ankr.com/bsc",
      chainId: 56,
      accounts:[`${privateKey}`, `${privateKey2}`],
    },
    ftm:{
      url: "https://rpc.ankr.com/fantom",
      chainId: 250,
      accounts:[`${privateKey}`, `${privateKey2}`],
    },
    bscTestnet: {
      url: "http://data-seed-prebsc-2-s2.binance.org:8545/",
      chainId: 97,
      accounts: [`${privateKey}`, `${privateKey2}`],
    },
    ftmTestnet:{
      url: "https://rpc.ankr.com/fantom_testnet",
      chainId: 4002,
      accounts: [`${privateKey}`, `${privateKey2}`],
    },
    rinkeby:{
      url: "https://rpc.ankr.com/eth_rinkeby",
      chainId: 4,
      accounts: [`${privateKey}`, `${privateKey2}`],
    },
    ropsten:{
      url: "https://rpc.ankr.com/eth_ropsten",
      chainId: 3,
      accounts: [`${privateKey}`, `${privateKey2}`],
    },
    mumbai:{
      url: "https://rpc.ankr.com/polygon_mumbai",
      chainId: 80001,
      accounts: [`${privateKey}`, `${privateKey2}`],
    },
    bitgert:{
      url: "https://rpc.icecreamswap.com",
      chainId: 32520,
      accounts:[`${privateKey}`, `${privateKey2}`],
    },
    wan:{
      url: "https://gwan-ssl.wandevs.org:56891",
      chainId: 888,
      accounts:[`${privateKey}`, `${privateKey2}`],
    },
    telos:{
      url: "https://mainnet.telos.net/evm",
      chainId: 40,
      accounts:[`${privateKey}`, `${privateKey2}`],
    }
  },
  namedAccounts:{
    deployer:{
      default:0
    }
  }
};

export default config;