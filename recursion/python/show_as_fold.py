"""
@show_as_fold decorator

Parses a recursive function following the template pattern and prints
the equivalent foldr representation.

Example:

    @show_as_fold
    def sum_list(lst):
        if is_empty(lst):
            return 0
        first, rest = unprepend(lst)
        return first + sum_list(rest)

    # Prints:
    # sum_list = foldr(λfirst, rec. first + rec, 0)
"""

import ast
import inspect
import functools


class TemplateError(Exception):
    pass


def expr_to_string(node, recursive_call_name=None):
    """Convert an AST expression node to a readable string."""
    if isinstance(node, ast.Constant):
        return repr(node.value)

    elif isinstance(node, ast.Name):
        if node.id == recursive_call_name:
            return "rec"
        return node.id

    elif isinstance(node, ast.BinOp):
        left = expr_to_string(node.left, recursive_call_name)
        right = expr_to_string(node.right, recursive_call_name)
        op = binop_to_string(node.op)
        return f"{left} {op} {right}"

    elif isinstance(node, ast.Call):
        func_name = get_call_name(node)

        # Check if this is the recursive call
        if func_name == recursive_call_name:
            return "rec"

        args = [expr_to_string(arg, recursive_call_name) for arg in node.args]
        return f"{func_name}({', '.join(args)})"

    elif isinstance(node, ast.IfExp):
        test = expr_to_string(node.test, recursive_call_name)
        body = expr_to_string(node.body, recursive_call_name)
        orelse = expr_to_string(node.orelse, recursive_call_name)
        return f"{body} if {test} else {orelse}"

    elif isinstance(node, ast.Compare):
        left = expr_to_string(node.left, recursive_call_name)
        ops = [cmpop_to_string(op) for op in node.ops]
        comparators = [expr_to_string(c, recursive_call_name) for c in node.comparators]
        result = left
        for op, comp in zip(ops, comparators):
            result += f" {op} {comp}"
        return result

    elif isinstance(node, ast.UnaryOp):
        operand = expr_to_string(node.operand, recursive_call_name)
        op = unaryop_to_string(node.op)
        return f"{op}{operand}"

    elif isinstance(node, ast.Attribute):
        value = expr_to_string(node.value, recursive_call_name)
        return f"{value}.{node.attr}"

    elif isinstance(node, ast.Subscript):
        value = expr_to_string(node.value, recursive_call_name)
        slice_val = expr_to_string(node.slice, recursive_call_name)
        return f"{value}[{slice_val}]"

    elif isinstance(node, ast.Tuple):
        elts = [expr_to_string(e, recursive_call_name) for e in node.elts]
        return f"({', '.join(elts)})"

    elif isinstance(node, ast.List):
        elts = [expr_to_string(e, recursive_call_name) for e in node.elts]
        return f"[{', '.join(elts)}]"

    elif isinstance(node, ast.BoolOp):
        op = boolop_to_string(node.op)
        values = [expr_to_string(v, recursive_call_name) for v in node.values]
        return f" {op} ".join(values)

    else:
        return f"<{node.__class__.__name__}>"


def binop_to_string(op):
    ops = {
        ast.Add: "+",
        ast.Sub: "-",
        ast.Mult: "*",
        ast.Div: "/",
        ast.FloorDiv: "//",
        ast.Mod: "%",
        ast.Pow: "**",
        ast.BitOr: "|",
        ast.BitAnd: "&",
        ast.BitXor: "^",
    }
    return ops.get(type(op), "?")


def cmpop_to_string(op):
    ops = {
        ast.Eq: "==",
        ast.NotEq: "!=",
        ast.Lt: "<",
        ast.LtE: "<=",
        ast.Gt: ">",
        ast.GtE: ">=",
        ast.Is: "is",
        ast.IsNot: "is not",
        ast.In: "in",
        ast.NotIn: "not in",
    }
    return ops.get(type(op), "?")


def unaryop_to_string(op):
    ops = {
        ast.Not: "not ",
        ast.USub: "-",
        ast.UAdd: "+",
        ast.Invert: "~",
    }
    return ops.get(type(op), "?")


def boolop_to_string(op):
    ops = {
        ast.And: "and",
        ast.Or: "or",
    }
    return ops.get(type(op), "?")


def get_call_name(node):
    """Extract function name from a Call node."""
    if isinstance(node.func, ast.Name):
        return node.func.id
    elif isinstance(node.func, ast.Attribute):
        return node.func.attr
    return None


