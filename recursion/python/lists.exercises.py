"""
Recursive Linked List Exercises
===============================

All exercises follow the same template (which is foldr in disguise):

    def template(lst):
        if is_empty(lst):
            return _____           # Base case

        first, rest = unprepend(lst)
        return _____               # Combine first with recursive result

Fill in the blanks (_____) to complete each function.

Hint: Think about:
  1. What should the answer be for an empty list?
  2. If I have `first` and the answer for `rest`, how do I combine them?
"""

# =============================================================================
# LINKED LIST INFRASTRUCTURE
# =============================================================================

EMPTY_LIST = None


class Node:
    """A node in a singly-linked list."""

    @staticmethod
    def from_list(lst):
        """Create a linked list from a Python list."""
        if len(lst) == 0:
            return EMPTY_LIST
        first, *rest = lst
        return prepend(first, Node.from_list(rest))

    def __init__(self, value, next=None):
        self.value = value
        self.next = next

    def __str__(self):
        return list_to_string(self)

    def __repr__(self):
        return self.__str__()


def list_to_string(lst):
    """Convert linked list to string representation."""
    if is_empty(lst):
        return '()'

    first, rest = unprepend(lst)

    return f'{first} -> {list_to_string(rest)}'


def is_empty(lst):
    """Return True if lst is the empty list."""
    return lst is EMPTY_LIST


def prepend(val, lst):
    """Add val to the front of lst."""
    return Node(val, lst)


def unprepend(lst):
    """Return (first element, rest of list) tuple."""
    return lst.value, lst.next


# =============================================================================
# EXAMPLE: SUM (fully implemented as reference)
# =============================================================================

def sum_list(lst):
    """
    Given a linked list of numbers, return their sum.

    sum_list(1 -> 2 -> 3) => 6
    sum_list(()) => 0
    """
    if is_empty(lst):
        return 0

    first, rest = unprepend(lst)

    return first + sum_list(rest)


# =============================================================================
# NUMERIC AGGREGATIONS
# =============================================================================

def product(lst):
    """
    Given a list of numbers, return their product.

    product(2 -> 3 -> 4) => 24
    product(()) => ???
    """
    if is_empty(lst):
        return _____

    first, rest = unprepend(lst)

    return _____


def largest(lst):
    """
    Given a non-empty list of numbers, return the largest.

    largest(3 -> 7 -> 2) => 7

    Note: You can assume the list is non-empty.
    """
    # Base case: single element list
    if is_empty(lst.next):
        return _____

    first, rest = unprepend(lst)

    return _____


def smallest(lst):
    """
    Given a non-empty list of numbers, return the smallest.

    smallest(3 -> 7 -> 2) => 2
    """
    if is_empty(lst.next):
        return _____

    first, rest = unprepend(lst)

    return _____


def length(lst):
    """
    Return the number of elements in the list.

    length(a -> b -> c) => 3
    length(()) => ???
    """
    if is_empty(lst):
        return _____

    first, rest = unprepend(lst)

    return _____


def sum_squares(lst):
    """
    Return the sum of squares of all elements.

    sum_squares(1 -> 2 -> 3) => 1 + 4 + 9 = 14
    sum_squares(()) => ???
    """
    if is_empty(lst):
        return _____

    first, rest = unprepend(lst)

    return _____


# =============================================================================
# BOOLEAN AGGREGATIONS
# =============================================================================

def every(pred, lst):
    """
    Return True if pred(x) is True for EVERY element x in lst.

    every(is_positive, 1 -> 2 -> 3) => True
    every(is_positive, 1 -> -2 -> 3) => False
    every(is_positive, ()) => ???
    """
    if is_empty(lst):
        return _____

    first, rest = unprepend(lst)

    return _____


