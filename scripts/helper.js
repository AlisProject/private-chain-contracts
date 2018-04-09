import fs from 'fs';

const AlisTokenABI = fs.readFileSync('./abi/AlisToken.abi', 'utf-8');

const Web3 = require('web3');

const web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

const address = process.env.PRIVATE_CHAIN_ALIS_TOKEN_ADDRESS;

export default web3.eth.contract(JSON.parse(AlisTokenABI)).at(address);
