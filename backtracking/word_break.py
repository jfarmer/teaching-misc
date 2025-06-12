def word_break_print(dictionary, s, path=None):
    if path is None:
        path = []
    
    if not s:
        print(" ".join(path))
        return
    
    for word in dictionary:
        if s.startswith(word):
            remaining = s[len(word):]
            word_break_print(dictionary, remaining, path + [word])

def word_break_collect(dictionary, s, path=None):
    if path is None:
        path = []
    
    if not s:
        return [path]
    
    results = []
    for word in dictionary:
        if s.startswith(word):
            remaining = s[len(word):]
            sub_results = word_break_collect(dictionary, remaining, path + [word])
            results.extend(sub_results)
    
    return results

def word_break_print_optimized(dictionary, s, idx=0, path=None):
    if path is None:
        path = []
    
    if idx == len(s):
        print(" ".join(path))
        return
    
    for word in dictionary:
        if idx + len(word) <= len(s) and s[idx:idx+len(word)] == word:
            path.append(word)
            word_break_print_optimized(dictionary, s, idx + len(word), path)
            path.pop()

def word_break_collect_optimized(dictionary, s, idx=0, path=None, results=None):
    if path is None:
        path = []
    if results is None:
        results = []
    
    if idx == len(s):
        results.append(list(path))
        return
    
    for word in dictionary:
        if idx + len(word) <= len(s) and s[idx:idx+len(word)] == word:
            path.append(word)
            word_break_collect_optimized(dictionary, s, idx + len(word), path, results)
            path.pop()
    
    return results

# Test examples
example_s1 = "catsanddog"
example_dict1 = ["cat", "cats", "and", "sand", "dog"]

example_s2 = "pineapplepenapple"
example_dict2 = ["apple", "pen", "applepen", "pine", "pineapple"]

from pprint import pprint

print("Example 1 - Basic approach:")
word_break_print(example_dict1, example_s1)

print("\nExample 1 - Optimized approach:")
word_break_print_optimized(example_dict1, example_s1)

print("\nExample 2 - Collected results:")
results = word_break_collect(example_dict2, example_s2)
for result in results:
    print(" ".join(result))