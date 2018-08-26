import { web3 } from './helper';

let balance = web3.eth.getBalance(process.env.PRIVATE_CHAIN_MAIN_SIGNER_ADDRESS);
console.log('balance:', balance.toPrecision());
console.log('balance(ETH):', web3.fromWei(balance.toPrecision()));
