"""Solution for product."""

from linked_list import EMPTY_LIST, Node, is_empty, prepend, unprepend


def product(lst):
    """
    Given a list of numbers, return their product.

    product(2 -> 3 -> 4) => 24
    product(()) => 1
    """
    if is_empty(lst):
        return 1

    first, rest = unprepend(lst)

    return first * product(rest)


if __name__ == '__main__':
    # Test cases
    assert product(Node.from_list([2, 3, 4])) == 24
    assert product(Node.from_list([1, 2, 3, 4, 5])) == 120
    assert product(Node.from_list([5])) == 5
    assert product(EMPTY_LIST) == 1
    assert product(Node.from_list([0, 1, 2])) == 0
    assert product(Node.from_list([-1, 2, -3])) == 6

    print("All tests passed!")