def some(pred, lst):
    """
    Return True if pred(x) is True for ANY element x in lst.

    some(is_negative, 1 -> 2 -> 3) => False
    some(is_negative, 1 -> -2 -> 3) => True
    some(is_negative, ()) => ???
    """
    if is_empty(lst):
        return _____

    first, rest = unprepend(lst)

    return _____


def none(pred, lst):
    """
    Return True if pred(x) is False for ALL elements x in lst.

    none(is_negative, 1 -> 2 -> 3) => True
    none(is_negative, 1 -> -2 -> 3) => False
    """
    if is_empty(lst):
        return _____

    first, rest = unprepend(lst)

    return _____


def contains(val, lst):
    """
    Return True if val is in lst.

    contains(2, 1 -> 2 -> 3) => True
    contains(5, 1 -> 2 -> 3) => False
    contains(5, ()) => ???
    """
    if is_empty(lst):
        return _____

    first, rest = unprepend(lst)

    return _____


def all_equal(lst):
    """
    Return True if all elements in lst are equal to each other.

    all_equal(5 -> 5 -> 5) => True
    all_equal(5 -> 5 -> 3) => False
    all_equal(()) => ???
    all_equal(42) => True (single element)
    """
    if is_empty(lst):
        return _____

    if is_empty(lst.next):
        return _____

    first, rest = unprepend(lst)
    second = rest.value

    return _____


def is_sorted(lst):
    """
    Return True if lst is sorted in ascending order.

    is_sorted(1 -> 2 -> 3) => True
    is_sorted(1 -> 3 -> 2) => False
    is_sorted(()) => ???
    is_sorted(42) => True (single element)
    """
    if is_empty(lst):
        return _____

    if is_empty(lst.next):
        return _____

    first, rest = unprepend(lst)
    second = rest.value

    return _____


# =============================================================================
# COUNTING & SEARCHING
# =============================================================================

def count_if(pred, lst):
    """
    Count elements where pred(x) is True.

    count_if(is_even, 1 -> 2 -> 3 -> 4) => 2
    count_if(is_even, ()) => ???
    """
    if is_empty(lst):
        return _____

    first, rest = unprepend(lst)

    return _____


def count_occurrences(val, lst):
    """
    Count how many times val appears in lst.

    count_occurrences(2, 1 -> 2 -> 2 -> 3) => 2
    count_occurrences(5, 1 -> 2 -> 3) => 0
    """
    if is_empty(lst):
        return _____

    first, rest = unprepend(lst)

    return _____


def find(pred, lst):
    """
    Return first element where pred(x) is True, or None if not found.

    find(is_even, 1 -> 3 -> 4 -> 6) => 4
    find(is_even, 1 -> 3 -> 5) => None
    """
    if is_empty(lst):
        return _____

    first, rest = unprepend(lst)

    return _____


def index_of(val, lst):
    """
    Return index of first occurrence of val, or -1 if not found.

    index_of(3, 1 -> 2 -> 3 -> 4) => 2
    index_of(5, 1 -> 2 -> 3) => -1
    """
    def helper(lst, idx):
        if is_empty(lst):
            return _____

        first, rest = unprepend(lst)

        return _____

    return helper(lst, 0)


def find_index(pred, lst):
    """
    Return index of first element where pred(x) is True, or -1 if not found.

    find_index(is_even, 1 -> 3 -> 4 -> 6) => 2
    find_index(is_even, 1 -> 3 -> 5) => -1
    """
    def helper(lst, idx):
        if is_empty(lst):
            return _____

        first, rest = unprepend(lst)

        return _____

    return helper(lst, 0)


# =============================================================================
# ELEMENT ACCESS
# =============================================================================

def last(lst):
    """
    Return the last element of a non-empty list.

    last(1 -> 2 -> 3) => 3
    last(42) => 42
    """
    if is_empty(lst.next):
        return _____

    first, rest = unprepend(lst)

    return _____


