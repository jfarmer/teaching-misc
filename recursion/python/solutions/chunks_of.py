"""Solution for chunks_of."""

from linked_list import EMPTY_LIST, Node, is_empty, prepend, unprepend, to_python_list
from take import take
from drop import drop


def chunks_of(n, lst):
    """
    Group elements into sublists of size n.

    chunks_of(2, 1 -> 2 -> 3 -> 4 -> 5) => (1 -> 2) -> (3 -> 4) -> (5)
    chunks_of(3, 1 -> 2) => (1 -> 2)
    """
    if is_empty(lst):
        return EMPTY_LIST

    chunk = take(n, lst)
    remaining = drop(n, lst)

    return prepend(chunk, chunks_of(n, remaining))


if __name__ == '__main__':
    # Test cases
    result = chunks_of(2, Node.from_list([1, 2, 3, 4, 5]))
    chunks = to_python_list(result)
    assert to_python_list(chunks[0]) == [1, 2]
    assert to_python_list(chunks[1]) == [3, 4]
    assert to_python_list(chunks[2]) == [5]

    result = chunks_of(3, Node.from_list([1, 2]))
    chunks = to_python_list(result)
    assert to_python_list(chunks[0]) == [1, 2]

    assert to_python_list(chunks_of(2, EMPTY_LIST)) == []

    print("All tests passed!")
