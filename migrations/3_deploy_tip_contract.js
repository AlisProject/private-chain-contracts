const Tip = artifacts.require('Tip.sol');

module.exports = function deployContracts(deployer) {
  deployer.deploy(Tip, "0x0");
};
