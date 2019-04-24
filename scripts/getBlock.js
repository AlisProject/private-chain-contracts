import { web3 } from './helper';

const block_number = process.argv[2];
if (!block_number) {
  console.log("No block_number");
  process.exit();
}

const block = web3.eth.getBlock(block_number);
console.log('Block number: ' + block.number);
console.log('Time stamp: ' + block.timestamp);

const date = new Date(block.timestamp * 1000);
console.log('Date: ' + date.getFullYear() + '/' + date.getMonth() + '/' + date.getDate() + ' ' +
  date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
);
