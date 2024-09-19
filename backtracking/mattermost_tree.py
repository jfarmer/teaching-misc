import functools


class TerminalColors:
    RED = '\033[91m'
    GREEN = '\033[92m'
    YELLOW = '\033[93m'
    BLUE = '\033[94m'
    MAGENTA = '\033[95m'
    CYAN = '\033[96m'
    RESET = '\033[0m'

    colors = [RED, MAGENTA, YELLOW, BLUE, CYAN, GREEN]


def print_call_tree(tab_width=2, only_args=False, show_level=False, indent_str=' ', use_colors=False):
    indentation_level = 0

    def decorator(fn):
        # Use wraps to preserve f.__name__
        @functools.wraps(fn)
        def wrapper(*args):
            nonlocal indentation_level

            # Use repr() rather than str() so, e.g., strings are quoted
            arg_list = ", ".join([repr(arg) for arg in args])
            indentation = indent_str * indentation_level * tab_width

            fn_call = indentation

            if show_level:
                fn_call = f'{indentation_level}  {fn_call}'

            if only_args:
                fn_call = f'{fn_call}({arg_list})'
            else:
                fn_call = f'{fn_call}{fn.__name__}({arg_list})'

            if use_colors:
                color_idx = indentation_level % len(TerminalColors.colors)
                color = TerminalColors.colors[color_idx]
                fn_call = f'{color}{fn_call}{TerminalColors.RESET}'

            print(fn_call)

            indentation_level += 1
            result = fn(*args)
            indentation_level -= 1

            return result

        return wrapper

    return decorator

class Solution(object):
    def subsets(self, nums):
        result = []
        n = len(nums)

        # DFS function to generate subsets.
        @print_call_tree(tab_width=2, use_colors=True, only_args=True, show_level=True)
        def dfs(start, path):
            # append the subset denoted by path
            result.append(path)

            # iterate over the indexes from 'start' to the end of the array
            for i in range(start, n):
                # dfs for the remaining part of the array
                dfs(i + 1, path + [nums[i]])

        # Generate subsets, starting with an empty path.
        dfs(0, [])
        return result

s = Solution()
s.subsets(['a', 'b','c'])
