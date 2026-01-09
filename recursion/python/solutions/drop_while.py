"""Solution for drop_while."""

from linked_list import EMPTY_LIST, Node, is_empty, prepend, unprepend, to_python_list


def drop_while(pred, lst):
    """
    Drop elements from the front while pred(x) is True.

    drop_while(is_positive, 1 -> 2 -> -3 -> 4) => -3 -> 4
    drop_while(is_positive, -1 -> 2 -> 3) => -1 -> 2 -> 3
    """
    if is_empty(lst):
        return EMPTY_LIST

    first, rest = unprepend(lst)

    return drop_while(pred, rest) if pred(first) else lst


def is_positive(n):
    return n > 0


def is_even(n):
    return n % 2 == 0


if __name__ == '__main__':
    # Test cases
    assert to_python_list(drop_while(is_positive, Node.from_list([1, 2, -3, 4]))) == [-3, 4]
    assert to_python_list(drop_while(is_positive, Node.from_list([-1, 2, 3]))) == [-1, 2, 3]
    assert to_python_list(drop_while(is_positive, EMPTY_LIST)) == []
    assert to_python_list(drop_while(is_even, Node.from_list([2, 4, 5, 6]))) == [5, 6]
    assert to_python_list(drop_while(is_positive, Node.from_list([1, 2, 3]))) == []

    print("All tests passed!")
