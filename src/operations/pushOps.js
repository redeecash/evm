const BN = require('bn.js');

class PushOperations {
  static push(stack, code, pc, size) {
    const value = code.slice(pc, pc + size);
    stack.push(new BN(value));
    return pc + size;
  }
}

module.exports = PushOperations;