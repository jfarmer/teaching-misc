# example = [10, 20, 30, -1]
#
# print('array: ', example);
# print('sum:   ', sum_list(example));
# print('product: ', product(example));
# print('largest: ', largest(example));
# print('evens:   ', select_evens(example));


import operator


def template(array):
    result_so_far = _____

    for value in array:
        result_so_far = _____

    return result_so_far

# Accumulator pattern

# Find-the-best pattern


def add(x, y):
    return x + y

# sum([]) === 0


def sum_list(array):
    result_so_far = 0

    for value in array:
        result_so_far = result_so_far + value

    return result_so_far


# product([10, 10, 5]) === 10  10  5 === 500

# product([-1, 4, 200]) === -1  4  200 === -800

# product([]) === 1

def multiply(x, y):
    return x * y


def product(array):
    result_so_far = _____

    for value in array:
        result_so_far = _____

    return result_so_far


def larger(x, y):
    if x > y:
        return x
    else:
        return y


def largest(array):
    result_so_far = _____

    for value in array:
        result_so_far = _____

    return result_so_far


def multiply(x, y):
    return x * y


def product(array):
    result_so_far = _____

    for value in array:
        result_so_far = _____

    return result_so_far


def append_if_even(array, num):
    if num % 2 == 0:
        return array + [num]
    else:
        return array


def select_evens(array):
    result_so_far = []

    for value in array:
        result_so_far = append_if_even(result_so_far, value)

    return result_so_far


def apply_and_append(array, item, fn):
    return array + [fn(item)]


def map(array, fn):
    result_so_far = []

    for value in array:
        result_so_far = apply_and_append(result_so_far, value, fn)

    return result_so_far


def accumulate(array, operation, initial):
    result_so_far = initial

    for item in array:
        # print('result_so_far:', result_so_far)
        # print('item:', item)
        result_so_far = operation(result_so_far, item)

    return result_so_far

# map([10, 20, 30], some_func)
#   === [some_func(10), some_func(20), some_func(30)]


def map_acc(array, some_func):
    return accumulate(
        array,
        lambda result_so_far, item: result_so_far + [some_func(item)],
        []
    )


def product_acc(array):
    return accumulate(array, operator.mul, 1)


def largest_acc(array):
    return accumulate(array, larger, -float('inf'))


def sum_acc(array):
    # array.reduce((x, y) => x + y, 0)
    return accumulate(array, lambda x, y: x + y, 0)

# returns true if condition returns true for all
# elements of array


def every_acc(array, condition):
    return accumulate(
        array,
        lambda result, item: result and condition(item),
        True
    )


def any_acc(array, condition):
    return accumulate(
        array,
        lambda result, item: result or condition(item),
        False
    )


def count_item_acc(array, item_to_count):
    return accumulate(
        array,
        lambda result, item: result + 1 if item == item_to_count else result,
        0
    )


def count_items_acc(array):
    return accumulate(
        array,
        lambda results, item: results.update(
            {item: results.get(item, 0) + 1}) or results,
        {}
    )
