"""
Tests for show_as_fold decorator.

Verifies that:
1. Decorated functions still work correctly
2. The printed fold representation is correct
"""

import io
import sys

from show_as_fold import show_as_fold

# =============================================================================
# Linked list infrastructure
# =============================================================================

EMPTY_LIST = None


class Node:
    def __init__(self, value, next=None):
        self.value = value
        self.next = next

    @staticmethod
    def from_list(lst):
        if not lst:
            return EMPTY_LIST
        return Node(lst[0], Node.from_list(lst[1:]))

    def __str__(self):
        if self.next is None:
            return f"{self.value} -> ()"
        return f"{self.value} -> {self.next}"

    def __eq__(self, other):
        if is_empty(self) and is_empty(other):
            return True
        if is_empty(self) or is_empty(other):
            return False
        return self.value == other.value and self.next == other.next


def is_empty(lst):
    return lst is EMPTY_LIST


def unprepend(lst):
    return lst.value, lst.next


def prepend(val, lst):
    return Node(val, lst)


def append(val, lst):
    if is_empty(lst):
        return prepend(val, EMPTY_LIST)
    first, rest = unprepend(lst)
    return prepend(first, append(val, rest))


def to_python_list(lst):
    """Convert linked list to Python list for easy comparison."""
    result = []
    while not is_empty(lst):
        first, lst = unprepend(lst)
        result.append(first)
    return result


# =============================================================================
# Capture decorator output
# =============================================================================

def capture_fold_output(fn_def):
    """Execute a function definition and capture the printed fold string."""
    old_stdout = sys.stdout
    sys.stdout = io.StringIO()
    try:
        exec(fn_def, globals())
        output = sys.stdout.getvalue().strip()
    finally:
        sys.stdout = old_stdout
    return output


# =============================================================================
# Tests
# =============================================================================

def test_sum_list():
    @show_as_fold
    def sum_list(lst):
        if is_empty(lst):
            return 0
        first, rest = unprepend(lst)
        return first + sum_list(rest)

    assert sum_list(Node.from_list([1, 2, 3, 4, 5])) == 15
    assert sum_list(Node.from_list([])) == 0
    assert sum_list(Node.from_list([42])) == 42
    assert sum_list(Node.from_list([-1, 1])) == 0
    print("  sum_list: OK")


def test_product():
    @show_as_fold
    def product(lst):
        if is_empty(lst):
            return 1
        first, rest = unprepend(lst)
        return first * product(rest)

    assert product(Node.from_list([1, 2, 3, 4])) == 24
    assert product(Node.from_list([])) == 1
    assert product(Node.from_list([5])) == 5
    assert product(Node.from_list([2, 3, 0, 5])) == 0
    print("  product: OK")


def test_length():
    @show_as_fold
    def length(lst):
        if is_empty(lst):
            return 0
        first, rest = unprepend(lst)
        return 1 + length(rest)

    assert length(Node.from_list([1, 2, 3])) == 3
    assert length(Node.from_list([])) == 0
    assert length(Node.from_list(['a', 'b', 'c', 'd', 'e'])) == 5
    print("  length: OK")


def test_largest():
    @show_as_fold
    def largest(lst):
        if is_empty(lst):
            return float('-inf')
        first, rest = unprepend(lst)
        return max(first, largest(rest))

    assert largest(Node.from_list([3, 1, 4, 1, 5, 9, 2, 6])) == 9
    assert largest(Node.from_list([42])) == 42
    assert largest(Node.from_list([-5, -3, -10])) == -3
    assert largest(Node.from_list([])) == float('-inf')
    print("  largest: OK")


def test_smallest():
    @show_as_fold
    def smallest(lst):
        if is_empty(lst):
            return float('inf')
        first, rest = unprepend(lst)
        return min(first, smallest(rest))

    assert smallest(Node.from_list([3, 1, 4, 1, 5])) == 1
    assert smallest(Node.from_list([42])) == 42
    assert smallest(Node.from_list([-5, -3, -10])) == -10
    print("  smallest: OK")


def test_every():
    @show_as_fold
    def every_positive(lst):
        if is_empty(lst):
            return True
        first, rest = unprepend(lst)
        return first > 0 and every_positive(rest)

    assert every_positive(Node.from_list([1, 2, 3])) == True
    assert every_positive(Node.from_list([1, -2, 3])) == False
    assert every_positive(Node.from_list([])) == True
    print("  every_positive: OK")


def test_some():
    @show_as_fold
    def some_negative(lst):
        if is_empty(lst):
            return False
        first, rest = unprepend(lst)
        return first < 0 or some_negative(rest)

    assert some_negative(Node.from_list([1, 2, 3])) == False
    assert some_negative(Node.from_list([1, -2, 3])) == True
    assert some_negative(Node.from_list([])) == False
    print("  some_negative: OK")


def test_map():
    @show_as_fold
    def map_double(lst):
        if is_empty(lst):
            return EMPTY_LIST
        first, rest = unprepend(lst)
        return prepend(first * 2, map_double(rest))

    assert to_python_list(map_double(Node.from_list([1, 2, 3]))) == [2, 4, 6]
    assert to_python_list(map_double(Node.from_list([]))) == []
    print("  map_double: OK")


def test_filter():
    @show_as_fold
    def filter_positive(lst):
        if is_empty(lst):
            return EMPTY_LIST
        first, rest = unprepend(lst)
        return prepend(first, filter_positive(rest)) if first > 0 else filter_positive(rest)

    assert to_python_list(filter_positive(Node.from_list([1, -2, 3, -4, 5]))) == [1, 3, 5]
    assert to_python_list(filter_positive(Node.from_list([-1, -2]))) == []
    assert to_python_list(filter_positive(Node.from_list([]))) == []
    print("  filter_positive: OK")


def test_reverse():
    @show_as_fold
    def reverse(lst):
        if is_empty(lst):
            return EMPTY_LIST
        first, rest = unprepend(lst)
        return append(first, reverse(rest))

    assert to_python_list(reverse(Node.from_list([1, 2, 3]))) == [3, 2, 1]
    assert to_python_list(reverse(Node.from_list([42]))) == [42]
    assert to_python_list(reverse(Node.from_list([]))) == []
    print("  reverse: OK")


def test_concat():
    @show_as_fold
    def concat(lst):
        if is_empty(lst):
            return second_list
        first, rest = unprepend(lst)
        return prepend(first, concat(rest))

    second_list = Node.from_list([4, 5, 6])
    assert to_python_list(concat(Node.from_list([1, 2, 3]))) == [1, 2, 3, 4, 5, 6]

    second_list = EMPTY_LIST
    assert to_python_list(concat(Node.from_list([1, 2]))) == [1, 2]

    second_list = Node.from_list([4, 5])
    assert to_python_list(concat(Node.from_list([]))) == [4, 5]
    print("  concat: OK")


# =============================================================================
# Run tests
# =============================================================================

if __name__ == "__main__":
    print("=== Testing function correctness ===\n")

    # Suppress the fold output during tests
    old_stdout = sys.stdout
    sys.stdout = io.StringIO()

    test_sum_list()
    test_product()
    test_length()
    test_largest()
    test_smallest()
    test_every()
    test_some()
    test_map()
    test_filter()
    test_reverse()
    test_concat()

    # Restore stdout and print results
    output = sys.stdout.getvalue()
    sys.stdout = old_stdout

    # Print just the OK lines
    for line in output.split('\n'):
        if 'OK' in line:
            print(line)

    print("\n=== All tests passed ===")
