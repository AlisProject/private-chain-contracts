import { web3, AlisToken } from './helper';

const response = AlisToken.owner.call();

console.log('response:', response);
