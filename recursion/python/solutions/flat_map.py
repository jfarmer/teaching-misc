"""Solution for flat_map."""

from linked_list import EMPTY_LIST, Node, is_empty, prepend, unprepend, to_python_list
from concat import concat


def flat_map(fn, lst):
    """
    Map fn over lst, then flatten the result.

    If fn returns a list for each element, flat_map concatenates them.

    flat_map(lambda x: Node.from_list([x, x]), 1 -> 2) => 1 -> 1 -> 2 -> 2
    """
    if is_empty(lst):
        return EMPTY_LIST

    first, rest = unprepend(lst)

    return concat(fn(first), flat_map(fn, rest))


if __name__ == '__main__':
    # Test cases
    duplicate = lambda x: Node.from_list([x, x])
    assert to_python_list(flat_map(duplicate, Node.from_list([1, 2]))) == [1, 1, 2, 2]
    assert to_python_list(flat_map(duplicate, EMPTY_LIST)) == []

    triple = lambda x: Node.from_list([x, x, x])
    assert to_python_list(flat_map(triple, Node.from_list([1, 2]))) == [1, 1, 1, 2, 2, 2]

    # Function that returns empty for some elements
    maybe = lambda x: Node.from_list([x]) if x > 0 else EMPTY_LIST
    assert to_python_list(flat_map(maybe, Node.from_list([-1, 2, -3, 4]))) == [2, 4]

    print("All tests passed!")
