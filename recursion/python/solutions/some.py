"""Solution for some."""

from linked_list import EMPTY_LIST, Node, is_empty, prepend, unprepend


def some(pred, lst):
    """
    Return True if pred(x) is True for ANY element x in lst.

    some(is_negative, 1 -> 2 -> 3) => False
    some(is_negative, 1 -> -2 -> 3) => True
    some(is_negative, ()) => False
    """
    if is_empty(lst):
        return False

    first, rest = unprepend(lst)

    return pred(first) or some(pred, rest)


def is_negative(n):
    return n < 0


def is_even(n):
    return n % 2 == 0


if __name__ == '__main__':
    # Test cases
    assert some(is_negative, Node.from_list([1, 2, 3])) == False
    assert some(is_negative, Node.from_list([1, -2, 3])) == True
    assert some(is_negative, EMPTY_LIST) == False
    assert some(is_even, Node.from_list([1, 3, 5])) == False
    assert some(is_even, Node.from_list([1, 2, 3])) == True

    print("All tests passed!")
