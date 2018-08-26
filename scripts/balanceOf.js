import { web3, AlisToken } from './helper';

let response = AlisToken.balanceOf(process.env.PRIVATE_CHAIN_MAIN_SIGNER_ADDRESS);
console.log('balanceOf:', response.toPrecision());
console.log('balanceOf(ALIS):', web3.fromWei(response.toPrecision()));

