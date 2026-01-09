"""Solution for compact."""

from linked_list import EMPTY_LIST, Node, is_empty, prepend, unprepend, to_python_list


def compact(lst):
    """
    Remove all None values.

    compact(1 -> None -> 2 -> None -> 3) => 1 -> 2 -> 3
    compact(()) => ()
    """
    if is_empty(lst):
        return EMPTY_LIST

    first, rest = unprepend(lst)

    if first is None:
        return compact(rest)
    else:
        return prepend(first, compact(rest))


if __name__ == '__main__':
    # Test cases
    assert to_python_list(compact(Node.from_list([1, None, 2, None, 3]))) == [1, 2, 3]
    assert to_python_list(compact(EMPTY_LIST)) == []
    assert to_python_list(compact(Node.from_list([None, None, None]))) == []
    assert to_python_list(compact(Node.from_list([1, 2, 3]))) == [1, 2, 3]

    print("All tests passed!")
