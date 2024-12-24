class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    if (this.items.length >= 1024) {
      throw new Error('Stack overflow');
    }
    this.items.push(item);
  }

  pop() {
    if (this.items.length === 0) {
      throw new Error('Stack underflow');
    }
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  size() {
    return this.items.length;
  }
}

module.exports = Stack;