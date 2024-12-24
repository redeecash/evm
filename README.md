# Ethereum Virtual Machine (EVM)
A standalone EVM for contract deployment and testing wuthout using any blockchain or gas.

## Test Requests

**Deploy Contract**
```json
{
  "jsonrpc": "2.0",
  "method": "eth_deploy",
  "params": {
    "abi": [ /* ABI JSON Array */ ],
    "bytecode": "0x600060005560206000f3"
  },
  "id": 1
}
```

**Invoke Method**
```json
{
  "jsonrpc": "2.0",
  "method": "eth_invokeMethod",
  "params": {
    "methodName": "increment",
    "args": []
  },
  "id": 2
}
```
