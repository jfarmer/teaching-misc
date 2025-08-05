def fib(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fib(n - 1) + fib(n - 2)

def fib_top_down(n, _fib = None):
    if _fib is None:
        _fib = dict()

    if n in _fib:
        return _fib[n]

    if n == 0:
        _fib[n] = 0
        return _fib[n]

    elif n == 1:
        _fib[n] = 1
        return _fib[n]
    else:
        _fib[n] = fib_top_down(n - 1, _fib) + fib_top_down(n - 2, _fib)
        return _fib[n]

def fib_bottom_up(n):
    _fib = dict()

    for i in range(0, n + 1):
        if i == 0:
            _fib[i] = 0
            continue
        elif i == 1:
            _fib[i] = 1
            continue
        else:
            _fib[i] = _fib[i - 1] + _fib[i - 2]
            continue

    return _fib[n]

def fib_iter(n):
    _fib = [0,1]

    for _ in range(2, n + 1):
        _fib[0], _fib[1] = _fib[1], _fib[0] + _fib[1]

    return _fib[1]
