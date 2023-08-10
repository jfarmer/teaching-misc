class WackyStack {
  constructor(iter = []) {
    this.items = [...iter];
  }

  // Push item onto the stack
  push(item) {
    this.items.push(item);
  }

  // Pop item off the stack in a random order
  pop() {
    if (this.isEmpty()) {
      throw new Error('Stack is empty');
    }

    const randomIndex = Math.floor(Math.random() * this.items.length);
    const [removedItem] = this.items.splice(randomIndex, 1);

    return removedItem;
  }

  // Peek at the top of the stack, without removing it
  peek() {
    if (this.isEmpty()) {
      throw new Error('Stack is empty');
    }

    return this.items[this.items.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Return the number of items in the stack
  get size() {
    return this.items.length;
  }
}

module.exports = {
  WackyStack,
};
