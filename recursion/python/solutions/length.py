"""Solution for length."""

from linked_list import EMPTY_LIST, Node, is_empty, prepend, unprepend


def length(lst):
    """
    Return the number of elements in the list.

    length(a -> b -> c) => 3
    length(()) => 0
    """
    if is_empty(lst):
        return 0

    first, rest = unprepend(lst)

    return 1 + length(rest)


if __name__ == '__main__':
    # Test cases
    assert length(Node.from_list(['a', 'b', 'c'])) == 3
    assert length(Node.from_list([1, 2, 3, 4, 5])) == 5
    assert length(Node.from_list([42])) == 1
    assert length(EMPTY_LIST) == 0

    print("All tests passed!")
