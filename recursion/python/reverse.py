from lists import Node, is_empty, unprepend, prepend, EMPTY_LIST
from append import append

from fold import foldr, foldl


def reverse(lst, result=EMPTY_LIST):
    if is_empty(lst):
        return result

    first, rest = unprepend(lst)

    return reverse(rest, prepend(first, result))


def reverseBad(lst):
    if is_empty(lst):
        return EMPTY_LIST

    first, rest = unprepend(lst)

    return append(first, reverse(rest))


def reverse_foldr(lst):
    return foldr(lst, append, EMPTY_LIST)


def reverse_foldl(lst):
    return foldl(lst, lambda result, item: prepend(item, result), EMPTY_LIST)
