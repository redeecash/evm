class Memory {
  constructor() {
    this.memory = new Uint8Array(1024 * 1024); // 1MB of memory
  }

  store(offset, value) {
    if (offset + 32 > this.memory.length) {
      throw new Error('Memory access out of bounds');
    }
    
    // Store 32 bytes (256 bits)
    for (let i = 0; i < 32; i++) {
      this.memory[offset + i] = (value >> (8 * (31 - i))) & 0xff;
    }
  }

  load(offset) {
    if (offset + 32 > this.memory.length) {
      throw new Error('Memory access out of bounds');
    }

    let value = 0n;
    for (let i = 0; i < 32; i++) {
      value = (value << 8n) | BigInt(this.memory[offset + i]);
    }
    return value;
  }
}

module.exports = Memory;