#!/usr/bin/env bash
curl --data \
  '{"method":"personal_sendTransaction","params":[{"from":"0xbdb5232157860e22120cd9b9b847ca1024cdb95f","to":"0x7ad8f90cfa071c8420e3f09fe0e413d0c47502e6","value":"0x3E8"},"password"],"id":1,"jsonrpc":"2.0"}' \
  -H "Content-Type: application/json" -X POST PCParityPoA1a:8545
