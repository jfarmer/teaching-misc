"""Solution for inits."""

from linked_list import EMPTY_LIST, Node, is_empty, prepend, unprepend, to_python_list
from map_list import map_list


def inits(lst):
    """
    Return list of all prefixes (inits).

    inits(1 -> 2 -> 3) => () -> (1) -> (1 -> 2) -> (1 -> 2 -> 3)
    inits(()) => ()
    """
    if is_empty(lst):
        return prepend(EMPTY_LIST, EMPTY_LIST)

    first, rest = unprepend(lst)

    return prepend(EMPTY_LIST, map_list(lambda tail: prepend(first, tail), inits(rest)))


if __name__ == '__main__':
    # Test cases
    result = inits(Node.from_list([1, 2, 3]))
    result_list = to_python_list(result)
    assert to_python_list(result_list[0]) == []
    assert to_python_list(result_list[1]) == [1]
    assert to_python_list(result_list[2]) == [1, 2]
    assert to_python_list(result_list[3]) == [1, 2, 3]

    result = inits(EMPTY_LIST)
    result_list = to_python_list(result)
    assert len(result_list) == 1
    assert to_python_list(result_list[0]) == []

    print("All tests passed!")
