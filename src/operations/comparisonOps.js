const BN = require('bn.js');

class ComparisonOperations {
  static isZero(stack) {
    const value = stack.pop();
    stack.push(new BN(value.isZero() ? 1 : 0));
  }

  static eq(stack) {
    const a = stack.pop();
    const b = stack.pop();
    stack.push(new BN(a.eq(b) ? 1 : 0));
  }

  static lt(stack) {
    const a = stack.pop();
    const b = stack.pop();
    stack.push(new BN(a.lt(b) ? 1 : 0));
  }

  static gt(stack) {
    const a = stack.pop();
    const b = stack.pop();
    stack.push(new BN(a.gt(b) ? 1 : 0));
  }
}

module.exports = ComparisonOperations;