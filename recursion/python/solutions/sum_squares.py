"""Solution for sum_squares."""

from linked_list import EMPTY_LIST, Node, is_empty, prepend, unprepend


def sum_squares(lst):
    """
    Return the sum of squares of all elements.

    sum_squares(1 -> 2 -> 3) => 1 + 4 + 9 = 14
    sum_squares(()) => 0
    """
    if is_empty(lst):
        return 0

    first, rest = unprepend(lst)

    return first * first + sum_squares(rest)


if __name__ == '__main__':
    # Test cases
    assert sum_squares(Node.from_list([1, 2, 3])) == 14
    assert sum_squares(Node.from_list([1, 1, 1])) == 3
    assert sum_squares(Node.from_list([5])) == 25
    assert sum_squares(EMPTY_LIST) == 0
    assert sum_squares(Node.from_list([0, 0, 0])) == 0

    print("All tests passed!")
