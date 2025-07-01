def subsequences(array):
    if not array:
        return [[]]

    first = array[0]
    rest = array[1:]

    without_first = subsequences(rest)
    with_first = [[first] + subseq for subseq in without_first]

    return without_first + with_first

def subsequences_print(array, results = None):
    if results is None:
        results = []

    if not array:
        print(results)
        return

    first = array[0]
    rest = array[1:]

    subsequences_print(rest, results)
    subsequences_print(rest, results + [first])

def subsequences_collect(array, results = None):
    if results is None:
        results = []

    if not array:
        return [results]

    first = array[0]
    rest = array[1:]

    without_first = subsequences_collect(rest, results)
    with_first = subsequences_collect(rest, results + [first])

    return without_first + with_first

def subsequences_print_ref_idx(array, idx = 0, results = None):
    if results is None:
        results = []

    if idx == len(array):
        print(results)
        return

    # Excluding array[idx]
    subsequences_print_ref_idx(array, idx + 1, results)

    # Including array[idx]
    results.append(array[idx])
    subsequences_print_ref_idx(array, idx + 1, results)
    results.pop()


def subsequences_collect_ref_idx(array, idx = 0, results = None, final = None):
    if results is None:
        results = []

    if final is None:
        final = []

    if idx == len(array):
        # We have to create a copy or else every element in final will
        # be a reference to the same array
        final.append(list(results))
        return

    # Excluding array[idx]
    subsequences_collect_ref_idx(array, idx + 1, results, final)

    # Including array[idx]
    results.append(array[idx])
    subsequences_collect_ref_idx(array, idx + 1, results, final)
    results.pop()

    return final

# from print_call_tree import print_call_tree

def subsequences_inner_nodes(array, idx = 0, path = None, results = None):
    if path is None:
        path = []

    if results is None:
        results = []

    results.append(path)

    n = len(array)
    if idx == n:
        return

    for i in range(idx, n):
        path.append(array[i])
        subsequences_inner_nodes(array, i + 1, path, results)
        path.pop()

    return results

from pprint import pprint
def nice_print(*args):
    pprint(*args, width=40)

example_array = ['a', 'b', 'c']

# subsequences_print(example_array)

# nice_print(subsequences_collect(example_array))
nice_print(subsequences_inner_nodes(example_array))
