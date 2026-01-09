"""Solution for foldr."""

from linked_list import EMPTY_LIST, Node, is_empty, prepend, unprepend, to_python_list


def foldr(fn, base, lst):
    """
    Right fold: the pattern behind all these functions!

    foldr(fn, base, a -> b -> c) = fn(a, fn(b, fn(c, base)))

    Examples:
      foldr(add, 0, 1 -> 2 -> 3) = 1 + (2 + (3 + 0)) = 6  (sum)
      foldr(mul, 1, 1 -> 2 -> 3) = 1 * (2 * (3 * 1)) = 6  (product)
      foldr(prepend, (), 1 -> 2 -> 3) = 1 -> 2 -> 3       (copy)

    Once you implement this, you can define:
      sum = foldr(add, 0, lst)
      product = foldr(multiply, 1, lst)
      length = foldr(lambda x, acc: 1 + acc, 0, lst)
      map(f) = foldr(lambda x, acc: prepend(f(x), acc), (), lst)
    """
    if is_empty(lst):
        return base

    first, rest = unprepend(lst)

    return fn(first, foldr(fn, base, rest))


def add(a, b):
    return a + b


def multiply(a, b):
    return a * b


if __name__ == '__main__':
    # Test cases
    assert foldr(add, 0, Node.from_list([1, 2, 3])) == 6
    assert foldr(multiply, 1, Node.from_list([1, 2, 3])) == 6
    assert foldr(add, 0, EMPTY_LIST) == 0
    assert foldr(multiply, 1, EMPTY_LIST) == 1

    # Copy list
    assert to_python_list(foldr(prepend, EMPTY_LIST, Node.from_list([1, 2, 3]))) == [1, 2, 3]

    # Length via fold
    assert foldr(lambda x, acc: 1 + acc, 0, Node.from_list([1, 2, 3, 4])) == 4

    # Map via fold
    double = lambda x, acc: prepend(x * 2, acc)
    assert to_python_list(foldr(double, EMPTY_LIST, Node.from_list([1, 2, 3]))) == [2, 4, 6]

    print("All tests passed!")
