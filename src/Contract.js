const BN = require('bn.js');

class Contract {
  constructor(abi, bytecode) {
    this.abi = abi;
    this.bytecode = Buffer.isBuffer(bytecode) ? bytecode : Buffer.from(bytecode.replace('0x', ''), 'hex');
  }

  encodeFunctionCall(functionName, params = []) {
    const func = this.abi.find(item => 
      item.type === 'function' && 
      item.name === functionName
    );

    if (!func) {
      throw new Error(`Function ${functionName} not found in ABI`);
    }

    // Simple function selector calculation (first 4 bytes of keccak256)
    const selector = Buffer.from(functionName).slice(0, 4);
    
    // Very basic parameter encoding (only supports uint256 for this example)
    const encodedParams = params.map(param => {
      return Buffer.from(param.toString(16).padStart(64, '0'), 'hex');
    });

    return Buffer.concat([selector, ...encodedParams]);
  }
}

module.exports = Contract;