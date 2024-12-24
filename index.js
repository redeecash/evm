const express = require('express');
const ip = require('ip');
const EVM = require('./src/EVM');
const Contract = require('./src/Contract');
const EnvironmentInfo = require('./src/utils/environmentInfo');

// Create an instance of our EVM
const evm = new EVM();

let contract = null;

const app = express();

// Use express.json() for parsing JSON request bodies
app.use(express.json());

// JSON-RPC handler
app.post('/', async (req, res) => {
  const { jsonrpc, method, params, id } = req.body;

  if (!jsonrpc || jsonrpc !== '2.0') {
    return res.status(400).send({ error: 'Invalid JSON-RPC version' });
  }

  try {
    if (method === 'eth_deploy') {
      const { abi, bytecode } = params;
      await deploy(abi, bytecode);
      res.send({ jsonrpc: '2.0', result: 'Contract deployed successfully', id });
    } else if (method === 'eth_invokeMethod') {
      const { methodName, args } = params;
      const result = await invokeMethod(methodName, args);
      res.send({ jsonrpc: '2.0', result, id });
    } else if (method === 'eth_getCallValue') {
      const result = EnvironmentInfo.getCallValue();
      res.send({ jsonrpc: '2.0', result, id });
    } else if (method === 'eth_getAddress') {
      const result = EnvironmentInfo.getAddress();
      res.send({ jsonrpc: '2.0', result, id });
    } else if (method === 'eth_getCaller') {
      const result = EnvironmentInfo.getCaller();
      res.send({ jsonrpc: '2.0', result, id });
    } else if (method === 'eth_getBlockNumber') {
      const result = EnvironmentInfo.getBlockNumber();
      res.send({ jsonrpc: '2.0', result, id });
    } else if (method === 'eth_getTimestamp') {
      const result = EnvironmentInfo.getTimestamp();
      res.send({ jsonrpc: '2.0', result, id });
    } else {
      res.status(400).send({ jsonrpc: '2.0', error: 'Method not found', id });
    }
  } catch (error) {
    res.status(500).send({ jsonrpc: '2.0', error: error.message, id });
  }
});


async function deploy(contractABI, contractBytecode) {
  // Create a contract instance
  contract = new Contract(contractABI, contractBytecode);

  // Deploy the contract (simplified deployment)
  console.log('Deploying contract...');
  evm.loadCode(contractBytecode);
  await evm.run();
}

async function invokeMethod(methodName, args=[]) {
  // Call increment function
  console.log('Calling increment...');
  const methodCall = contract.encodeFunctionCall(methodName);
  evm.loadCode(methodCall);
  const result = await evm.run();
  return result;
}

// Start server
const PORT = 8545;
app.listen(PORT,ip.address(), () => {
  console.log(`EVM JSON-RPC server running on http://${ip.address()}:${PORT}`);
});
