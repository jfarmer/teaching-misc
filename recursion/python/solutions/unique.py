"""Solution for unique."""

from linked_list import EMPTY_LIST, Node, is_empty, prepend, unprepend, to_python_list
from contains import contains
from without import without


def unique(lst):
    """
    Remove ALL duplicates, keeping first occurrence.

    unique(1 -> 2 -> 1 -> 3 -> 2) => 1 -> 2 -> 3
    unique(()) => ()
    """
    if is_empty(lst):
        return EMPTY_LIST

    first, rest = unprepend(lst)

    return prepend(first, unique(without(first, rest)))


if __name__ == '__main__':
    # Test cases
    assert to_python_list(unique(Node.from_list([1, 2, 1, 3, 2]))) == [1, 2, 3]
    assert to_python_list(unique(EMPTY_LIST)) == []
    assert to_python_list(unique(Node.from_list([1, 1, 1]))) == [1]
    assert to_python_list(unique(Node.from_list([1, 2, 3]))) == [1, 2, 3]

    print("All tests passed!")
