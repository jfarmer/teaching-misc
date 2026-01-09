"""Solution for foldl."""

from linked_list import EMPTY_LIST, Node, is_empty, prepend, unprepend, to_python_list


def foldl(fn, acc, lst):
    """
    Left fold: iterative-style accumulator.

    foldl(fn, acc, a -> b -> c) = fn(fn(fn(acc, a), b), c)

    This is "iterative" in flavor - acc is updated as we go.
    Compare to foldr which is "recursive" in flavor.

    foldl(add, 0, 1 -> 2 -> 3) = ((0 + 1) + 2) + 3 = 6
    foldl(subtract, 0, 1 -> 2 -> 3) = ((0 - 1) - 2) - 3 = -6
    """
    if is_empty(lst):
        return acc

    first, rest = unprepend(lst)

    return foldl(fn, fn(acc, first), rest)


def add(a, b):
    return a + b


def subtract(a, b):
    return a - b


if __name__ == '__main__':
    # Test cases
    assert foldl(add, 0, Node.from_list([1, 2, 3])) == 6
    assert foldl(subtract, 0, Node.from_list([1, 2, 3])) == -6
    assert foldl(add, 0, EMPTY_LIST) == 0

    # Reverse via foldl
    assert to_python_list(foldl(lambda acc, x: prepend(x, acc), EMPTY_LIST, Node.from_list([1, 2, 3]))) == [3, 2, 1]

    # Sum with initial value
    assert foldl(add, 10, Node.from_list([1, 2, 3])) == 16

    print("All tests passed!")
