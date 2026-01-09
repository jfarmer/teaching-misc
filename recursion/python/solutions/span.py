"""Solution for span."""

from linked_list import EMPTY_LIST, Node, is_empty, prepend, unprepend, to_python_list


def span(pred, lst):
    """
    Split where predicate first becomes False.

    span(is_positive, 1 -> 2 -> -3 -> 4) => (1 -> 2, -3 -> 4)
    span(is_positive, -1 -> 2 -> 3) => ((), -1 -> 2 -> 3)

    Like (take_while pred, drop_while pred) but more efficient.
    """
    if is_empty(lst):
        return (EMPTY_LIST, EMPTY_LIST)

    first, rest = unprepend(lst)
    if not pred(first):
        return (EMPTY_LIST, lst)

    left, right = span(pred, rest)

    return (prepend(first, left), right)


def is_positive(n):
    return n > 0


def is_even(n):
    return n % 2 == 0


if __name__ == '__main__':
    # Test cases
    left, right = span(is_positive, Node.from_list([1, 2, -3, 4]))
    assert to_python_list(left) == [1, 2]
    assert to_python_list(right) == [-3, 4]

    left, right = span(is_positive, Node.from_list([-1, 2, 3]))
    assert to_python_list(left) == []
    assert to_python_list(right) == [-1, 2, 3]

    left, right = span(is_positive, EMPTY_LIST)
    assert to_python_list(left) == []
    assert to_python_list(right) == []

    left, right = span(is_even, Node.from_list([2, 4, 5, 6]))
    assert to_python_list(left) == [2, 4]
    assert to_python_list(right) == [5, 6]

    print("All tests passed!")
