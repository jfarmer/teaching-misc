"""Solution for init."""

from linked_list import EMPTY_LIST, Node, is_empty, prepend, unprepend, to_python_list


def init(lst):
    """
    Return all elements except the last one.

    init(1 -> 2 -> 3) => 1 -> 2
    init(42) => ()
    """
    if is_empty(lst.next):
        return EMPTY_LIST

    first, rest = unprepend(lst)

    return prepend(first, init(rest))


if __name__ == '__main__':
    # Test cases
    assert to_python_list(init(Node.from_list([1, 2, 3]))) == [1, 2]
    assert to_python_list(init(Node.from_list([42]))) == []
    assert to_python_list(init(Node.from_list([1, 2, 3, 4, 5]))) == [1, 2, 3, 4]
    assert to_python_list(init(Node.from_list(['a', 'b']))) == ['a']

    print("All tests passed!")
