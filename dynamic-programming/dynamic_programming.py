import pickle

_cache = dict()

def memoize1(f):
    def decorated(arg):
        key = (f, arg)
        if key not in _cache:
            _cache[key] = f(arg)

        return _cache[key]

    return decorated

def memoize(f):
    """Memoize any function."""

    def decorated(*args):
        key = (f, pickle.dumps(args))
        if key not in _cache:
            _cache[key] = f(*args)

        return _cache[key]

    return decorated

def longest_common_subsequence(left, right):
    '''
    Given two lists, `left` and `right`, return their longest common subsequence.

    @example
        longest_common_subsequence([10,20,30,40], [20,25,40,100]) == [20,40]

    '''
    pass

def longest_increasing_subsequence(array):
    pass
