"""Solution for merge."""

from linked_list import EMPTY_LIST, Node, is_empty, prepend, unprepend, to_python_list


def merge(lst1, lst2):
    """
    Merge two SORTED lists into one sorted list.

    merge(1 -> 3 -> 5, 2 -> 4 -> 6) => 1 -> 2 -> 3 -> 4 -> 5 -> 6
    merge(1 -> 2, ()) => 1 -> 2
    """
    if is_empty(lst1):
        return lst2

    if is_empty(lst2):
        return lst1

    first1, rest1 = unprepend(lst1)
    first2, rest2 = unprepend(lst2)

    if first1 <= first2:
        return prepend(first1, merge(rest1, lst2))
    else:
        return prepend(first2, merge(lst1, rest2))


if __name__ == '__main__':
    # Test cases
    assert to_python_list(merge(Node.from_list([1, 3, 5]), Node.from_list([2, 4, 6]))) == [1, 2, 3, 4, 5, 6]
    assert to_python_list(merge(Node.from_list([1, 2]), EMPTY_LIST)) == [1, 2]
    assert to_python_list(merge(EMPTY_LIST, Node.from_list([1, 2]))) == [1, 2]
    assert to_python_list(merge(Node.from_list([1, 2, 3]), Node.from_list([1, 2, 3]))) == [1, 1, 2, 2, 3, 3]

    print("All tests passed!")
