const BN = require('bn.js');

class MemoryOperations {
  static mstore(memory, stack) {
    const offset = stack.pop().toNumber();
    const value = stack.pop();
    memory.store(offset, value);
  }

  static mload(memory, stack) {
    const offset = stack.pop().toNumber();
    const value = memory.load(offset);
    stack.push(new BN(value));
  }

  static codecopy(memory, stack, code) {
    const memOffset = stack.pop().toNumber();
    const codeOffset = stack.pop().toNumber();
    const length = stack.pop().toNumber();
    
    for (let i = 0; i < length; i++) {
      if (codeOffset + i < code.length) {
        memory.memory[memOffset + i] = code[codeOffset + i];
      } else {
        memory.memory[memOffset + i] = 0;
      }
    }
  }
}

module.exports = MemoryOperations;