"""Solution for insertion_sort."""

from linked_list import EMPTY_LIST, Node, is_empty, prepend, unprepend, to_python_list
from insert_sorted import insert_sorted


def insertion_sort(lst):
    """
    Sort list using insertion sort.

    insertion_sort(3 -> 1 -> 4 -> 1 -> 5) => 1 -> 1 -> 3 -> 4 -> 5
    """
    if is_empty(lst):
        return EMPTY_LIST

    first, rest = unprepend(lst)

    return insert_sorted(first, insertion_sort(rest))


if __name__ == '__main__':
    # Test cases
    assert to_python_list(insertion_sort(Node.from_list([3, 1, 4, 1, 5]))) == [1, 1, 3, 4, 5]
    assert to_python_list(insertion_sort(EMPTY_LIST)) == []
    assert to_python_list(insertion_sort(Node.from_list([5, 4, 3, 2, 1]))) == [1, 2, 3, 4, 5]
    assert to_python_list(insertion_sort(Node.from_list([1, 2, 3]))) == [1, 2, 3]
    assert to_python_list(insertion_sort(Node.from_list([42]))) == [42]

    print("All tests passed!")
