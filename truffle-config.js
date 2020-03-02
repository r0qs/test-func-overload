module.exports = {
  networks: {
    ganache: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "5777"
    },
    develop: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
      accounts: 5,
      defaultEtherBalance: 50
    },
  },
  compilers: {
    solc: {
      version: '0.6.3',
      settings: {
        optimizer: {
          enabled: true,
          runs: 100
        },
        //  evmVersion: "byzantium"
      }
    }
  }
};
