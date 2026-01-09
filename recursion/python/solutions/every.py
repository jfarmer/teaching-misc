"""Solution for every."""

from linked_list import EMPTY_LIST, Node, is_empty, prepend, unprepend


def every(pred, lst):
    """
    Return True if pred(x) is True for EVERY element x in lst.

    every(is_positive, 1 -> 2 -> 3) => True
    every(is_positive, 1 -> -2 -> 3) => False
    every(is_positive, ()) => True  (vacuous truth)
    """
    if is_empty(lst):
        return True

    first, rest = unprepend(lst)

    return pred(first) and every(pred, rest)


def is_positive(n):
    return n > 0


def is_even(n):
    return n % 2 == 0


if __name__ == '__main__':
    # Test cases
    assert every(is_positive, Node.from_list([1, 2, 3])) == True
    assert every(is_positive, Node.from_list([1, -2, 3])) == False
    assert every(is_positive, EMPTY_LIST) == True
    assert every(is_even, Node.from_list([2, 4, 6])) == True
    assert every(is_even, Node.from_list([2, 3, 4])) == False

    print("All tests passed!")
