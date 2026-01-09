"""Solution for count_occurrences."""

from linked_list import EMPTY_LIST, Node, is_empty, prepend, unprepend


def count_occurrences(val, lst):
    """
    Count how many times val appears in lst.

    count_occurrences(2, 1 -> 2 -> 2 -> 3) => 2
    count_occurrences(5, 1 -> 2 -> 3) => 0
    """
    if is_empty(lst):
        return 0

    first, rest = unprepend(lst)

    return (1 if first == val else 0) + count_occurrences(val, rest)


if __name__ == '__main__':
    # Test cases
    assert count_occurrences(2, Node.from_list([1, 2, 2, 3])) == 2
    assert count_occurrences(5, Node.from_list([1, 2, 3])) == 0
    assert count_occurrences(1, Node.from_list([1, 1, 1, 1])) == 4
    assert count_occurrences(1, EMPTY_LIST) == 0
    assert count_occurrences('a', Node.from_list(['a', 'b', 'a'])) == 2

    print("All tests passed!")
