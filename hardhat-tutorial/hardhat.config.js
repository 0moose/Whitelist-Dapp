require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: "env" });

const QUICKNODE_HTTP_URL = process.env.QUICKNODE_HTTP_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: "https://crimson-late-mansion.ethereum-goerli.discover.quiknode.pro/c869cf9c5acd0108c4b6a43f0918e1ee6ae80016/",
      accounts: ["da4a58b41b33bc419be4a1e36bf4aff15e05a3f428d2e262e644e8493fe8e986"],
    },
  },
};