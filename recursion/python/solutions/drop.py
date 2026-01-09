"""Solution for drop."""

from linked_list import EMPTY_LIST, Node, is_empty, prepend, unprepend, to_python_list


def drop(n, lst):
    """
    Return a new list without the first n elements.

    drop(2, 1 -> 2 -> 3 -> 4) => 3 -> 4
    drop(0, 1 -> 2 -> 3) => 1 -> 2 -> 3
    drop(5, 1 -> 2) => ()
    """
    if n == 0 or is_empty(lst):
        return lst

    first, rest = unprepend(lst)

    return drop(n - 1, rest)


if __name__ == '__main__':
    # Test cases
    assert to_python_list(drop(2, Node.from_list([1, 2, 3, 4]))) == [3, 4]
    assert to_python_list(drop(0, Node.from_list([1, 2, 3]))) == [1, 2, 3]
    assert to_python_list(drop(5, Node.from_list([1, 2]))) == []
    assert to_python_list(drop(3, Node.from_list([1, 2, 3]))) == []
    assert to_python_list(drop(1, Node.from_list([1, 2, 3]))) == [2, 3]

    print("All tests passed!")
