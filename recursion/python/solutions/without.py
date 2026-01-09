"""Solution for without."""

from linked_list import EMPTY_LIST, Node, is_empty, prepend, unprepend, to_python_list


def without(val, lst):
    """
    Remove ALL occurrences of val.

    without(2, 1 -> 2 -> 3 -> 2 -> 4) => 1 -> 3 -> 4
    without(5, 1 -> 2 -> 3) => 1 -> 2 -> 3
    """
    if is_empty(lst):
        return EMPTY_LIST

    first, rest = unprepend(lst)

    if first == val:
        return without(val, rest)
    else:
        return prepend(first, without(val, rest))


if __name__ == '__main__':
    # Test cases
    assert to_python_list(without(2, Node.from_list([1, 2, 3, 2, 4]))) == [1, 3, 4]
    assert to_python_list(without(5, Node.from_list([1, 2, 3]))) == [1, 2, 3]
    assert to_python_list(without(1, EMPTY_LIST)) == []
    assert to_python_list(without(1, Node.from_list([1, 1, 1]))) == []

    print("All tests passed!")
