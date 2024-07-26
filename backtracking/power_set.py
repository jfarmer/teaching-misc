def power_set(array):
    if not array:
        return [[]]

    [*head, last] = array

    with power_set(head) as minus_last:
        return minus_last + [sub + [last] for sub in minus_last]
