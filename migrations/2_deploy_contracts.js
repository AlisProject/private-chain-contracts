const AlisToken = artifacts.require('AlisToken.sol');

module.exports = function deployContracts(deployer) {
  deployer.deploy(AlisToken);
};
