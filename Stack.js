'use strict';

class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
  clear() {
    this.items = [];
  }
  print() {
    console.log(this.toString());
  }
  toString() {
    return this.items.toString();
  }
}

const stack = new Stack();
console.log(stack.isEmpty());
stack.push(6);
stack.push(10);
console.log(stack.peek());
stack.push(12);
console.log(stack.size());
console.log(stack.isEmpty());
stack.push(16);
stack.pop();
stack.pop();
console.log(stack.size());
console.log(stack.items);
