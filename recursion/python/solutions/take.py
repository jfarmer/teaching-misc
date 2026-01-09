"""Solution for take."""

from linked_list import EMPTY_LIST, Node, is_empty, prepend, unprepend, to_python_list


def take(n, lst):
    """
    Return a new list with the first n elements.

    take(2, 1 -> 2 -> 3 -> 4) => 1 -> 2
    take(0, 1 -> 2 -> 3) => ()
    take(5, 1 -> 2) => 1 -> 2
    """
    if n == 0 or is_empty(lst):
        return EMPTY_LIST

    first, rest = unprepend(lst)

    return prepend(first, take(n - 1, rest))


if __name__ == '__main__':
    # Test cases
    assert to_python_list(take(2, Node.from_list([1, 2, 3, 4]))) == [1, 2]
    assert to_python_list(take(0, Node.from_list([1, 2, 3]))) == []
    assert to_python_list(take(5, Node.from_list([1, 2]))) == [1, 2]
    assert to_python_list(take(3, Node.from_list([1, 2, 3]))) == [1, 2, 3]
    assert to_python_list(take(1, Node.from_list([1, 2, 3]))) == [1]

    print("All tests passed!")
