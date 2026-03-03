from typing import Optional, List, Callable, Any

EMPTY_TREE = None


class TreeNode:
    @staticmethod
    def from_array(array: Optional[List]) -> Optional['TreeNode']:
        if array is None or len(array) == 0:
            return EMPTY_TREE

        array = array + [None] * (3 - len(array))
        value, left, right = array

        return TreeNode(value, TreeNode.from_array(left), TreeNode.from_array(right))

    def __init__(self, value: Any, left: Optional['TreeNode'] = EMPTY_TREE, right: Optional['TreeNode'] = EMPTY_TREE):
        self.value = value
        self.left = left
        self.right = right

    def __str__(self) -> str:
        return tree_to_string_vertical(self)

    def __repr__(self) -> str:
        return tree_to_string_vertical(self)


def is_empty(tree: Optional[TreeNode]) -> bool:
    return tree is EMPTY_TREE


def is_leaf(tree: TreeNode) -> bool:
    return is_empty(tree.left) and is_empty(tree.right)


def destruct(tree: TreeNode) -> tuple:
    return tree.value, tree.left, tree.right


def tree_to_string(tree: Optional[TreeNode], pointer: str = '', padding: str = '') -> str:
    if is_empty(tree):
        return ''

    value, left, right = destruct(tree)

    result = f" {padding}{pointer}{value}\n"
    right_pointer = ' └── '
    left_pointer = right_pointer if is_empty(right) else ' ├── '

    result += subtree_to_string(left, left_pointer,
                                padding, not is_empty(right))
    result += subtree_to_string(right, right_pointer, padding, False)

    return result


def subtree_to_string(tree: Optional[TreeNode], pointer: str = '', padding: str = '', has_right_sibling: bool = False) -> str:
    if is_empty(tree):
        return ''

    value, left, right = destruct(tree)

    result = f"{padding}{pointer}{value}\n"
    right_pointer = ' └── '
    left_pointer = right_pointer if is_empty(right) else ' ├── '

    new_padding = ' │  ' if has_right_sibling else '    '

    result += subtree_to_string(left, left_pointer,
                                padding + new_padding, not is_empty(right))
    result += subtree_to_string(right, right_pointer,
                                padding + new_padding, False)

    return result


def tree_to_string_vertical(tree: Optional[TreeNode]) -> str:
    if is_empty(tree):
        return ''
    lines, _ = _build_vertical(tree)
    return '\n'.join(line.rstrip() for line in lines)


def _build_vertical(tree):
    if is_empty(tree):
        return [], 0

    label = str(tree.value)

    if is_leaf(tree):
        return [label], len(label) // 2

    left_lines, left_root = _build_vertical(tree.left)
    right_lines, right_root = _build_vertical(tree.right)

    has_left = len(left_lines) > 0
    has_right = len(right_lines) > 0

    if has_left and has_right:
        return _combine_two_subtrees(label, left_lines, left_root, right_lines, right_root)
    elif has_left:
        return _combine_left_child(label, left_lines, left_root)
    else:
        return _combine_right_child(label, right_lines, right_root)


def _combine_two_subtrees(label, left_lines, left_root, right_lines, right_root):
    gap = 3
    left_w = len(left_lines[0])
    right_w = len(right_lines[0])

    left_anchor = left_root
    right_anchor = left_w + gap + right_root
    mid = (left_anchor + right_anchor) // 2

    label_start = mid - len(label) // 2
    left_pad = max(0, -label_start)
    total_width = max(left_w + gap + right_w, label_start + len(label)) + left_pad

    left_anchor += left_pad
    right_anchor += left_pad
    mid += left_pad
    label_start += left_pad

    parent_line = (' ' * label_start + label).ljust(total_width)
    conn = (' ' * left_anchor + '┌'
            + '─' * (mid - left_anchor - 1) + '┴'
            + '─' * (right_anchor - mid - 1) + '┐').ljust(total_width)

    children = []
    for i in range(max(len(left_lines), len(right_lines))):
        l = left_lines[i] if i < len(left_lines) else ' ' * left_w
        r = right_lines[i] if i < len(right_lines) else ' ' * right_w
        children.append((' ' * left_pad + l + ' ' * gap + r).ljust(total_width))

    return [parent_line, conn] + children, mid


def _combine_left_child(label, child_lines, child_root):
    """Left child: child subtree on the left, parent to the right."""
    child_w = len(child_lines[0])
    gap = 1
    parent_start = child_w + gap
    parent_center = parent_start + len(label) // 2
    w = parent_start + len(label)

    parent_line = (' ' * parent_start + label).ljust(w)
    conn = (' ' * child_root + '┌' + '─' * (parent_center - child_root - 1) + '┘').ljust(w)
    children = [line.ljust(w) for line in child_lines]

    return [parent_line, conn] + children, parent_center


