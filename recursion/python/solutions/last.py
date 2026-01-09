"""Solution for last."""

from linked_list import EMPTY_LIST, Node, is_empty, prepend, unprepend


def last(lst):
    """
    Return the last element of a non-empty list.

    last(1 -> 2 -> 3) => 3
    last(42) => 42
    """
    if is_empty(lst.next):
        return lst.value

    first, rest = unprepend(lst)

    return last(rest)


if __name__ == '__main__':
    # Test cases
    assert last(Node.from_list([1, 2, 3])) == 3
    assert last(Node.from_list([42])) == 42
    assert last(Node.from_list([1, 2, 3, 4, 5])) == 5
    assert last(Node.from_list(['a', 'b', 'c'])) == 'c'

    print("All tests passed!")
