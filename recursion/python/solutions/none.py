"""Solution for none."""

from linked_list import EMPTY_LIST, Node, is_empty, prepend, unprepend


def none(pred, lst):
    """
    Return True if pred(x) is False for ALL elements x in lst.

    none(is_negative, 1 -> 2 -> 3) => True
    none(is_negative, 1 -> -2 -> 3) => False
    """
    if is_empty(lst):
        return True

    first, rest = unprepend(lst)

    return not pred(first) and none(pred, rest)


def is_negative(n):
    return n < 0


def is_even(n):
    return n % 2 == 0


if __name__ == '__main__':
    # Test cases
    assert none(is_negative, Node.from_list([1, 2, 3])) == True
    assert none(is_negative, Node.from_list([1, -2, 3])) == False
    assert none(is_negative, EMPTY_LIST) == True
    assert none(is_even, Node.from_list([1, 3, 5])) == True
    assert none(is_even, Node.from_list([1, 2, 3])) == False

    print("All tests passed!")
