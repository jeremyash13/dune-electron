class Queue {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  enqueue(value) {
    this.items.push(value);
    this.length++;
  }
  addFront(value) {
    this.items.unshift(value);
    this.length++;
  }
  dequeue() {
    this.length--;
    return this.items.shift();
  }
  shuffle() {
    /* Randomize array in-place using Durstenfeld shuffle algorithm */
      for (let i = this.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = this.items[i];
        this.items[i] = this.items[j];
        this.items[j] = temp;
    }
  }
  clear() {
    this.items.length = 0;
    this.length = 0;
  }
  peek() {
    return this.items[0];
  }
  length() {
    return this.length;
  }
  isEmpty() {
    return this.items.length === 0;
  }
}

export default Queue;
