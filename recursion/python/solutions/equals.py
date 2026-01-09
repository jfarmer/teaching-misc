"""Solution for equals."""

from linked_list import EMPTY_LIST, Node, is_empty, prepend, unprepend, to_python_list


def equals(lst1, lst2):
    """
    Return True if two lists have the same elements in the same order.

    equals(1 -> 2 -> 3, 1 -> 2 -> 3) => True
    equals(1 -> 2, 1 -> 2 -> 3) => False
    equals((), ()) => True
    """
    if is_empty(lst1) and is_empty(lst2):
        return True

    if is_empty(lst1) or is_empty(lst2):
        return False

    first1, rest1 = unprepend(lst1)
    first2, rest2 = unprepend(lst2)

    return first1 == first2 and equals(rest1, rest2)


if __name__ == '__main__':
    # Test cases
    assert equals(Node.from_list([1, 2, 3]), Node.from_list([1, 2, 3])) == True
    assert equals(Node.from_list([1, 2]), Node.from_list([1, 2, 3])) == False
    assert equals(EMPTY_LIST, EMPTY_LIST) == True
    assert equals(Node.from_list([1]), EMPTY_LIST) == False
    assert equals(EMPTY_LIST, Node.from_list([1])) == False
    assert equals(Node.from_list([1, 2, 3]), Node.from_list([1, 2, 4])) == False

    print("All tests passed!")
