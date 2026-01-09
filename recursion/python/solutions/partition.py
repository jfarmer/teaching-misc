"""Solution for partition."""

from linked_list import EMPTY_LIST, Node, is_empty, prepend, unprepend, to_python_list


def partition(pred, lst):
    """
    Split list into (elements where pred is True, elements where pred is False).

    partition(is_even, 1 -> 2 -> 3 -> 4) => (2 -> 4, 1 -> 3)
    partition(is_even, ()) => ((), ())
    """
    if is_empty(lst):
        return (EMPTY_LIST, EMPTY_LIST)

    first, rest = unprepend(lst)
    trues, falses = partition(pred, rest)

    if pred(first):
        return (prepend(first, trues), falses)
    else:
        return (trues, prepend(first, falses))


def is_even(n):
    return n % 2 == 0


def is_positive(n):
    return n > 0


if __name__ == '__main__':
    # Test cases
    evens, odds = partition(is_even, Node.from_list([1, 2, 3, 4]))
    assert to_python_list(evens) == [2, 4]
    assert to_python_list(odds) == [1, 3]

    empty1, empty2 = partition(is_even, EMPTY_LIST)
    assert to_python_list(empty1) == []
    assert to_python_list(empty2) == []

    pos, neg = partition(is_positive, Node.from_list([-1, 2, -3, 4]))
    assert to_python_list(pos) == [2, 4]
    assert to_python_list(neg) == [-1, -3]

    print("All tests passed!")
