const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const chaiBigNumber = require('chai-bignumber');

// exports
export const { BigNumber } = web3;
export const should = chai
  .use(chaiAsPromised)
  .use(chaiBigNumber(BigNumber))
  .should();

export const AlisToken = artifacts.require('AlisToken.sol');
