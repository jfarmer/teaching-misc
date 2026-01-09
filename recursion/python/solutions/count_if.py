"""Solution for count_if."""

from linked_list import EMPTY_LIST, Node, is_empty, prepend, unprepend


def count_if(pred, lst):
    """
    Count elements where pred(x) is True.

    count_if(is_even, 1 -> 2 -> 3 -> 4) => 2
    count_if(is_even, ()) => 0
    """
    if is_empty(lst):
        return 0

    first, rest = unprepend(lst)

    return (1 if pred(first) else 0) + count_if(pred, rest)


def is_even(n):
    return n % 2 == 0


def is_positive(n):
    return n > 0


if __name__ == '__main__':
    # Test cases
    assert count_if(is_even, Node.from_list([1, 2, 3, 4])) == 2
    assert count_if(is_even, EMPTY_LIST) == 0
    assert count_if(is_even, Node.from_list([1, 3, 5])) == 0
    assert count_if(is_even, Node.from_list([2, 4, 6])) == 3
    assert count_if(is_positive, Node.from_list([-1, 0, 1, 2])) == 2

    print("All tests passed!")
