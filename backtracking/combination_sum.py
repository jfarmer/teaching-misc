# def combination_sum_print(candidates, target, combination=None):
#     if combination is None:
#         combination = []

#     if target == 0:
#         print(combination)
#         return

#     if target < 0:
#         return

#     for candidate in candidates:
#         combination_sum_print(candidates, target - candidate, combination + [candidate])

def combination_sum_print(summands, target, results = None):
    if results is None:
        results = []

    if target < 0:
        return

    if target == 0:
        print(results)
        return

    for i in range(len(summands)):
        combination_sum_print(summands[i:], target - summands[i], results + [summands[i]])

def combination_sum_print_ref(summands, target, idx = 0, results = None):
    if results is None:
        results = []

    if target < 0:
        return

    if target == 0:
        print(results)
        return

    for i in range(idx, len(summands)):
        combination_sum_print_ref(summands, target - summands[i], idx + i, results + [summands[i]])

def combination_sum_ref_mut(summands, target, idx = 0, results = None):
    if results is None:
        results = []

    if target < 0:
        return

    if target == 0:
        print(results)
        return

    for i in range(idx, len(summands)):
        results.append(summands[i])
        combination_sum_ref_mut(summands, target - summands[i], idx + i, results)
        results.pop()

def combination_sum_collect(candidates, target, combination=None):
    if combination is None:
        combination = []

    if target == 0:
        return [combination]

    if target < 0:
        return []

    results = []
    for candidate in candidates:
        sub_results = combination_sum_collect(candidates, target - candidate, combination + [candidate])
        results.extend(sub_results)

    return results

def combination_sum_print_no_duplicates(candidates, target, start_idx=0, combination=None):
    if combination is None:
        combination = []

    if target == 0:
        print(combination)
        return

    if target < 0:
        return

    for i in range(start_idx, len(candidates)):
        candidate = candidates[i]
        combination_sum_print_no_duplicates(candidates, target - candidate, i, combination + [candidate])

def combination_sum_collect_no_duplicates(candidates, target, start_idx=0, combination=None):
    if combination is None:
        combination = []

    if target == 0:
        return [combination]

    if target < 0:
        return []

    results = []
    for i in range(start_idx, len(candidates)):
        candidate = candidates[i]
        sub_results = combination_sum_collect_no_duplicates(candidates, target - candidate, i, combination + [candidate])
        results.extend(sub_results)

    return results

def combination_sum_print_optimized(candidates, target, start_idx=0, combination=None):
    if combination is None:
        combination = []

    if target == 0:
        print(list(combination))
        return

    if target < 0:
        return

    for i in range(start_idx, len(candidates)):
        candidate = candidates[i]
        combination.append(candidate)
        combination_sum_print_optimized(candidates, target - candidate, i, combination)
        combination.pop()

def combination_sum_collect_optimized(candidates, target, start_idx=0, combination=None, results=None):
    if combination is None:
        combination = []
    if results is None:
        results = []

    if target == 0:
        results.append(list(combination))
        return

    if target < 0:
        return

    for i in range(start_idx, len(candidates)):
        candidate = candidates[i]
        combination.append(candidate)
        combination_sum_collect_optimized(candidates, target - candidate, i, combination, results)
        combination.pop()

    return results

# Test examples
example_candidates1 = [2, 3, 6, 7]
example_target1 = 7

example_candidates2 = [2, 3, 5]
example_target2 = 8

example_candidates3 = [2]
example_target3 = 1

from pprint import pprint

combination_sum_print(example_candidates2, example_target2)

# print("Example 1 - No duplicates approach:")
# combination_sum_print_no_duplicates(example_candidates1, example_target1)

# print("\nExample 1 - Optimized approach:")
# combination_sum_print_optimized(example_candidates1, example_target1)

# print("\nExample 2 - Collected results:")
# results = combination_sum_collect_optimized(example_candidates2, example_target2)
# pprint(results)

# print("\nExample 3 - Empty result:")
# results = combination_sum_collect_optimized(example_candidates3, example_target3)
# pprint(results)