def nth(n, lst):
    """
    Return the element at index n (0-indexed).

    nth(0, a -> b -> c) => a
    nth(2, a -> b -> c) => c
    """
    if n == 0:
        return _____

    first, rest = unprepend(lst)

    return _____


def take(n, lst):
    """
    Return a new list with the first n elements.

    take(2, 1 -> 2 -> 3 -> 4) => 1 -> 2
    take(0, 1 -> 2 -> 3) => ()
    take(5, 1 -> 2) => 1 -> 2
    """
    if n == 0 or is_empty(lst):
        return _____

    first, rest = unprepend(lst)

    return _____


def drop(n, lst):
    """
    Return a new list without the first n elements.

    drop(2, 1 -> 2 -> 3 -> 4) => 3 -> 4
    drop(0, 1 -> 2 -> 3) => 1 -> 2 -> 3
    drop(5, 1 -> 2) => ()
    """
    if n == 0 or is_empty(lst):
        return _____

    first, rest = unprepend(lst)

    return _____


def take_while(pred, lst):
    """
    Return elements from the front while pred(x) is True.

    take_while(is_positive, 1 -> 2 -> -3 -> 4) => 1 -> 2
    take_while(is_positive, -1 -> 2 -> 3) => ()
    """
    if is_empty(lst):
        return _____

    first, rest = unprepend(lst)

    return _____


def drop_while(pred, lst):
    """
    Drop elements from the front while pred(x) is True.

    drop_while(is_positive, 1 -> 2 -> -3 -> 4) => -3 -> 4
    drop_while(is_positive, -1 -> 2 -> 3) => -1 -> 2 -> 3
    """
    if is_empty(lst):
        return _____

    first, rest = unprepend(lst)

    return _____


def init(lst):
    """
    Return all elements except the last one.

    init(1 -> 2 -> 3) => 1 -> 2
    init(42) => ()
    """
    if is_empty(lst.next):
        return _____

    first, rest = unprepend(lst)

    return _____


# =============================================================================
# LIST TRANSFORMATIONS
# =============================================================================

def map_list(fn, lst):
    """
    Apply fn to every element, return new list of results.

    map_list(double, 1 -> 2 -> 3) => 2 -> 4 -> 6
    map_list(double, ()) => ???
    """
    if is_empty(lst):
        return _____

    first, rest = unprepend(lst)

    return _____


def filter_list(pred, lst):
    """
    Return new list with only elements where pred(x) is True.

    filter_list(is_even, 1 -> 2 -> 3 -> 4) => 2 -> 4
    filter_list(is_even, 1 -> 3 -> 5) => ()
    """
    if is_empty(lst):
        return _____

    first, rest = unprepend(lst)

    return _____


def reverse(lst):
    """
    Return a new list with elements in reverse order.

    reverse(1 -> 2 -> 3) => 3 -> 2 -> 1
    reverse(()) => ???
    """
    if is_empty(lst):
        return _____

    first, rest = unprepend(lst)

    return _____


def append(val, lst):
    """
    Return new list with val added at the END.

    append(99, 1 -> 2 -> 3) => 1 -> 2 -> 3 -> 99
    append(99, ()) => ???
    """
    if is_empty(lst):
        return _____

    first, rest = unprepend(lst)

    return _____


def intersperse(sep, lst):
    """
    Put sep between each element.

    intersperse(0, 1 -> 2 -> 3) => 1 -> 0 -> 2 -> 0 -> 3
    intersperse(0, 1) => 1
    intersperse(0, ()) => ???
    """
    if is_empty(lst):
        return _____

    if is_empty(lst.next):
        return _____

    first, rest = unprepend(lst)

    return _____


def dedupe(lst):
    """
    Remove CONSECUTIVE duplicates.

    dedupe(1 -> 1 -> 2 -> 2 -> 1) => 1 -> 2 -> 1
    dedupe(1 -> 2 -> 3) => 1 -> 2 -> 3
    dedupe(()) => ???
    """
    if is_empty(lst):
        return _____

    if is_empty(lst.next):
        return _____

    first, rest = unprepend(lst)
    second = rest.value

    return _____


