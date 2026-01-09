"""Solution for intersperse."""

from linked_list import EMPTY_LIST, Node, is_empty, prepend, unprepend, to_python_list


def intersperse(sep, lst):
    """
    Put sep between each element.

    intersperse(0, 1 -> 2 -> 3) => 1 -> 0 -> 2 -> 0 -> 3
    intersperse(0, 1) => 1
    intersperse(0, ()) => ()
    """
    if is_empty(lst):
        return EMPTY_LIST

    if is_empty(lst.next):
        return lst

    first, rest = unprepend(lst)

    return prepend(first, prepend(sep, intersperse(sep, rest)))


if __name__ == '__main__':
    # Test cases
    assert to_python_list(intersperse(0, Node.from_list([1, 2, 3]))) == [1, 0, 2, 0, 3]
    assert to_python_list(intersperse(0, Node.from_list([1]))) == [1]
    assert to_python_list(intersperse(0, EMPTY_LIST)) == []
    assert to_python_list(intersperse('-', Node.from_list(['a', 'b', 'c']))) == ['a', '-', 'b', '-', 'c']

    print("All tests passed!")
