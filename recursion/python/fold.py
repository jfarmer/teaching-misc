from lists import is_empty, unprepend

def foldr(lst, fn, initial):
    if is_empty(lst):
        return initial

    first, rest = unprepend(lst)

    return fn(first, foldr(rest, fn, initial))

def foldl(lst, fn, initial):
    if is_empty(lst):
        return initial

    first, rest = unprepend(lst)

    return foldl(rest, fn, fn(initial, first))
