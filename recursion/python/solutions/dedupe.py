"""Solution for dedupe."""

from linked_list import EMPTY_LIST, Node, is_empty, prepend, unprepend, to_python_list


def dedupe(lst):
    """
    Remove CONSECUTIVE duplicates.

    dedupe(1 -> 1 -> 2 -> 2 -> 1) => 1 -> 2 -> 1
    dedupe(1 -> 2 -> 3) => 1 -> 2 -> 3
    dedupe(()) => ()
    """
    if is_empty(lst):
        return EMPTY_LIST

    if is_empty(lst.next):
        return lst

    first, rest = unprepend(lst)
    second = rest.value

    if first == second:
        return dedupe(rest)
    else:
        return prepend(first, dedupe(rest))


if __name__ == '__main__':
    # Test cases
    assert to_python_list(dedupe(Node.from_list([1, 1, 2, 2, 1]))) == [1, 2, 1]
    assert to_python_list(dedupe(Node.from_list([1, 2, 3]))) == [1, 2, 3]
    assert to_python_list(dedupe(EMPTY_LIST)) == []
    assert to_python_list(dedupe(Node.from_list([1, 1, 1, 1]))) == [1]
    assert to_python_list(dedupe(Node.from_list([1]))) == [1]

    print("All tests passed!")
