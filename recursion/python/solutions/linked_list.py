"""Shared linked list infrastructure for solutions."""

EMPTY_LIST = None


class Node:
    """A node in a singly-linked list."""

    @staticmethod
    def from_list(lst):
        """Create a linked list from a Python list."""
        if len(lst) == 0:
            return EMPTY_LIST
        first, *rest = lst
        return prepend(first, Node.from_list(rest))

    def __init__(self, value, next=None):
        self.value = value
        self.next = next

    def __str__(self):
        return list_to_string(self)

    def __repr__(self):
        return self.__str__()


def list_to_string(lst):
    """Convert linked list to string representation."""
    if is_empty(lst):
        return '()'

    first, rest = unprepend(lst)

    return f'{first} -> {list_to_string(rest)}'


def is_empty(lst):
    """Return True if lst is the empty list."""
    return lst is EMPTY_LIST


def prepend(val, lst):
    """Add val to the front of lst."""
    return Node(val, lst)


def unprepend(lst):
    """Return (first element, rest of list) tuple."""
    return lst.value, lst.next


def to_python_list(lst):
    """Convert linked list to Python list for easier testing."""
    if is_empty(lst):
        return []
    first, rest = unprepend(lst)
    return [first] + to_python_list(rest)
