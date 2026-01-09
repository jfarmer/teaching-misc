"""Solution for take_while."""

from linked_list import EMPTY_LIST, Node, is_empty, prepend, unprepend, to_python_list


def take_while(pred, lst):
    """
    Return elements from the front while pred(x) is True.

    take_while(is_positive, 1 -> 2 -> -3 -> 4) => 1 -> 2
    take_while(is_positive, -1 -> 2 -> 3) => ()
    """
    if is_empty(lst):
        return EMPTY_LIST

    first, rest = unprepend(lst)

    return prepend(first, take_while(pred, rest)) if pred(first) else EMPTY_LIST


def is_positive(n):
    return n > 0


def is_even(n):
    return n % 2 == 0


if __name__ == '__main__':
    # Test cases
    assert to_python_list(take_while(is_positive, Node.from_list([1, 2, -3, 4]))) == [1, 2]
    assert to_python_list(take_while(is_positive, Node.from_list([-1, 2, 3]))) == []
    assert to_python_list(take_while(is_positive, EMPTY_LIST)) == []
    assert to_python_list(take_while(is_even, Node.from_list([2, 4, 5, 6]))) == [2, 4]
    assert to_python_list(take_while(is_positive, Node.from_list([1, 2, 3]))) == [1, 2, 3]

    print("All tests passed!")
