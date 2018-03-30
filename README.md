# Private chain contracts
Contracts for the ALIS PoA Private chain.  

# Prerequisite 
- node.js
    - See: `.node-version`
- yarn

# Usage

1. `git clone https://github.com/AlisProject/private-chain-contracts.git`
1. `cd private-chain-contracts`
1. `yarn`
1. `yarn truffle install`

# Test
- `yarn test:all`

## Run single test
- `yarn test ./test/alis_token.js`

# Debug
- `yarn debug`
    - You can use `debugger;` function of node.

# Linting
- `yarn lint`

# Deployment
You should adjust `gas` and `gasPrice` at `truffle.js`.

## Private net & Test net
- `yarn deploy`

## Main net
- `truffle deploy --network live`

# License
- [GPL-3.0](https://www.gnu.org/licenses/gpl-3.0.txt)
