"""Solution for is_sorted."""

from linked_list import EMPTY_LIST, Node, is_empty, prepend, unprepend


def is_sorted(lst):
    """
    Return True if lst is sorted in ascending order.

    is_sorted(1 -> 2 -> 3) => True
    is_sorted(1 -> 3 -> 2) => False
    is_sorted(()) => True
    is_sorted(42) => True (single element)
    """
    if is_empty(lst):
        return True

    if is_empty(lst.next):
        return True

    first, rest = unprepend(lst)
    second = rest.value

    return first <= second and is_sorted(rest)


if __name__ == '__main__':
    # Test cases
    assert is_sorted(Node.from_list([1, 2, 3])) == True
    assert is_sorted(Node.from_list([1, 3, 2])) == False
    assert is_sorted(EMPTY_LIST) == True
    assert is_sorted(Node.from_list([42])) == True
    assert is_sorted(Node.from_list([1, 1, 2, 3])) == True
    assert is_sorted(Node.from_list([3, 2, 1])) == False

    print("All tests passed!")