def unique(lst):
    """
    Remove ALL duplicates, keeping first occurrence.

    unique(1 -> 2 -> 1 -> 3 -> 2) => 1 -> 2 -> 3
    unique(()) => ???
    """
    if is_empty(lst):
        return _____

    first, rest = unprepend(lst)

    return _____


def compact(lst):
    """
    Remove all None values.

    compact(1 -> None -> 2 -> None -> 3) => 1 -> 2 -> 3
    compact(()) => ???
    """
    if is_empty(lst):
        return _____

    first, rest = unprepend(lst)

    return _____


def without(val, lst):
    """
    Remove ALL occurrences of val.

    without(2, 1 -> 2 -> 3 -> 2 -> 4) => 1 -> 3 -> 4
    without(5, 1 -> 2 -> 3) => 1 -> 2 -> 3
    """
    if is_empty(lst):
        return _____

    first, rest = unprepend(lst)

    return _____


def replace(old, new, lst):
    """
    Replace all occurrences of old with new.

    replace(2, 99, 1 -> 2 -> 3 -> 2) => 1 -> 99 -> 3 -> 99
    replace(5, 99, 1 -> 2 -> 3) => 1 -> 2 -> 3
    """
    if is_empty(lst):
        return _____

    first, rest = unprepend(lst)

    return _____


def flatten(lst):
    """
    Flatten one level of nesting (list of lists -> list).

    flatten((1 -> 2) -> (3) -> (4 -> 5)) => 1 -> 2 -> 3 -> 4 -> 5
    flatten(() -> (1 -> 2) -> ()) => 1 -> 2
    flatten(()) => ???
    """
    if is_empty(lst):
        return _____

    first, rest = unprepend(lst)

    return _____


def flat_map(fn, lst):
    """
    Map fn over lst, then flatten the result.

    If fn returns a list for each element, flat_map concatenates them.

    flat_map(lambda x: Node.from_list([x, x]), 1 -> 2) => 1 -> 1 -> 2 -> 2
    """
    if is_empty(lst):
        return _____

    first, rest = unprepend(lst)

    return _____


# =============================================================================
# COMBINING TWO LISTS
# =============================================================================

def concat(lst1, lst2):
    """
    Concatenate two lists.

    concat(1 -> 2, 3 -> 4) => 1 -> 2 -> 3 -> 4
    concat((), 1 -> 2) => 1 -> 2
    concat(1 -> 2, ()) => 1 -> 2

    Note: Recurse on lst1, lst2 stays fixed.
    """
    if is_empty(lst1):
        return _____

    first, rest = unprepend(lst1)

    return _____


def zip_lists(lst1, lst2):
    """
    Combine two lists into list of tuples, stopping at shorter list.

    zip_lists(1 -> 2 -> 3, a -> b) => (1,a) -> (2,b)
    zip_lists((), 1 -> 2) => ???
    """
    if is_empty(lst1) or is_empty(lst2):
        return _____

    first1, rest1 = unprepend(lst1)
    first2, rest2 = unprepend(lst2)

    return _____


def zip_with(fn, lst1, lst2):
    """
    Combine two lists using fn, stopping at shorter list.

    zip_with(add, 1 -> 2 -> 3, 10 -> 20) => 11 -> 22
    """
    if is_empty(lst1) or is_empty(lst2):
        return _____

    first1, rest1 = unprepend(lst1)
    first2, rest2 = unprepend(lst2)

    return _____


def interleave(lst1, lst2):
    """
    Alternate elements from two lists.

    interleave(1 -> 2 -> 3, a -> b -> c) => 1 -> a -> 2 -> b -> 3 -> c
    interleave(1 -> 2, a) => 1 -> a -> 2
    interleave((), a -> b) => a -> b
    """
    if is_empty(lst1):
        return _____

    first, rest = unprepend(lst1)

    return _____


