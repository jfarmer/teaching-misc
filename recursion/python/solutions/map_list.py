"""Solution for map_list."""

from linked_list import EMPTY_LIST, Node, is_empty, prepend, unprepend, to_python_list


def map_list(fn, lst):
    """
    Apply fn to every element, return new list of results.

    map_list(double, 1 -> 2 -> 3) => 2 -> 4 -> 6
    map_list(double, ()) => ()
    """
    if is_empty(lst):
        return EMPTY_LIST

    first, rest = unprepend(lst)

    return prepend(fn(first), map_list(fn, rest))


def double(n):
    return n * 2


def square(n):
    return n * n


if __name__ == '__main__':
    # Test cases
    assert to_python_list(map_list(double, Node.from_list([1, 2, 3]))) == [2, 4, 6]
    assert to_python_list(map_list(double, EMPTY_LIST)) == []
    assert to_python_list(map_list(square, Node.from_list([1, 2, 3]))) == [1, 4, 9]
    assert to_python_list(map_list(str, Node.from_list([1, 2, 3]))) == ['1', '2', '3']

    print("All tests passed!")
