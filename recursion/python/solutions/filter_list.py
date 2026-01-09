"""Solution for filter_list."""

from linked_list import EMPTY_LIST, Node, is_empty, prepend, unprepend, to_python_list


def filter_list(pred, lst):
    """
    Return new list with only elements where pred(x) is True.

    filter_list(is_even, 1 -> 2 -> 3 -> 4) => 2 -> 4
    filter_list(is_even, 1 -> 3 -> 5) => ()
    """
    if is_empty(lst):
        return EMPTY_LIST

    first, rest = unprepend(lst)

    if pred(first):
        return prepend(first, filter_list(pred, rest))
    else:
        return filter_list(pred, rest)


def is_even(n):
    return n % 2 == 0


def is_positive(n):
    return n > 0


if __name__ == '__main__':
    # Test cases
    assert to_python_list(filter_list(is_even, Node.from_list([1, 2, 3, 4]))) == [2, 4]
    assert to_python_list(filter_list(is_even, Node.from_list([1, 3, 5]))) == []
    assert to_python_list(filter_list(is_even, EMPTY_LIST)) == []
    assert to_python_list(filter_list(is_positive, Node.from_list([-1, 0, 1, 2]))) == [1, 2]

    print("All tests passed!")
