"""Solution for index_of."""

from linked_list import EMPTY_LIST, Node, is_empty, prepend, unprepend


def index_of(val, lst):
    """
    Return index of first occurrence of val, or -1 if not found.

    index_of(3, 1 -> 2 -> 3 -> 4) => 2
    index_of(5, 1 -> 2 -> 3) => -1
    """
    def helper(lst, idx):
        if is_empty(lst):
            return -1

        first, rest = unprepend(lst)

        return idx if first == val else helper(rest, idx + 1)

    return helper(lst, 0)


if __name__ == '__main__':
    # Test cases
    assert index_of(3, Node.from_list([1, 2, 3, 4])) == 2
    assert index_of(5, Node.from_list([1, 2, 3])) == -1
    assert index_of(1, Node.from_list([1, 2, 3])) == 0
    assert index_of(3, Node.from_list([1, 2, 3])) == 2
    assert index_of(1, EMPTY_LIST) == -1
    assert index_of(2, Node.from_list([2, 2, 2])) == 0

    print("All tests passed!")
