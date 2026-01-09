"""Solution for split_at."""

from linked_list import EMPTY_LIST, Node, is_empty, prepend, unprepend, to_python_list


def split_at(n, lst):
    """
    Split list at index n into (first n elements, rest).

    split_at(2, 1 -> 2 -> 3 -> 4) => (1 -> 2, 3 -> 4)
    split_at(0, 1 -> 2 -> 3) => ((), 1 -> 2 -> 3)
    """
    if n == 0 or is_empty(lst):
        return (EMPTY_LIST, lst)

    first, rest = unprepend(lst)
    left, right = split_at(n - 1, rest)

    return (prepend(first, left), right)


if __name__ == '__main__':
    # Test cases
    left, right = split_at(2, Node.from_list([1, 2, 3, 4]))
    assert to_python_list(left) == [1, 2]
    assert to_python_list(right) == [3, 4]

    left, right = split_at(0, Node.from_list([1, 2, 3]))
    assert to_python_list(left) == []
    assert to_python_list(right) == [1, 2, 3]

    left, right = split_at(5, Node.from_list([1, 2]))
    assert to_python_list(left) == [1, 2]
    assert to_python_list(right) == []

    print("All tests passed!")