def merge(lst1, lst2):
    """
    Merge two SORTED lists into one sorted list.

    merge(1 -> 3 -> 5, 2 -> 4 -> 6) => 1 -> 2 -> 3 -> 4 -> 5 -> 6
    merge(1 -> 2, ()) => 1 -> 2
    """
    if is_empty(lst1):
        return _____

    if is_empty(lst2):
        return _____

    first1, rest1 = unprepend(lst1)
    first2, rest2 = unprepend(lst2)

    return _____


# =============================================================================
# PARTITIONING
# =============================================================================

def partition(pred, lst):
    """
    Split list into (elements where pred is True, elements where pred is False).

    partition(is_even, 1 -> 2 -> 3 -> 4) => (2 -> 4, 1 -> 3)
    partition(is_even, ()) => ???
    """
    if is_empty(lst):
        return _____

    first, rest = unprepend(lst)
    trues, falses = partition(pred, rest)

    return _____


def split_at(n, lst):
    """
    Split list at index n into (first n elements, rest).

    split_at(2, 1 -> 2 -> 3 -> 4) => (1 -> 2, 3 -> 4)
    split_at(0, 1 -> 2 -> 3) => ((), 1 -> 2 -> 3)
    """
    if n == 0 or is_empty(lst):
        return _____

    first, rest = unprepend(lst)
    left, right = split_at(n - 1, rest)

    return _____


def span(pred, lst):
    """
    Split where predicate first becomes False.

    span(is_positive, 1 -> 2 -> -3 -> 4) => (1 -> 2, -3 -> 4)
    span(is_positive, -1 -> 2 -> 3) => ((), -1 -> 2 -> 3)

    Like (take_while pred, drop_while pred) but more efficient.
    """
    if is_empty(lst):
        return _____

    first, rest = unprepend(lst)
    if not pred(first):
        return _____

    left, right = span(pred, rest)

    return _____


def chunks_of(n, lst):
    """
    Group elements into sublists of size n.

    chunks_of(2, 1 -> 2 -> 3 -> 4 -> 5) => (1 -> 2) -> (3 -> 4) -> (5)
    chunks_of(3, 1 -> 2) => (1 -> 2)
    """
    if is_empty(lst):
        return _____

    chunk = take(n, lst)
    remaining = drop(n, lst)

    return _____


# =============================================================================
# STRUCTURAL / META
# =============================================================================

def indexed(lst):
    """
    Pair each element with its index.

    indexed(a -> b -> c) => (0,a) -> (1,b) -> (2,c)
    indexed(()) => ???
    """
    def helper(lst, idx):
        if is_empty(lst):
            return _____

        first, rest = unprepend(lst)

        return _____

    return helper(lst, 0)


def tails(lst):
    """
    Return list of all suffixes (tails).

    tails(1 -> 2 -> 3) => (1 -> 2 -> 3) -> (2 -> 3) -> (3) -> ()
    tails(()) => ???
    """
    if is_empty(lst):
        return _____

    first, rest = unprepend(lst)

    return _____


def inits(lst):
    """
    Return list of all prefixes (inits).

    inits(1 -> 2 -> 3) => () -> (1) -> (1 -> 2) -> (1 -> 2 -> 3)
    inits(()) => ???
    """
    if is_empty(lst):
        return _____

    first, rest = unprepend(lst)

    return _____


# =============================================================================
# COMPARISONS (TWO LISTS)
# =============================================================================

def equals(lst1, lst2):
    """
    Return True if two lists have the same elements in the same order.

    equals(1 -> 2 -> 3, 1 -> 2 -> 3) => True
    equals(1 -> 2, 1 -> 2 -> 3) => False
    equals((), ()) => ???
    """
    if is_empty(lst1) and is_empty(lst2):
        return _____

    if is_empty(lst1) or is_empty(lst2):
        return _____

    first1, rest1 = unprepend(lst1)
    first2, rest2 = unprepend(lst2)

    return _____


