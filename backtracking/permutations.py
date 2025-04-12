def permutations_print(array, results = ''):
    if len(array) == 0:
        print(results)
        return

    for i, item in enumerate(array):
        without_item = array[0:i] + array[i+1:]
        permutations_print(without_item, results + item)

def permutations_collect(array):
    if (len(array) == 0):
        return [[]]

    results = []
    for i in range(len(array)):
        item = array[i]
        remaining_items = array[0:i] + array[i+1:]
        remaining_perms = permutations_collect(remaining_items)

        for perm in remaining_perms:
            results.append([item] + perm)

    return results


def swap(array, i, j):
    [array[i], array[j]] = [array[j], array[i]]
    return array

def permutations_swap_print(array, idx = 0):
    if (len(array) == idx):
        print(array)
        return

    for i in range(idx, len(array)):
        swap(array, i, idx)
        permutations_swap_print(array, idx + 1)
        swap(array, i, idx)

example_array = list('abc')

from pprint import pprint

# permutations_print(example_array, '')
# permutations_swap_print(example_array)
# pprint(permutations_collect(example_array), width=40)
