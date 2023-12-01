class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }

  enqueue(value) {
    let newNode = new Node(value);

    if (this.isEmpty()) {
      this.front = this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.length++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    let value = this.front.value;
    this.front = this.front.next;
    this.length--;

    if (this.isEmpty()) {
      this.rear = null;
    }

    return value;
  }

  // Check if the queue is empty
  isEmpty() {
    return this.length === 0;
  }

  // Return the value of the front item
  peek() {
    return this.isEmpty() ? null : this.front.value;
  }

  // Return the size of the queue
  size() {
    return this.length;
  }
}