def is_prefix_of(prefix, lst):
    """
    Return True if prefix is a prefix of lst.

    is_prefix_of(1 -> 2, 1 -> 2 -> 3) => True
    is_prefix_of(1 -> 3, 1 -> 2 -> 3) => False
    is_prefix_of((), anything) => True
    """
    if is_empty(prefix):
        return _____

    if is_empty(lst):
        return _____

    first_p, rest_p = unprepend(prefix)
    first_l, rest_l = unprepend(lst)

    return _____


def common_prefix(lst1, lst2):
    """
    Return the longest common prefix of two lists.

    common_prefix(1 -> 2 -> 3, 1 -> 2 -> 5 -> 6) => 1 -> 2
    common_prefix(1 -> 2, 3 -> 4) => ()
    """
    if is_empty(lst1) or is_empty(lst2):
        return _____

    first1, rest1 = unprepend(lst1)
    first2, rest2 = unprepend(lst2)

    return _____


# =============================================================================
# SORTING-ADJACENT
# =============================================================================

def insert_sorted(val, lst):
    """
    Insert val into an already-sorted list, maintaining sort order.

    insert_sorted(3, 1 -> 2 -> 4 -> 5) => 1 -> 2 -> 3 -> 4 -> 5
    insert_sorted(0, 1 -> 2 -> 3) => 0 -> 1 -> 2 -> 3
    insert_sorted(9, 1 -> 2 -> 3) => 1 -> 2 -> 3 -> 9
    """
    if is_empty(lst):
        return _____

    first, rest = unprepend(lst)

    return _____


def insertion_sort(lst):
    """
    Sort list using insertion sort.

    insertion_sort(3 -> 1 -> 4 -> 1 -> 5) => 1 -> 1 -> 3 -> 4 -> 5
    """
    if is_empty(lst):
        return _____

    first, rest = unprepend(lst)

    return _____


# =============================================================================
# HELPER PREDICATES (for testing)
# =============================================================================

def is_even(n):
    return n % 2 == 0


def is_odd(n):
    return n % 2 != 0


def is_positive(n):
    return n > 0


def is_negative(n):
    return n < 0


def double(n):
    return n * 2


def add(a, b):
    return a + b


def multiply(a, b):
    return a * b


# =============================================================================
# TEST HARNESS
# =============================================================================

