class Queue {
  constructor() {
    this.items = [];
  }
  enqueue = (value) => {
    return this.items.push(value);
  };
  dequeue = () => {
    return this.items.shift();
  };
  peek = () => {
    return this.items[0];
  };
  length = () => {
    return this.items.length;
  };
  isEmpty = () => {
    return this.items.length === 0;
  };
}

export default Queue;
