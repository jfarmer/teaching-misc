"""Solution for insert_sorted."""

from linked_list import EMPTY_LIST, Node, is_empty, prepend, unprepend, to_python_list


def insert_sorted(val, lst):
    """
    Insert val into an already-sorted list, maintaining sort order.

    insert_sorted(3, 1 -> 2 -> 4 -> 5) => 1 -> 2 -> 3 -> 4 -> 5
    insert_sorted(0, 1 -> 2 -> 3) => 0 -> 1 -> 2 -> 3
    insert_sorted(9, 1 -> 2 -> 3) => 1 -> 2 -> 3 -> 9
    """
    if is_empty(lst):
        return prepend(val, EMPTY_LIST)

    first, rest = unprepend(lst)

    if val <= first:
        return prepend(val, lst)
    else:
        return prepend(first, insert_sorted(val, rest))


if __name__ == '__main__':
    # Test cases
    assert to_python_list(insert_sorted(3, Node.from_list([1, 2, 4, 5]))) == [1, 2, 3, 4, 5]
    assert to_python_list(insert_sorted(0, Node.from_list([1, 2, 3]))) == [0, 1, 2, 3]
    assert to_python_list(insert_sorted(9, Node.from_list([1, 2, 3]))) == [1, 2, 3, 9]
    assert to_python_list(insert_sorted(1, EMPTY_LIST)) == [1]
    assert to_python_list(insert_sorted(2, Node.from_list([1, 2, 3]))) == [1, 2, 2, 3]

    print("All tests passed!")
