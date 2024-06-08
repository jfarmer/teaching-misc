class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class Queue:
    def __init__(self):
        self.front = None
        self.rear = None
        self.length = 0

    def enqueue(self, value):
        new_node = Node(value)

        if self.is_empty():
            self.front = self.rear = new_node
        else:
            self.rear.next = new_node
            self.rear = new_node

        self.length += 1

        return self

    def dequeue(self):
        if self.is_empty():
            return None

        value = self.front.value
        self.front = self.front.next
        self.length -= 1

        if self.is_empty():
            self.rear = None

        return value

    def is_empty(self):
        return self.length == 0

    def peek(self):
        return None if self.is_empty() else self.front.value

    def size(self):
        return self.length
