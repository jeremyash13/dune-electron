class Stack {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  push(item) {
    this.items.push(item);
    this.length++;
  }
  pop() {
    return this.items.pop();
    this.length--;
  }
  peek() {
    return this.items[this.length - 1];
  }
  isEmpty() {
    return this.length === 0;
  }
}

export default Stack;
