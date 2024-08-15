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

def add(x, y):
    return x + y

# Given a linked list of numbers, return their sum
def sum_list(lst):
    # Case: List is empty
    if is_empty(lst):
        return 0

    # Case: List is non-empty
    first, rest = unprepend(lst)

    return add(first, sum_list(rest))
    # return first + sum_list(rest)

def multiply(x, y):
    return x * y

# Given a list of numbers, return their product
def product(lst):
    if is_empty(lst):
        return _____

    first, rest = unprepend(lst)

    return _____

# Any function on a linked list can be written using this template,
# which reflects the inherently recursive nature of a linked list
def template(lst):
    if is_empty(lst):
        return _____

    first, rest = unprepend(lst)

    return _____

# Given a list of numbers, return the largest number in the list
def largest(lst):
    if is_empty(lst):
        return _____

    first, rest = unprepend(lst)

    return _____

# Given a list, return a new list that contains the same
# values as the input list but in reverse order
def reverse(lst):
    if is_empty(lst):
        return _____

    first, rest = unprepend(lst)

    return _____

# Given a value and a list, return a new list with the same values as
# the input list followed by the input value, e.g.,
#
# append(99, 10 -> 20 -> 30) # => 10 -> 20 -> 30 -> 99
def append(value, lst):
    if is_empty(lst):
        return _____

    first, rest = unprepend(lst)

    return _____

# Given a list and a function, return a new list that contains only
# those elements for which the function returns True
#
# For example, this selects only the even numbers
#   # 5 -> 10 -> 11 -> 12
#   lst = Node.from_list([5,10,11,12])
#   select(lambda n: n % 2 == 0, lst) # => 10 -> 12
def select(lst, func):
    if is_empty(lst):
        return _____

    first, rest = unprepend(lst)

    return _____

# Other functions to write:
#  map(func, lst)    # Apply fn to every element of lst
#  every(func, lst)  # Returns True is func returns True for EVERY element of lst, False otherwise
#  some(func, lst)   # Returns True is func returns True for ANY element of lst, False otherwise
#  maxBy(func, lst)  # Returns value x of lst for which func(x) is largest


lst = Node.from_list([10, 20, 30, -1])

print('list:    ', lst)
print('sum:     ', sum_list(lst))
# print('product: ', product(lst))
# print('largest: ', largest(lst))
# print('reverse: ', reverse(lst))
# print('append:  ', append(200, lst))
# print('odds:    ', select(lst, lambda x: x % 2 != 0))
# print('double:  ', map(lst, lambda x: x * 2))
# print('everyNeg:', every(lst, lambda x: x < 0))
# print('someNeg: ', some(lst, lambda x: x < 0))
# print('maxByAbs:', maxBy(lst, lambda x: abs(x)))
