// Mock environmental information for local execution
class EnvironmentInfo {
  static getCallValue() {
    return 0n; // Mock: assume no ETH sent with call
  }

  static getAddress() {
    return '0x0000000000000000000000000000000000000000';
  }

  static getCaller() {
    return '0x0000000000000000000000000000000000000001';
  }

  static getBlockNumber() {
    return 1n;
  }

  static getTimestamp() {
    return BigInt(Math.floor(Date.now() / 1000));
  }
}

module.exports = EnvironmentInfo;