"""Solution for smallest."""

from linked_list import EMPTY_LIST, Node, is_empty, prepend, unprepend


def smallest(lst):
    """
    Given a non-empty list of numbers, return the smallest.

    smallest(3 -> 7 -> 2) => 2
    """
    if is_empty(lst.next):
        return lst.value

    first, rest = unprepend(lst)

    return min(first, smallest(rest))


if __name__ == '__main__':
    # Test cases
    assert smallest(Node.from_list([3, 7, 2])) == 2
    assert smallest(Node.from_list([1, 2, 3, 4, 5])) == 1
    assert smallest(Node.from_list([5, 4, 3, 2, 1])) == 1
    assert smallest(Node.from_list([42])) == 42
    assert smallest(Node.from_list([-1, -5, -2])) == -5
    assert smallest(Node.from_list([0, 0, 0])) == 0

    print("All tests passed!")
