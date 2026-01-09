"""Solution for tails."""

from linked_list import EMPTY_LIST, Node, is_empty, prepend, unprepend, to_python_list


def tails(lst):
    """
    Return list of all suffixes (tails).

    tails(1 -> 2 -> 3) => (1 -> 2 -> 3) -> (2 -> 3) -> (3) -> ()
    tails(()) => ()
    """
    if is_empty(lst):
        return prepend(EMPTY_LIST, EMPTY_LIST)

    first, rest = unprepend(lst)

    return prepend(lst, tails(rest))


if __name__ == '__main__':
    # Test cases
    result = tails(Node.from_list([1, 2, 3]))
    result_list = to_python_list(result)
    assert to_python_list(result_list[0]) == [1, 2, 3]
    assert to_python_list(result_list[1]) == [2, 3]
    assert to_python_list(result_list[2]) == [3]
    assert to_python_list(result_list[3]) == []

    result = tails(EMPTY_LIST)
    result_list = to_python_list(result)
    assert len(result_list) == 1
    assert to_python_list(result_list[0]) == []

    print("All tests passed!")
