from lists import Node, is_empty, prepend, unprepend

def append(val, lst):
    if is_empty(lst):
        return Node(val)

    first, rest = unprepend(lst)

    return prepend(first, append(val, rest))
