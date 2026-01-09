"""Solution for nth."""

from linked_list import EMPTY_LIST, Node, is_empty, prepend, unprepend


def nth(n, lst):
    """
    Return the element at index n (0-indexed).

    nth(0, a -> b -> c) => a
    nth(2, a -> b -> c) => c
    """
    if n == 0:
        return lst.value

    first, rest = unprepend(lst)

    return nth(n - 1, rest)


if __name__ == '__main__':
    # Test cases
    assert nth(0, Node.from_list(['a', 'b', 'c'])) == 'a'
    assert nth(2, Node.from_list(['a', 'b', 'c'])) == 'c'
    assert nth(1, Node.from_list([1, 2, 3, 4])) == 2
    assert nth(0, Node.from_list([42])) == 42

    print("All tests passed!")
