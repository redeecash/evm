const BN = require('bn.js');

class ArithmeticOperations {
  static add(stack) {
    const a = stack.pop();
    const b = stack.pop();
    stack.push(new BN(a).add(new BN(b)));
  }

  static mul(stack) {
    const a = stack.pop();
    const b = stack.pop();
    stack.push(new BN(a).mul(new BN(b)));
  }

  static sub(stack) {
    const a = stack.pop();
    const b = stack.pop();
    stack.push(new BN(a).sub(new BN(b)));
  }

  static div(stack) {
    const a = stack.pop();
    const b = stack.pop();
    if (b.isZero()) {
      stack.push(new BN(0));
    } else {
      stack.push(new BN(a).div(new BN(b)));
    }
  }
}

module.exports = ArithmeticOperations;