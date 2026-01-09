"""Solution for is_prefix_of."""

from linked_list import EMPTY_LIST, Node, is_empty, prepend, unprepend, to_python_list


def is_prefix_of(prefix, lst):
    """
    Return True if prefix is a prefix of lst.

    is_prefix_of(1 -> 2, 1 -> 2 -> 3) => True
    is_prefix_of(1 -> 3, 1 -> 2 -> 3) => False
    is_prefix_of((), anything) => True
    """
    if is_empty(prefix):
        return True

    if is_empty(lst):
        return False

    first_p, rest_p = unprepend(prefix)
    first_l, rest_l = unprepend(lst)

    return first_p == first_l and is_prefix_of(rest_p, rest_l)


if __name__ == '__main__':
    # Test cases
    assert is_prefix_of(Node.from_list([1, 2]), Node.from_list([1, 2, 3])) == True
    assert is_prefix_of(Node.from_list([1, 3]), Node.from_list([1, 2, 3])) == False
    assert is_prefix_of(EMPTY_LIST, Node.from_list([1, 2, 3])) == True
    assert is_prefix_of(EMPTY_LIST, EMPTY_LIST) == True
    assert is_prefix_of(Node.from_list([1, 2, 3]), Node.from_list([1, 2])) == False
    assert is_prefix_of(Node.from_list([1, 2, 3]), Node.from_list([1, 2, 3])) == True

    print("All tests passed!")
