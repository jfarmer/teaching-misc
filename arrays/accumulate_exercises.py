def template(array):
    result_so_far = _____

    for value in array:
        result_so_far = _____

    return result_so_far


def add(x, y):
    return x + y


def sum_list(array):
    result_so_far = 0

    for value in array:
        result_so_far = add(result_so_far, value)

    return result_so_far

def multiply(x, y):
    return x * y

def product(array):
    result_so_far = 1

    for value in array:
        result_so_far = multiply(result_so_far, value)

    return result_so_far

def largest(array):
    result_so_far = _____

    for value in array:
        result_so_far = _____

    return result_so_far


def reverse(array):
    """
    Given an array, return a new array with the same elements in reverse order.
    """
    result_so_far = _____

    for value in array:
        result_so_far = _____

    return result_so_far


def map(array, fn):
    """
    Given an array and a function, return a new array where each element
    is the result of applying the function to the corresponding element.

    map([a, b, c], fn) == [fn(a), fn(b), fn(c)]
    """
    result_so_far = _____

    for value in array:
        result_so_far = _____

    return result_so_far


def filter(array, check_fn):
    """
    Given an array and a function check_fn, return a new array containing
    only the elements of the original array for which check_fn returns True.
    """
    result_so_far = _____

    for value in array:
        result_so_far = _____

    return result_so_far


def every(array, check_fn):
    """
    Given an array and a function, return True if the function returns
    True for every element of the array and False otherwise.
    """
    result_so_far = _____

    for value in array:
        result_so_far = _____

    return result_so_far


def some(array, check_fn):
    """
    Given an array and a function, return True if the function returns
    True for at least one element of the array and False otherwise.
    """
    result_so_far = _____

    for value in array:
        result_so_far = _____

    return result_so_far


def group_by(array, key_fn):
    """
    Given an array and a function, returns a dictionary where the keys
    are the distinct return values of the function and the values
    are arrays of items which return that value.

    group_by([1, 2, 3], lambda n: n % 2) # => {0: [2], 1: [1,3]}
    """
    result_so_far = _____

    # The return values of dict-related functions makes following the template
    # annoying. Try to follow it in spirit, at least.
    for value in array:
        result_so_far = _____

    return result_so_far


def flatten(array):
    """
    Given an array of arrays, return a single array with all elements.

    flatten([[1, 2], [3], [4, 5]]) == [1, 2, 3, 4, 5]
    """
    result_so_far = _____

    for value in array:
        result_so_far = _____

    return result_so_far


def count(array, check_fn):
    """
    Given an array and a function, return the number of elements
    for which check_fn returns True.

    count([1, 2, 3, 4, 5], lambda x: x % 2 == 0) == 2
    """
    result_so_far = _____

    for value in array:
        result_so_far = _____

    return result_so_far


def last(array):
    """
    Given an array, return the last element.

    last([1, 2, 3, 4, 5]) == 5
    """
    result_so_far = _____

    for value in array:
        result_so_far = _____

    return result_so_far


def contains(array, target):
    """
    Given an array and a target value, return True if the target
    is in the array and False otherwise.

    contains([1, 2, 3], 2) == True
    contains([1, 2, 3], 5) == False
    """
    result_so_far = _____

    for value in array:
        result_so_far = _____

    return result_so_far


def join(array, separator):
    """
    Given an array of strings and a separator, return a single string
    with all elements joined by the separator.

    join(['a', 'b', 'c'], '-') == 'a-b-c'
    """
    result_so_far = _____

    for value in array:
        result_so_far = _____

    return result_so_far


def frequencies(array):
    """
    Given an array, return a dictionary mapping each unique element
    to the number of times it appears.

    frequencies(['a', 'b', 'a']) == {'a': 2, 'b': 1}
    """
    result_so_far = _____

    for value in array:
        result_so_far = _____

    return result_so_far


def unique(array):
    """
    Given an array, return a new array with duplicates removed,
    preserving the order of first occurrence.

    unique([1, 2, 1, 3, 2, 4]) == [1, 2, 3, 4]
    """
    result_so_far = _____

    for value in array:
        result_so_far = _____

    return result_so_far


# Test your implementations
if __name__ == "__main__":
    test_array = [1, 2, 3, 4, 5]

    print("Original array:", test_array)
    print("Reverse:", reverse(test_array))
    print("Map (double):", map(test_array, lambda x: x * 2))
    print("Filter (evens):", filter(test_array, lambda x: x % 2 == 0))
    print("Every (positive):", every(test_array, lambda x: x > 0))
    print("Some (even):", some(test_array, lambda x: x % 2 == 0))
    print("Group by even/odd:", group_by(test_array,
          lambda x: "even" if x % 2 == 0 else "odd"))
    print("Flatten:", flatten([[1, 2], [3], [4, 5]]))
    print("Count (evens):", count(test_array, lambda x: x % 2 == 0))
    print("Last:", last(test_array))
    print("Contains 3:", contains(test_array, 3))
    print("Contains 9:", contains(test_array, 9))
    print("Join:", join(['a', 'b', 'c'], '-'))
    print("Frequencies:", frequencies(['a', 'b', 'a', 'c', 'b', 'a']))
    print("Unique:", unique([1, 2, 1, 3, 2, 4]))
