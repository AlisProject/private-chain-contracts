require('babel-register');
require('babel-polyfill');

module.exports = {
  networks: {
    development: {
      host: "PCParityPoA1a",
      port: 8545,
      network_id: "*", // Match any network id
      gas: 3500000,
      gasPrice: 2100000000000,
      from: '0x7ad8f90cfa071c8420e3f09fe0e413d0c47502e6'
    },
    test: {
      host: "localhost",
      port: 8545,
      network_id: "*", // Match any network id
      gas: 4400000,
      gasPrice: 2100000000000
    }
  }
};
