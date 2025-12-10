from lists import Node, is_empty, unprepend, prepend, EMPTY_LIST
from append import append

from fold import foldr, foldl


def reverse_left(lst, result=EMPTY_LIST):
    if is_empty(lst):
        return result

    first, rest = unprepend(lst)

    return reverse_left(rest, prepend(first, result))


def reverse_right(lst):
    if is_empty(lst):
        return EMPTY_LIST

    first, rest = unprepend(lst)

    return append(first, reverse_right(rest))


def reverse_foldr(lst):
    return foldr(lst, append, EMPTY_LIST)


def reverse_foldl(lst):
    return foldl(lst, lambda result, item: prepend(item, result), EMPTY_LIST)
