"""Solution for largest."""

from linked_list import EMPTY_LIST, Node, is_empty, prepend, unprepend


def largest(lst):
    """
    Given a non-empty list of numbers, return the largest.

    largest(3 -> 7 -> 2) => 7

    Note: You can assume the list is non-empty.
    """
    # Base case: single element list
    if is_empty(lst.next):
        return lst.value

    first, rest = unprepend(lst)

    return max(first, largest(rest))


if __name__ == '__main__':
    # Test cases
    assert largest(Node.from_list([3, 7, 2])) == 7
    assert largest(Node.from_list([1, 2, 3, 4, 5])) == 5
    assert largest(Node.from_list([5, 4, 3, 2, 1])) == 5
    assert largest(Node.from_list([42])) == 42
    assert largest(Node.from_list([-1, -5, -2])) == -1
    assert largest(Node.from_list([0, 0, 0])) == 0

    print("All tests passed!")
