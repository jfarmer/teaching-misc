def subsequences(array):
    if not array:
        return [[]]

    first = array[0]
    rest = array[1:]

    without_first = subsequences(rest)
    with_first = [[first] + subseq for subseq in without_first]

    return without_first + with_first

def subsequences_print(array, results = []):
    if not array:
        print(results)
        return

    first = array[0]
    rest = array[1:]

    subsequences_print(rest, results)
    subsequences_print(rest, results + [first])

def subsequences_collect(array, results = []):
    if not array:
        return [results]

    first = array[0]
    rest = array[1:]

    without_first = subsequences_collect(rest, results)
    with_first = subsequences_collect(rest, results + [first])

    return without_first + with_first

def subsequences_collect_ref_idx(array, idx = 0, results = [], final = []):
    if idx == len(array):
        # We have to create a copy or else every element in final will
        # be a reference to the same array
        final.append(list(results))
        return

    results.append(array[idx])
    subsequences_collect_ref_idx(array, idx + 1, results, final)
    results.pop()
    subsequences_collect_ref_idx(array, idx + 1, results, final)

    return final

from pprint import pprint
def nice_print(*args):
    pprint(*args, width=40)

example_array = ['a', 'b', 'c']

# nice_print(subsequences_collect(example_array))
subsequences_print(example_array)

# print(subseq(['a', 'b', 'c', 'd']))

# def avg(arr):
#     return sum(arr) / len(arr)

# import timeit
# print(avg(timeit.repeat(lambda: subsequences([1,2,3,4]), repeat=5, number=100000)))
# print(avg(timeit.repeat(lambda: subsequences2([1,2,3,4]), repeat=5, number=100000)))
# print(avg(timeit.repeat(lambda: subsequences3([1,2,3,4]), repeat=5, number=100000)))
