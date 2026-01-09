"""Solution for zip_with."""

from linked_list import EMPTY_LIST, Node, is_empty, prepend, unprepend, to_python_list


def zip_with(fn, lst1, lst2):
    """
    Combine two lists using fn, stopping at shorter list.

    zip_with(add, 1 -> 2 -> 3, 10 -> 20) => 11 -> 22
    """
    if is_empty(lst1) or is_empty(lst2):
        return EMPTY_LIST

    first1, rest1 = unprepend(lst1)
    first2, rest2 = unprepend(lst2)

    return prepend(fn(first1, first2), zip_with(fn, rest1, rest2))


def add(a, b):
    return a + b


def multiply(a, b):
    return a * b


if __name__ == '__main__':
    # Test cases
    assert to_python_list(zip_with(add, Node.from_list([1, 2, 3]), Node.from_list([10, 20]))) == [11, 22]
    assert to_python_list(zip_with(add, EMPTY_LIST, Node.from_list([1, 2]))) == []
    assert to_python_list(zip_with(multiply, Node.from_list([1, 2, 3]), Node.from_list([2, 3, 4]))) == [2, 6, 12]

    print("All tests passed!")
