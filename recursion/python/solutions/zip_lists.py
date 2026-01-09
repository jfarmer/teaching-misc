"""Solution for zip_lists."""

from linked_list import EMPTY_LIST, Node, is_empty, prepend, unprepend, to_python_list


def zip_lists(lst1, lst2):
    """
    Combine two lists into list of tuples, stopping at shorter list.

    zip_lists(1 -> 2 -> 3, a -> b) => (1,a) -> (2,b)
    zip_lists((), 1 -> 2) => ()
    """
    if is_empty(lst1) or is_empty(lst2):
        return EMPTY_LIST

    first1, rest1 = unprepend(lst1)
    first2, rest2 = unprepend(lst2)

    return prepend((first1, first2), zip_lists(rest1, rest2))


if __name__ == '__main__':
    # Test cases
    assert to_python_list(zip_lists(Node.from_list([1, 2, 3]), Node.from_list(['a', 'b']))) == [(1, 'a'), (2, 'b')]
    assert to_python_list(zip_lists(EMPTY_LIST, Node.from_list([1, 2]))) == []
    assert to_python_list(zip_lists(Node.from_list([1, 2]), EMPTY_LIST)) == []
    assert to_python_list(zip_lists(Node.from_list([1, 2]), Node.from_list([3, 4]))) == [(1, 3), (2, 4)]

    print("All tests passed!")
