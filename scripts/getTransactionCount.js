import { web3 } from './helper';

const address = process.argv[2];
if (!address) {
  console.log('No block_number');
  process.exit();
}


web3.eth.getTransactionCount(address, (error, count) => {
  console.log(count);
});
