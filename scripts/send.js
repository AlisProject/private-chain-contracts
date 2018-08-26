import { web3 } from './helper';

web3.eth.sendTransaction(
  {
    from: process.env.PRIVATE_CHAIN_MAIN_SIGNER_ADDRESS,
    to: '0xbdb5232157860e22120cd9b9b847ca1024cdb95f',
    value: 1000000000000000000, // 1 ETH
  },
  (err, transactionHash) => {
    if (err) {
      console.log(err);
    } else {
      console.log(transactionHash);
    }
  },
);
