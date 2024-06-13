class Node:
    def __init__(self, data, next=None):
        self.data = data
        self.next = next

    def prepend(self, value):
        return Node(value, self)

    def unprepend(self):
        return self.next

class LinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
        self.size = 0

    def add_to_front(self, value):
        new_node = Node(value, self.head)
        self.head = new_node

        if self.size == 0:
            self.tail = self.head

        self.size += 1

        return self

    def remove_from_front(self):
        if not self.head:
            return None

        value = self.head.data
        self.head = self.head.unprepend()

        self.size -= 1

        if self.size == 0:
            self.tail = None

        return value

    def add_to_tail(self, value):
        new_tail = Node(value)

        if self.size == 0:
            self.head = new_tail
        else:
            self.tail.next = new_tail

        self.size += 1

        self.tail = new_tail
