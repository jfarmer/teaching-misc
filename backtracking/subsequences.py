def subsequences(array):
    if not array:
        return [[]]

    head, last = array[0:-1], array[-1]

    subseq_without_last = subsequences(head)
    subseq_with_last = [[*subseq, last] for subseq in subseq_without_last]

    return subseq_without_last + subseq_with_last

def subsequences_print(array, results = ''):
    if not array:
        print(f"'{results}'")

    head, last = array[0:-1], array[-1]

    subsequences_print(head, results)
    subsequences_print(head, last + results)

def subsequences_collect(array, results = ''):
    if not array:
        return [results]

    head, last = array[0:-1], array[-1]

    without_last = subsequences_collect(head, results)
    with_last = subsequences_collect(head, last + results)

    return without_last + with_last

def subsequences_collect_ref_idx(array, idx = 0, results = [], final = []):
    if idx == len(array):
        print(final)
        final.append(results)
        return

    results.append(array[idx])
    subsequences_collect_ref_idx(array, idx + 1, results, final)
    results.pop()
    subsequences_collect_ref_idx(array, idx + 1, results, final)

    return final

def subseq(array):
    final = []
    subsequences_collect_ref_idx(array, 0, [], final)
    return final

# subsequences_print(['a', 'b', 'c', 'd'])

print(subseq(['a', 'b', 'c', 'd']))

# def avg(arr):
#     return sum(arr) / len(arr)

# import timeit
# print(avg(timeit.repeat(lambda: subsequences([1,2,3,4]), repeat=5, number=100000)))
# print(avg(timeit.repeat(lambda: subsequences2([1,2,3,4]), repeat=5, number=100000)))
# print(avg(timeit.repeat(lambda: subsequences3([1,2,3,4]), repeat=5, number=100000)))
