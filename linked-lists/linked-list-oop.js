class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }

  prepend(value) {
    return new Node(value, this);
  }

  unprepend() {
    return this.next;
  }
}

class LinkedList {
  constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
  }

  addToFront(value) {
      this.head = new Node(value, this.head);

      if (this.size === 0) {
        this.tail = this.head;
      }

      this.size++;

      return this;
  }

  removeFromFront() {
    if (!this.head) {
      return null;
    }

    let value = this.head.value;
    this.head = this.head.unprepend();

    this.size--;

    if (this.size === 0) {
      this.tail = null;
    }

    return value;
  }

  addToTail(value) {
    let newTail = new Node(value);

    if (this.size === 0) {
      this.head = newTail;
    } else {
      this.tail.next = newTail;
    }

    this.size++;

    this.tail = newTail;
  }
}

module.exports = {Node, LinkedList};
