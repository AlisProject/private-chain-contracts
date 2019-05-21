#!/usr/bin/env bash

curl --data \
  '{"method":"personal_unlockAccount","params":["$PRIVATE_CHAIN_MAIN_SIGNER_ADDRESS","password",null],"id":1,"jsonrpc":"2.0"}' \
  -H "Content-Type: application/json" -X POST PCParityPoA1a:8545
