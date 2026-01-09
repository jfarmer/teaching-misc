"""Solution for replace."""

from linked_list import EMPTY_LIST, Node, is_empty, prepend, unprepend, to_python_list


def replace(old, new, lst):
    """
    Replace all occurrences of old with new.

    replace(2, 99, 1 -> 2 -> 3 -> 2) => 1 -> 99 -> 3 -> 99
    replace(5, 99, 1 -> 2 -> 3) => 1 -> 2 -> 3
    """
    if is_empty(lst):
        return EMPTY_LIST

    first, rest = unprepend(lst)

    if first == old:
        return prepend(new, replace(old, new, rest))
    else:
        return prepend(first, replace(old, new, rest))


if __name__ == '__main__':
    # Test cases
    assert to_python_list(replace(2, 99, Node.from_list([1, 2, 3, 2]))) == [1, 99, 3, 99]
    assert to_python_list(replace(5, 99, Node.from_list([1, 2, 3]))) == [1, 2, 3]
    assert to_python_list(replace(1, 0, EMPTY_LIST)) == []
    assert to_python_list(replace(1, 0, Node.from_list([1, 1, 1]))) == [0, 0, 0]

    print("All tests passed!")
