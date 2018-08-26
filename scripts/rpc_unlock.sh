#!/usr/bin/env bash

curl --data \
  '{"method":"personal_unlockAccount","params":["0xbdb5232157860e22120cd9b9b847ca1024cdb95f","password",null],"id":1,"jsonrpc":"2.0"}' \
  -H "Content-Type: application/json" -X POST PCParityPoA1a:8545
