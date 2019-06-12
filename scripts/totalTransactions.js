import { web3 } from './helper';

const accounts = web3.eth.accounts;

for (let i = 0; i < accounts.length; i++) {
  web3.eth.getTransactionCount(accounts[i], (error, count) => {
    console.log(count);
  });
}

// yarn babel-node scripts/totalTransactions.js | sum