if __name__ == '__main__':
    # Create some test lists
    nums = Node.from_list([10, 20, 30, -1])
    nums2 = Node.from_list([1, 2, 3, 4, 5])
    empty = EMPTY_LIST
    single = Node.from_list([42])
    with_dupes = Node.from_list([1, 1, 2, 2, 2, 3, 1])
    sorted_lst = Node.from_list([1, 3, 5, 7])
    sorted_lst2 = Node.from_list([2, 4, 6, 8])

    print("=== Test Lists ===")
    print(f"nums:       {nums}")
    print(f"nums2:      {nums2}")
    print(f"empty:      {empty}")
    print(f"single:     {single}")
    print(f"with_dupes: {with_dupes}")
    print()

    print("=== Example (sum) ===")
    print(f"sum_list(nums): {sum_list(nums)}")
    print()

    # Uncomment these as you implement each function:

    # print("=== Numeric Aggregations ===")
    # print(f"product(nums2):     {product(nums2)}")
    # print(f"largest(nums):      {largest(nums)}")
    # print(f"smallest(nums):     {smallest(nums)}")
    # print(f"length(nums):       {length(nums)}")
    # print(f"sum_squares(nums2): {sum_squares(nums2)}")
    # print()

    # print("=== Boolean Aggregations ===")
    # print(f"every(is_positive, nums2): {every(is_positive, nums2)}")
    # print(f"every(is_positive, nums):  {every(is_positive, nums)}")
    # print(f"some(is_negative, nums):   {some(is_negative, nums)}")
    # print(f"contains(20, nums):        {contains(20, nums)}")
    # print(f"contains(99, nums):        {contains(99, nums)}")
    # print(f"all_equal(Node.from_list([5,5,5])): {all_equal(Node.from_list([5,5,5]))}")
    # print(f"is_sorted(sorted_lst):     {is_sorted(sorted_lst)}")
    # print(f"is_sorted(nums):           {is_sorted(nums)}")
    # print()

    # print("=== Counting & Searching ===")
    # print(f"count_if(is_even, nums2):        {count_if(is_even, nums2)}")
    # print(f"count_occurrences(1, with_dupes): {count_occurrences(1, with_dupes)}")
    # print(f"find(is_even, nums2):            {find(is_even, nums2)}")
    # print(f"index_of(30, nums):              {index_of(30, nums)}")
    # print()

    # print("=== Element Access ===")
    # print(f"last(nums):          {last(nums)}")
    # print(f"nth(2, nums):        {nth(2, nums)}")
    # print(f"take(2, nums):       {take(2, nums)}")
    # print(f"drop(2, nums):       {drop(2, nums)}")
    # print(f"init(nums):          {init(nums)}")
    # print()

    # print("=== List Transformations ===")
    # print(f"map_list(double, nums2):  {map_list(double, nums2)}")
    # print(f"filter_list(is_even, nums2): {filter_list(is_even, nums2)}")
    # print(f"reverse(nums):         {reverse(nums)}")
    # print(f"append(99, nums):      {append(99, nums)}")
    # print(f"intersperse(0, Node.from_list([1,2,3])): {intersperse(0, Node.from_list([1,2,3]))}")
    # print(f"dedupe(with_dupes):    {dedupe(with_dupes)}")
    # print(f"without(1, with_dupes): {without(1, with_dupes)}")
    # print()

    # print("=== Combining Two Lists ===")
    # print(f"concat(Node.from_list([1,2]), Node.from_list([3,4])): {concat(Node.from_list([1,2]), Node.from_list([3,4]))}")
    # print(f"zip_lists(nums2, Node.from_list(['a','b','c'])): {zip_lists(nums2, Node.from_list(['a','b','c']))}")
    # print(f"merge(sorted_lst, sorted_lst2): {merge(sorted_lst, sorted_lst2)}")
    # print()

    # print("=== Partitioning ===")
    # print(f"partition(is_even, nums2): {partition(is_even, nums2)}")
    # print(f"split_at(2, nums2):        {split_at(2, nums2)}")
    # print()

    # print("=== Structural ===")
    # print(f"indexed(Node.from_list(['a','b','c'])): {indexed(Node.from_list(['a','b','c']))}")
    # print(f"tails(Node.from_list([1,2,3])): {tails(Node.from_list([1,2,3]))}")
    # print()

    # print("=== Comparisons ===")
    # print(f"equals(nums, nums):     {equals(nums, nums)}")
    # print(f"equals(nums, nums2):    {equals(nums, nums2)}")
    # print(f"is_prefix_of(Node.from_list([1,2]), nums2): {is_prefix_of(Node.from_list([1,2]), nums2)}")
    # print()

    # print("=== Sorting ===")
    # print(f"insert_sorted(3, sorted_lst):        {insert_sorted(3, sorted_lst)}")
    # print(f"insertion_sort(Node.from_list([3,1,4,1,5])): {insertion_sort(Node.from_list([3,1,4,1,5]))}")
    # print()

    # print("=== Fold ===")
    # print(f"foldr(add, 0, nums2):      {foldr(add, 0, nums2)}")
    # print(f"foldr(multiply, 1, nums2): {foldr(multiply, 1, nums2)}")
    # print(f"foldl(add, 0, nums2):      {foldl(add, 0, nums2)}")
