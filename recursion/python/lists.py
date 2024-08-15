EMPTY_LIST = None

class Node:
    # Helper method to generate a linked list from a list
    @staticmethod
    def from_list(lst):
        if len(lst) == 0:
            return EMPTY_LIST

        first, *rest = lst
        return prepend(first, Node.from_list(rest))

    def __init__(self, value, next=None):
        self.value = value
        self.next = next

    def __str__(self):
        # Use an external function so we can display empty lists as "()"
        # rather than "None"
        return list_to_string(self)

    def __repr__(self):
        return self.__str__()

def list_to_string(lst):
    if is_empty(lst):
        return '()'

    first, rest = unprepend(lst)
    return f'{first} -> {list_to_string(rest)}'

def is_empty(lst):
    return lst is EMPTY_LIST

def is_rest_empty(lst):
    return is_empty(lst) or is_empty(lst.next)

def prepend(val, lst):
    if is_empty(lst):
        return Node(val)

    return Node(val, lst)

def unprepend(lst):
    return lst.value, lst.next
