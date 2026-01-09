"""Solution for find_index."""

from linked_list import EMPTY_LIST, Node, is_empty, prepend, unprepend


def find_index(pred, lst):
    """
    Return index of first element where pred(x) is True, or -1 if not found.

    find_index(is_even, 1 -> 3 -> 4 -> 6) => 2
    find_index(is_even, 1 -> 3 -> 5) => -1
    """
    def helper(lst, idx):
        if is_empty(lst):
            return -1

        first, rest = unprepend(lst)

        return idx if pred(first) else helper(rest, idx + 1)

    return helper(lst, 0)


def is_even(n):
    return n % 2 == 0


def is_negative(n):
    return n < 0


if __name__ == '__main__':
    # Test cases
    assert find_index(is_even, Node.from_list([1, 3, 4, 6])) == 2
    assert find_index(is_even, Node.from_list([1, 3, 5])) == -1
    assert find_index(is_even, EMPTY_LIST) == -1
    assert find_index(is_even, Node.from_list([2, 4, 6])) == 0
    assert find_index(is_negative, Node.from_list([1, 2, -3, 4])) == 2

    print("All tests passed!")
