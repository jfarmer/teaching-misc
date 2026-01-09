"""Solution for all_equal."""

from linked_list import EMPTY_LIST, Node, is_empty, prepend, unprepend


def all_equal(lst):
    """
    Return True if all elements in lst are equal to each other.

    all_equal(5 -> 5 -> 5) => True
    all_equal(5 -> 5 -> 3) => False
    all_equal(()) => True
    all_equal(42) => True (single element)
    """
    if is_empty(lst):
        return True

    if is_empty(lst.next):
        return True

    first, rest = unprepend(lst)
    second = rest.value

    return first == second and all_equal(rest)


if __name__ == '__main__':
    # Test cases
    assert all_equal(Node.from_list([5, 5, 5])) == True
    assert all_equal(Node.from_list([5, 5, 3])) == False
    assert all_equal(EMPTY_LIST) == True
    assert all_equal(Node.from_list([42])) == True
    assert all_equal(Node.from_list([1, 2, 3])) == False
    assert all_equal(Node.from_list(['a', 'a', 'a'])) == True

    print("All tests passed!")
