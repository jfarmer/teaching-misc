class Node:
    def __init__(self, value, next = None):
        self.value = value
        self.next = next

class Queue:
    def __init__(self):
        self.head = None
        self.tail = None
        self.size = 0

    def enqueue(self, value):
        new_tail = Node(value)

        if self.is_empty():
            self.head = new_tail
        else:
            self.tail.next = new_tail

        self.tail = new_tail
        self.size += 1

        return self

    def dequeue(self):
        if self.is_empty():
            return None

        value = self.head.value
        self.head = self.head.next
        self.size -= 1

        if self.is_empty():
            self.tail = None

        return value

    def is_empty(self):
        return self.size == 0

    def peek(self):
        return None if self.is_empty() else self.head.value
