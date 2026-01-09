"""Solution for find."""

from linked_list import EMPTY_LIST, Node, is_empty, prepend, unprepend


def find(pred, lst):
    """
    Return first element where pred(x) is True, or None if not found.

    find(is_even, 1 -> 3 -> 4 -> 6) => 4
    find(is_even, 1 -> 3 -> 5) => None
    """
    if is_empty(lst):
        return None

    first, rest = unprepend(lst)

    return first if pred(first) else find(pred, rest)


def is_even(n):
    return n % 2 == 0


def is_negative(n):
    return n < 0


if __name__ == '__main__':
    # Test cases
    assert find(is_even, Node.from_list([1, 3, 4, 6])) == 4
    assert find(is_even, Node.from_list([1, 3, 5])) == None
    assert find(is_even, EMPTY_LIST) == None
    assert find(is_negative, Node.from_list([1, 2, -3, 4])) == -3
    assert find(is_even, Node.from_list([2, 4, 6])) == 2

    print("All tests passed!")
