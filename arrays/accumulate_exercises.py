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
