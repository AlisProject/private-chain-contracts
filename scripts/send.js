import { web3 } from './helper';

web3.eth.sendTransaction(
  {
    from: process.env.PRIVATE_CHAIN_MAIN_SIGNER_ADDRESS,
    to: '0x0',
    value: 1000000000000000000 // 1 ETH
  },
  function (err, transactionHash) {
    if (!err)
      console.log(transactionHash);
  });
