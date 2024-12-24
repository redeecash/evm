const Stack = require('./Stack');
const Memory = require('./Memory');
const OPCODES = require('./opcodes');
const EnvironmentInfo = require('./utils/environmentInfo');
const StackOperations = require('./operations/stackOps');
const ArithmeticOperations = require('./operations/arithmeticOps');
const ComparisonOperations = require('./operations/comparisonOps');
const PushOperations = require('./operations/pushOps');
const MemoryOperations = require('./operations/memoryOps');
const BN = require('bn.js');

class EVM {
  constructor() {
    this.stack = new Stack();
    this.memory = new Memory();
    this.pc = 0;
    this.code = Buffer.alloc(0);
    this.stopped = false;
  }

  loadCode(bytecode) {
    this.code = Buffer.isBuffer(bytecode) ? bytecode : Buffer.from(bytecode.replace('0x', ''), 'hex');
    this.pc = 0;
    this.stopped = false;
  }

  step() {
    if (this.pc >= this.code.length) {
      this.stopped = true;
      return;
    }

    const opcode = this.code[this.pc];
    this.pc++;

    switch (opcode) {
      // Stop and Arithmetic Operations
      case OPCODES.STOP:
        this.stopped = true;
        break;
      case OPCODES.ADD:
        ArithmeticOperations.add(this.stack);
        break;
      case OPCODES.MUL:
        ArithmeticOperations.mul(this.stack);
        break;
      case OPCODES.SUB:
        ArithmeticOperations.sub(this.stack);
        break;
      case OPCODES.DIV:
        ArithmeticOperations.div(this.stack);
        break;

      // Comparison Operations
      case OPCODES.LT:
        ComparisonOperations.lt(this.stack);
        break;
      case OPCODES.GT:
        ComparisonOperations.gt(this.stack);
        break;
      case OPCODES.EQ:
        ComparisonOperations.eq(this.stack);
        break;
      case OPCODES.ISZERO:
        ComparisonOperations.isZero(this.stack);
        break;

      // Memory Operations
      case OPCODES.MLOAD:
        MemoryOperations.mload(this.memory, this.stack);
        break;
      case OPCODES.MSTORE:
        MemoryOperations.mstore(this.memory, this.stack);
        break;
      case OPCODES.CODECOPY:
        MemoryOperations.codecopy(this.memory, this.stack, this.code);
        break;

      // Stack Operations
      case OPCODES.POP:
        StackOperations.pop(this.stack);
        break;
      case OPCODES.DUP1:
        StackOperations.dup1(this.stack);
        break;
      case OPCODES.SWAP1:
        StackOperations.swap1(this.stack);
        break;

      // Push Operations
      case OPCODES.PUSH1:
        this.pc = PushOperations.push(this.stack, this.code, this.pc, 1);
        break;
      case OPCODES.PUSH2:
        this.pc = PushOperations.push(this.stack, this.code, this.pc, 2);
        break;
      case OPCODES.PUSH3:
        this.pc = PushOperations.push(this.stack, this.code, this.pc, 3);
        break;
      case OPCODES.PUSH4:
        this.pc = PushOperations.push(this.stack, this.code, this.pc, 4);
        break;
      case OPCODES.PUSH5:
        this.pc = PushOperations.push(this.stack, this.code, this.pc, 5);
        break;
      case OPCODES.PUSH6:
        this.pc = PushOperations.push(this.stack, this.code, this.pc, 6);
        break;
      case OPCODES.PUSH7:
        this.pc = PushOperations.push(this.stack, this.code, this.pc, 7);
        break;
      case OPCODES.PUSH8:
        this.pc = PushOperations.push(this.stack, this.code, this.pc, 8);
        break;
      case OPCODES.PUSH9:
        this.pc = PushOperations.push(this.stack, this.code, this.pc, 9);
        break;
      case OPCODES.PUSH10:
        this.pc = PushOperations.push(this.stack, this.code, this.pc, 10);
        break;
      case OPCODES.PUSH11:
        this.pc = PushOperations.push(this.stack, this.code, this.pc, 11);
        break;
      case OPCODES.PUSH12:
        this.pc = PushOperations.push(this.stack, this.code, this.pc, 12);
        break;
      case OPCODES.PUSH13:
        this.pc = PushOperations.push(this.stack, this.code, this.pc, 13);
        break;
      case OPCODES.PUSH14:
        this.pc = PushOperations.push(this.stack, this.code, this.pc, 14);
        break;
      case OPCODES.PUSH15:
        this.pc = PushOperations.push(this.stack, this.code, this.pc, 15);
        break;
      case OPCODES.PUSH16:
        this.pc = PushOperations.push(this.stack, this.code, this.pc, 16);
        break;
      case OPCODES.PUSH17:
        this.pc = PushOperations.push(this.stack, this.code, this.pc, 17);
        break;
      case OPCODES.PUSH18:
        this.pc = PushOperations.push(this.stack, this.code, this.pc, 18);
        break;
      case OPCODES.PUSH19:
        this.pc = PushOperations.push(this.stack, this.code, this.pc, 19);
        break;
      case OPCODES.PUSH20: 
        this.pc = PushOperations.push(this.stack, this.code, this.pc, 20);
        break;
    case OPCODES.PUSH21:
      this.pc = PushOperations.push(this.stack, this.code, this.pc, 21);
      break;
    case OPCODES.PUSH22:
      this.pc = PushOperations.push(this.stack, this.code, this.pc, 22);
      break;
    case OPCODES.PUSH23:
      this.pc = PushOperations.push(this.stack, this.code, this.pc, 23);
      break;
    case OPCODES.PUSH24:
      this.pc = PushOperations.push(this.stack, this.code, this.pc, 24);
      break;
    case OPCODES.PUSH25:
      this.pc = PushOperations.push(this.stack, this.code, this.pc, 25);
      break;
    case OPCODES.PUSH26:
      this.pc = PushOperations.push(this.stack, this.code, this.pc, 26);
      break;
    case OPCODES.PUSH27:
      this.pc = PushOperations.push(this.stack, this.code, this.pc, 27);
      break;
    case OPCODES.PUSH28:
      this.pc = PushOperations.push(this.stack, this.code, this.pc, 28);
      break;
    case OPCODES.PUSH29:
      this.pc = PushOperations.push(this.stack, this.code, this.pc, 29);
      break;
    case OPCODES.PUSH30:
      this.pc = PushOperations.push(this.stack, this.code, this.pc, 30);
      break;
    case OPCODES.PUSH31:
      this.pc = PushOperations.push(this.stack, this.code, this.pc, 31);
      break;
    case OPCODES.PUSH32:
        this.pc = PushOperations.push(this.stack, this.code, this.pc, 32);
        break;
      

      // Environment Information
      case OPCODES.ADDRESS:
        this.stack.push(new BN(EnvironmentInfo.getAddress().slice(2), 16));
        break;
      case OPCODES.CALLER:
        this.stack.push(new BN(EnvironmentInfo.getCaller().slice(2), 16));
        break;
      case OPCODES.CALLVALUE:
        this.stack.push(new BN(EnvironmentInfo.getCallValue("0x0")));
        break;
      case OPCODES.NUMBER:
        this.stack.push(new BN(EnvironmentInfo.getBlockNumber()));
        break;
      case OPCODES.TIMESTAMP:
        this.stack.push(new BN(EnvironmentInfo.getTimestamp()));
        break;

      // Return Operations
      case OPCODES.RETURN: {
        const offset = this.stack.pop().toNumber();
        const length = this.stack.pop().toNumber();
        const returnValue = this.memory.memory.slice(offset, offset + length);
        this.stopped = true;
        return returnValue;
      }

      // Jump Operations
      case OPCODES.JUMPI: {
        const dest = this.stack.pop().toNumber();
        const condition = this.stack.pop();
        if (!condition.isZero()) {
          this.pc = dest;
        }
        break;
      }

      case OPCODES.JUMP: {
        const dest = this.stack.pop().toNumber();
        this.pc = dest;
        break;
      }

      case OPCODES.JUMPDEST:
        // Just a marker, no operation needed
        break;

      // Logging Operations
      case OPCODES.LOG0:
        break;     
 

      // System operations
      case OPCODES.CREATE:
        break;
      case OPCODES.CALL:
        break;
      case OPCODES.CALLCODE:
        break;
      case OPCODES.RETURN:
        break;
      case OPCODES.DELEGATECALL:
        break;
      case OPCODES.STATICCALL:
        break;
      case OPCODES.REVERT:
        break;
      case OPCODES.INVALID:
        break;
      case OPCODES.SELFDESTRUCT:
        break;
    

      default:
        throw new Error(`Unknown opcode: 0x${opcode.toString(16)}`);
    }
  }

  run() {
    while (!this.stopped) {
      const result = this.step();
      if (result !== undefined) {
        return result;
      }
    }
    
    if (this.stack.size() > 0) {
      return this.stack.pop();
    }
    
    return null;
  }
}

module.exports = EVM;