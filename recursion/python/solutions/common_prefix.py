"""Solution for common_prefix."""

from linked_list import EMPTY_LIST, Node, is_empty, prepend, unprepend, to_python_list


def common_prefix(lst1, lst2):
    """
    Return the longest common prefix of two lists.

    common_prefix(1 -> 2 -> 3, 1 -> 2 -> 5 -> 6) => 1 -> 2
    common_prefix(1 -> 2, 3 -> 4) => ()
    """
    if is_empty(lst1) or is_empty(lst2):
        return EMPTY_LIST

    first1, rest1 = unprepend(lst1)
    first2, rest2 = unprepend(lst2)

    if first1 == first2:
        return prepend(first1, common_prefix(rest1, rest2))
    else:
        return EMPTY_LIST


if __name__ == '__main__':
    # Test cases
    assert to_python_list(common_prefix(Node.from_list([1, 2, 3]), Node.from_list([1, 2, 5, 6]))) == [1, 2]
    assert to_python_list(common_prefix(Node.from_list([1, 2]), Node.from_list([3, 4]))) == []
    assert to_python_list(common_prefix(EMPTY_LIST, Node.from_list([1, 2]))) == []
    assert to_python_list(common_prefix(Node.from_list([1, 2, 3]), Node.from_list([1, 2, 3]))) == [1, 2, 3]

    print("All tests passed!")
