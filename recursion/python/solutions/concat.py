"""Solution for concat."""

from linked_list import EMPTY_LIST, Node, is_empty, prepend, unprepend, to_python_list


def concat(lst1, lst2):
    """
    Concatenate two lists.

    concat(1 -> 2, 3 -> 4) => 1 -> 2 -> 3 -> 4
    concat((), 1 -> 2) => 1 -> 2
    concat(1 -> 2, ()) => 1 -> 2

    Note: Recurse on lst1, lst2 stays fixed.
    """
    if is_empty(lst1):
        return lst2

    first, rest = unprepend(lst1)

    return prepend(first, concat(rest, lst2))


if __name__ == '__main__':
    # Test cases
    assert to_python_list(concat(Node.from_list([1, 2]), Node.from_list([3, 4]))) == [1, 2, 3, 4]
    assert to_python_list(concat(EMPTY_LIST, Node.from_list([1, 2]))) == [1, 2]
    assert to_python_list(concat(Node.from_list([1, 2]), EMPTY_LIST)) == [1, 2]
    assert to_python_list(concat(EMPTY_LIST, EMPTY_LIST)) == []

    print("All tests passed!")
