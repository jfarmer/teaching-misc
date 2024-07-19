import pickle

def memoize(func):
    cache = dict()

    def memoized_func(*args):
        key = pickle.dumps(args)
        if key in cache:
            return cache[key]
        result = func(*args)
        cache[key] = result
        return result

    return memoized_func

def longest_common_subsequence(left, right):
    '''
    Given two lists, `left` and `right`, return their longest common subsequence.

    @example
        longest_common_subsequence([10,20,30,40], [20,25,40,100]) == [20,40]

    '''
    pass

def longest_increasing_subsequence(array):
    pass
