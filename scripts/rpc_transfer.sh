#!/usr/bin/env bash
curl --data \
  '{"method":"personal_sendTransaction","params":[{"from":"0xbdb5232157860e22120cd9b9b847ca1024cdb95f", "to":"0x1383b25f9ba231e3a1a1e45c0b5689d778d44ad5","value":"0x0","data":"0xa9059cbb0000000000000000000000007ad8f90cfa071c8420e3f09fe0e413d0c47502e60000000000000000000000000000000000000000000000000DE0B6B3A7640000"},"password"],"id":1,"jsonrpc":"2.0"}' \
  -H "Content-Type: application/json" -X POST PCParityPoA1a:8545
