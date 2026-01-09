"""Solution for indexed."""

from linked_list import EMPTY_LIST, Node, is_empty, prepend, unprepend, to_python_list


def indexed(lst):
    """
    Pair each element with its index.

    indexed(a -> b -> c) => (0,a) -> (1,b) -> (2,c)
    indexed(()) => ()
    """
    def helper(lst, idx):
        if is_empty(lst):
            return EMPTY_LIST

        first, rest = unprepend(lst)

        return prepend((idx, first), helper(rest, idx + 1))

    return helper(lst, 0)


if __name__ == '__main__':
    # Test cases
    assert to_python_list(indexed(Node.from_list(['a', 'b', 'c']))) == [(0, 'a'), (1, 'b'), (2, 'c')]
    assert to_python_list(indexed(EMPTY_LIST)) == []
    assert to_python_list(indexed(Node.from_list([10, 20, 30]))) == [(0, 10), (1, 20), (2, 30)]

    print("All tests passed!")
