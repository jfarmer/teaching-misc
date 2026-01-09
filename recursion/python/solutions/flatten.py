"""Solution for flatten."""

from linked_list import EMPTY_LIST, Node, is_empty, prepend, unprepend, to_python_list
from concat import concat


def flatten(lst):
    """
    Flatten one level of nesting (list of lists -> list).

    flatten((1 -> 2) -> (3) -> (4 -> 5)) => 1 -> 2 -> 3 -> 4 -> 5
    flatten(() -> (1 -> 2) -> ()) => 1 -> 2
    flatten(()) => ()
    """
    if is_empty(lst):
        return EMPTY_LIST

    first, rest = unprepend(lst)

    return concat(first, flatten(rest))


if __name__ == '__main__':
    # Test cases
    # (1 -> 2) -> (3) -> (4 -> 5)
    nested = Node.from_list([
        Node.from_list([1, 2]),
        Node.from_list([3]),
        Node.from_list([4, 5])
    ])
    assert to_python_list(flatten(nested)) == [1, 2, 3, 4, 5]

    # () -> (1 -> 2) -> ()
    nested2 = Node.from_list([
        EMPTY_LIST,
        Node.from_list([1, 2]),
        EMPTY_LIST
    ])
    assert to_python_list(flatten(nested2)) == [1, 2]

    assert to_python_list(flatten(EMPTY_LIST)) == []

    print("All tests passed!")
