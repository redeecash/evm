const BN = require('bn.js');

class StackOperations {
  static dup1(stack) {
    if (stack.size() < 1) {
      throw new Error('Stack underflow');
    }
    const value = stack.peek();
    stack.push(new BN(value));
  }

  static swap1(stack) {
    if (stack.size() < 2) {
      throw new Error('Stack underflow');
    }
    const a = stack.pop();
    const b = stack.pop();
    stack.push(a);
    stack.push(b);
  }

  static pop(stack) {
    stack.pop();
  }
}

module.exports = StackOperations;