def _combine_right_child(label, child_lines, child_root):
    """Right child: parent on the left, child subtree shifted to the right."""
    child_w = len(child_lines[0])
    gap = 1
    child_shift = len(label) + gap
    parent_center = len(label) // 2
    child_root_new = child_shift + child_root
    w = child_shift + child_w

    parent_line = label.ljust(w)
    conn = (' ' * parent_center + '└' + '─' * (child_root_new - parent_center - 1) + '┐').ljust(w)
    children = [(' ' * child_shift + line).ljust(w) for line in child_lines]

    return [parent_line, conn] + children, parent_center


def do_nothing(*args, **kwargs):
    pass


def tree_dfs(tree: Optional[TreeNode], callback: Callable = do_nothing):
    if is_empty(tree):
        return

    callback(tree)
    tree_dfs(tree.left, callback)
    tree_dfs(tree.right, callback)


def tree_dfs_in_order(tree: Optional[TreeNode], callback: Callable = do_nothing):
    if is_empty(tree):
        return

    tree_dfs_in_order(tree.left, callback)
    callback(tree)
    tree_dfs_in_order(tree.right, callback)


def fold_tree_r(tree: Optional[TreeNode], fn: Callable, init: Any):
    if tree is None:
        return init

    value, left, right = destruct(tree)
    return fn(value, fold_tree_r(right, fn, fold_tree_r(left, fn, init)))


def fold_tree_l(tree: Optional[TreeNode], fn: Callable, init: Any):
    if tree is None:
        return init

    value, left, right = destruct(tree)
    return fold_tree_l(right, fn, fold_tree_l(left, fn, fn(init, value)))


def tree_bfs(tree: Optional[TreeNode], callback: Callable = do_nothing):
    queue = [tree]

    while queue:
        current = queue.pop(0)

        if is_empty(current):
            continue

        callback(current)
        queue.append(current.left)
        queue.append(current.right)


def tree_dfs_iterative(tree: Optional[TreeNode], callback: Callable = do_nothing):
    stack = [tree]

    while stack:
        current = stack.pop()

        if is_empty(current):
            continue

        callback(current)
        stack.append(current.right)
        stack.append(current.left)


def max_depth(tree: Optional[TreeNode]) -> int:
    if is_empty(tree):
        return -1

    value, left, right = destruct(tree)
    return 1 + max(max_depth(left), max_depth(right))


def tree_sum(tree: Optional[TreeNode]) -> int:
    if is_empty(tree):
        return 0

    value, left, right = destruct(tree)

    return value + tree_sum(left) + tree_sum(right)


def tree_filter(tree: Optional[TreeNode], predicate: Callable) -> Optional[TreeNode]:
    if is_empty(tree):
        return EMPTY_TREE

    value, left, right = destruct(tree)

    filtered_left = tree_filter(left, predicate)
    filtered_right = tree_filter(right, predicate)

    if predicate(value):
        return TreeNode(value, filtered_left, filtered_right)
    else:
        return tree_merge(filtered_left, filtered_right)


def invert_tree(tree: Optional[TreeNode]) -> Optional[TreeNode]:
    if is_empty(tree):
        return EMPTY_TREE

    value, left, right = destruct(tree)

    inverted_left = invert_tree(right)
    inverted_right = invert_tree(left)

    return TreeNode(value, inverted_left, inverted_right)


def tree_merge(left_tree: Optional[TreeNode], right_tree: Optional[TreeNode]) -> Optional[TreeNode]:
    if is_empty(left_tree):
        return right_tree

    if is_empty(right_tree):
        return left_tree

    left_value, left_left, left_right = destruct(left_tree)
    right_value, right_left, right_right = destruct(right_tree)

    merged_left = tree_merge(left_left, right_left)
    merged_right = tree_merge(left_right, right_right)

    return TreeNode(left_value + right_value, merged_left, merged_right)


if __name__ == "__main__":
    example_tree = TreeNode.from_array([
        100,
        [50,
         [-100,
          [-250],
          [30]
          ],
         [75]
         ],
        [150,
         [125],
         [250]
         ]
    ])

    left_only = TreeNode(10, TreeNode(20, TreeNode(30)))
    print('Tree (horizontal):')
    print(example_tree)

    print('Tree (vertical):')
    print(tree_to_string_vertical(left_only))
    print()

    print('In-order DFS:')
    tree_dfs_in_order(example_tree, lambda node: print(node.value))

    print('sum:', fold_tree_r(example_tree, lambda x, y: x + y, 0))
