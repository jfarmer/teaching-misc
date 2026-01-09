"""Solution for reverse."""

from linked_list import EMPTY_LIST, Node, is_empty, prepend, unprepend, to_python_list
from append import append


def reverse(lst):
    """
    Return a new list with elements in reverse order.

    reverse(1 -> 2 -> 3) => 3 -> 2 -> 1
    reverse(()) => ()
    """
    if is_empty(lst):
        return EMPTY_LIST

    first, rest = unprepend(lst)

    return append(first, reverse(rest))


if __name__ == '__main__':
    # Test cases
    assert to_python_list(reverse(Node.from_list([1, 2, 3]))) == [3, 2, 1]
    assert to_python_list(reverse(EMPTY_LIST)) == []
    assert to_python_list(reverse(Node.from_list([42]))) == [42]
    assert to_python_list(reverse(Node.from_list(['a', 'b', 'c']))) == ['c', 'b', 'a']

    print("All tests passed!")
