"""Solution for contains."""

from linked_list import EMPTY_LIST, Node, is_empty, prepend, unprepend


def contains(val, lst):
    """
    Return True if val is in lst.

    contains(2, 1 -> 2 -> 3) => True
    contains(5, 1 -> 2 -> 3) => False
    contains(5, ()) => False
    """
    if is_empty(lst):
        return False

    first, rest = unprepend(lst)

    return first == val or contains(val, rest)


if __name__ == '__main__':
    # Test cases
    assert contains(2, Node.from_list([1, 2, 3])) == True
    assert contains(5, Node.from_list([1, 2, 3])) == False
    assert contains(5, EMPTY_LIST) == False
    assert contains(1, Node.from_list([1, 2, 3])) == True
    assert contains(3, Node.from_list([1, 2, 3])) == True
    assert contains('a', Node.from_list(['a', 'b', 'c'])) == True

    print("All tests passed!")
