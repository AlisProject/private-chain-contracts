import { AlisToken } from './helper';

let to = '0xbdb5232157860e22120cd9b9b847ca1024cdb95f';
let amount = 10000000000000000000; // 10ALIS

let response = AlisToken.transfer.sendTransaction(
  to, amount, {
    from: process.env.PRIVATE_CHAIN_MAIN_SIGNER_ADDRESS
  },
  (error, result) => {
    if (!error) {
      console.log(result);
    } else {
      console.log(error);
    }
  }
);
