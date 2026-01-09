"""Solution for append."""

from linked_list import EMPTY_LIST, Node, is_empty, prepend, unprepend, to_python_list


def append(val, lst):
    """
    Return new list with val added at the END.

    append(99, 1 -> 2 -> 3) => 1 -> 2 -> 3 -> 99
    append(99, ()) => 99
    """
    if is_empty(lst):
        return prepend(val, EMPTY_LIST)

    first, rest = unprepend(lst)

    return prepend(first, append(val, rest))


if __name__ == '__main__':
    # Test cases
    assert to_python_list(append(99, Node.from_list([1, 2, 3]))) == [1, 2, 3, 99]
    assert to_python_list(append(99, EMPTY_LIST)) == [99]
    assert to_python_list(append('d', Node.from_list(['a', 'b', 'c']))) == ['a', 'b', 'c', 'd']

    print("All tests passed!")
