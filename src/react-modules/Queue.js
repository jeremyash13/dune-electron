function Queue() {
  this.items = [];
  this.enqueue = (i) => {
    return this.items.push(i);
  };
  this.dequeue = () => {
    return this.items.shift();
  };
  this.peek = () => {
    return this.items[0];
  };
  this.length = () => {
    return this.items.length;
  };
  this.isEmpty = () => {
    return this.items.length === 0;
  };
}

export default Queue;
