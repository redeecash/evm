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
## Priority Queue
Explanation

1. PQueue:
    - p-queue manages a queue of tasks with optional prioritization and concurrency limits.
    - The concurrency option ensures that only a set number of tasks run simultaneously.

2. Priority Handling:
    - The priority is passed via the query string (e.g., ?priority=1&requestId=123).
    - Tasks with a lower priority value are processed first (default priority is 10 if not provided).

3. Middleware Integration:
    - The middleware intercepts requests, adds them to the priority queue, and ensures they are processed in the order defined by the queue.

4. Concurrency Limit:
    - The concurrency: 1 setting ensures that no more than 1 task is processed at the same time.