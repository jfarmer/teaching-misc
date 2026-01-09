"""Solution for interleave."""

from linked_list import EMPTY_LIST, Node, is_empty, prepend, unprepend, to_python_list


def interleave(lst1, lst2):
    """
    Alternate elements from two lists.

    interleave(1 -> 2 -> 3, a -> b -> c) => 1 -> a -> 2 -> b -> 3 -> c
    interleave(1 -> 2, a) => 1 -> a -> 2
    interleave((), a -> b) => a -> b
    """
    if is_empty(lst1):
        return lst2

    first, rest = unprepend(lst1)

    return prepend(first, interleave(lst2, rest))


if __name__ == '__main__':
    # Test cases
    assert to_python_list(interleave(Node.from_list([1, 2, 3]), Node.from_list(['a', 'b', 'c']))) == [1, 'a', 2, 'b', 3, 'c']
    assert to_python_list(interleave(Node.from_list([1, 2]), Node.from_list(['a']))) == [1, 'a', 2]
    assert to_python_list(interleave(EMPTY_LIST, Node.from_list(['a', 'b']))) == ['a', 'b']
    assert to_python_list(interleave(Node.from_list([1]), Node.from_list(['a', 'b']))) == [1, 'a', 'b']

    print("All tests passed!")
