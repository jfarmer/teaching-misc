def rotate_right(array):
    if len(array) < 2:
        return array

    n = len(array) - 1
    last = array[n]

    for i in range(n, -1, -1):
        array[i] = array[i - 1]

    array[0] = last

    return array

def rotate_left_copy(array, k):
    d = k % len(array)
    return array[d:] + array[:d]

def rotate_right_copy(array, k):
    d = k % len(array)
    return array[-d:] + array[:-d]

def rotate_left_copy_iter(array, k):
    n = len(array)
    return [array[(i + k) % n] for i in range(n)]

def rotate_right_copy_iter(array, k):
    n = len(array)
    return [array[(i - k) % n] for i in range(n)]

def rotate_left_reverse(array, k):
    n = len(array)
    d = k % n

    reverse(array, 0, d - 1)
    reverse(array, d, n - 1)
    reverse(array, 0, n - 1)

    return array

def reverse(array, start, end):
    while start < end:
        array[start], array[end] = array[end], array[start]
        start += 1
        end -= 1

example = list('ABCDE')
print(rotate_right_copy(example, 2))
print(rotate_left_copy(example, 2))
# print(rotate_right_copy_iter(example, 2))
# print(rotate_left_copy(example, 2))
