from print_call_tree import print_call_tree

@print_call_tree(output_format="dot", only_args=True)
def word_break_print(dictionary, string, words=None):
    if words is None:
        words = []

    if len(string) == 0:
        print(" ".join(words))
        return

    for word in dictionary:
        if string.startswith(word):
            remaining = string[len(word):]
            word_break_print(dictionary, remaining, words + [word])

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

examples = [
    (["cat", "cats", "and", "sand", "dog"],
     "catsanddog"),
    (["apple", "pen", "applepen", "pine", "pineapple"],
     "pineapplepenapple")
]

for i, (dictionary, string) in enumerate(examples):
    # print("-"*10)
    # print(f"Example {i+1}")
    # print("Dict:  ", dictionary)
    # print("String:", string)
    # print("")
    word_break_print(dictionary, string)