def analyze_template(fn):
    """
    Parse function and extract base case + combine operation.

    Returns (func_name, base_expr, combine_expr, first_name) or raises TemplateError.
    """
    source = inspect.getsource(fn)

    # Handle indented source (e.g., from decorators)
    lines = source.split('\n')
    min_indent = min(len(line) - len(line.lstrip()) for line in lines if line.strip())
    dedented = '\n'.join(line[min_indent:] for line in lines)

    tree = ast.parse(dedented)
    func_def = tree.body[0]

    if not isinstance(func_def, ast.FunctionDef):
        raise TemplateError("Expected a function definition")

    func_name = func_def.name
    body = func_def.body

    # Expected structure:
    # 1. if is_empty(lst): return <base>
    # 2. first, rest = unprepend(lst)
    # 3. return <combine>

    if len(body) < 3:
        raise TemplateError("Function body too short for template")

    # Check first statement: if is_empty(...)
    if_stmt = body[0]
    if not isinstance(if_stmt, ast.If):
        raise TemplateError("Expected `if is_empty(lst):` as first statement")

    # Extract base case
    if len(if_stmt.body) != 1 or not isinstance(if_stmt.body[0], ast.Return):
        raise TemplateError("Expected single return statement in base case")

    base_node = if_stmt.body[0].value

    # Check second statement: first, rest = unprepend(lst)
    assign_stmt = body[1]
    if not isinstance(assign_stmt, ast.Assign):
        raise TemplateError("Expected `first, rest = unprepend(lst)`")

    if not isinstance(assign_stmt.targets[0], ast.Tuple):
        raise TemplateError("Expected tuple unpacking: `first, rest = ...`")

    target_tuple = assign_stmt.targets[0]
    if len(target_tuple.elts) != 2:
        raise TemplateError("Expected exactly two targets: `first, rest = ...`")

    first_name = target_tuple.elts[0].id
    rest_name = target_tuple.elts[1].id

    # Check third statement: return <combine>
    return_stmt = body[2]
    if not isinstance(return_stmt, ast.Return):
        raise TemplateError("Expected return statement for combine case")

    combine_node = return_stmt.value

    return func_name, base_node, combine_node, first_name


def show_as_fold(fn):
    """
    Decorator that prints the foldr equivalent of a template-following function.
    """
    try:
        func_name, base_node, combine_node, first_name = analyze_template(fn)

        base_str = expr_to_string(base_node, func_name)
        combine_str = expr_to_string(combine_node, func_name)

        print(f"{func_name} = foldr(λ{first_name}, rec. {combine_str}, {base_str})")

    except TemplateError as e:
        print(f"Could not analyze {fn.__name__}: {e}")

    except Exception as e:
        print(f"Error analyzing {fn.__name__}: {e}")

    @functools.wraps(fn)
    def wrapper(*args, **kwargs):
        return fn(*args, **kwargs)

    return wrapper


# =============================================================================
# Demo
# =============================================================================

if __name__ == "__main__":
    # Linked list infrastructure (minimal)
    EMPTY_LIST = None

    class Node:
        def __init__(self, value, next=None):
            self.value = value
            self.next = next

        @staticmethod
        def from_list(lst):
            if not lst:
                return EMPTY_LIST
            return Node(lst[0], Node.from_list(lst[1:]))

        def __str__(self):
            if self.next is None:
                return f"{self.value} -> ()"
            return f"{self.value} -> {self.next}"

    def is_empty(lst):
        return lst is EMPTY_LIST

    def unprepend(lst):
        return lst.value, lst.next

    def prepend(val, lst):
        return Node(val, lst)

    # Examples
    print("=== show_as_fold examples ===\n")

    @show_as_fold
    def sum_list(lst):
        if is_empty(lst):
            return 0
        first, rest = unprepend(lst)
        return first + sum_list(rest)

    @show_as_fold
    def product(lst):
        if is_empty(lst):
            return 1
        first, rest = unprepend(lst)
        return first * product(rest)

    @show_as_fold
    def length(lst):
        if is_empty(lst):
            return 0
        first, rest = unprepend(lst)
        return 1 + length(rest)

    @show_as_fold
    def map_double(lst):
        if is_empty(lst):
            return EMPTY_LIST
        first, rest = unprepend(lst)
        return prepend(first * 2, map_double(rest))

    @show_as_fold
    def reverse(lst):
        if is_empty(lst):
            return EMPTY_LIST
        first, rest = unprepend(lst)
        return append(first, reverse(rest))

    @show_as_fold
    def largest(lst):
        if is_empty(lst):
            return float('-inf')
        first, rest = unprepend(lst)
        return max(first, largest(rest))

    @show_as_fold
    def every_positive(lst):
        if is_empty(lst):
            return True
        first, rest = unprepend(lst)
        return first > 0 and every_positive(rest)

    @show_as_fold
    def some_negative(lst):
        if is_empty(lst):
            return False
        first, rest = unprepend(lst)
        return first < 0 or some_negative(rest)

    # Test that functions still work
    print("\n=== Verify functions still work ===\n")
    test_list = Node.from_list([10, 20, 30])
    print(f"sum_list([10, 20, 30]) = {sum_list(test_list)}")
    print(f"product([10, 20, 30]) = {product(test_list)}")
    print(f"length([10, 20, 30]) = {length(test_list)}")
