import { web3 } from './helper';

const ADDRESS = process.env.PRIVATE_CHAIN_ALIS_TOKEN_ADDRESS;

const EOA = '0xcdxxxxx.....';

const FROM_BLOCK = 1;

const EVENT = 'Mint(address,uint256)';

// const EVENT = 'Transfer(address,address,uint256)'

function padLeft(eoa) {
  return `0x000000000000000000000000${eoa.slice(2)}`;
}

// function removeLeft(eoa) {
//   return `0x${ eoa.slice(26) }`;
// }

function filterdata(result) {
  for (let i = 0; i < result.length; i++) {
    console.log(`${result[i].blockNumber}, ${web3.fromWei(result[i].data, 'ether')}`);
    // console.log('%s,%s,%s', removeLeft(result[i].topics[1]),
    //   removeLeft(result[i].topics[2]), web3.fromWei(result[i].data, 'ether'))
  }
}

function getTransferHistory(address, fromBlock, eoa) {
  const fromfilter = web3.eth.filter({
    address,
    fromBlock,
    toBlock: 'latest',
    topics: [
      web3.sha3(EVENT), padLeft(eoa),
    ],
  });

  const tofilter = web3.eth.filter({
    address,
    fromBlock,
    toBlock: 'latest',
    topics: [
      web3.sha3(EVENT), null, padLeft(eoa),
    ],
  });

  fromfilter.get((error, result) => {
    filterdata(result);
  });

  tofilter.get((error, result) => {
    filterdata(result);
  });
}

getTransferHistory(ADDRESS, FROM_BLOCK, EOA);
