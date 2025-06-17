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


import sys
import functools
import inspect
from io import StringIO

def print_call_tree(tab_width=2, only_args=False, show_level=False, indent_str=' ', use_colors=False, output_format="tree", show_arg_names=False):
    indentation_level = 0
    original_stdout = sys.stdout
    dot_nodes = []
    dot_edges = []
    node_counter = 0
    parent_stack = []

    def decorator(fn):
        signature = inspect.signature(fn)
        params = [p[0] for p in signature.parameters.items()]

        @functools.wraps(fn)
        def wrapper(*args, **kwds):
            nonlocal indentation_level, node_counter

            if output_format == "tree":
                # Original tree format logic
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

                # Ensure stdout works and then immediately disable
                sys.stdout = original_stdout
                print(fn_call)
                sys.stdout = StringIO()  # Send to a string buffer

                indentation_level += 1
                result = fn(*args)
                indentation_level -= 1

                # Restore stdout
                sys.stdout = original_stdout

                return result

            elif output_format == "dot":
                # DOT format logic
                current_node_id = node_counter
                node_counter += 1


                # Create node label
                if only_args:
                    if show_arg_names:
                        arg_list = "\\l".join(f"{p}={v}" for (p,v) in zip(params, args)) + "\\l"
                    else:
                        arg_list = "\\l".join([repr(arg) for arg in args]) + "\\l"
                    node_label = f"{arg_list}"
                else:
                    arg_list = " ".join([repr(arg) for arg in args])
                    node_label = f"{fn.__name__}({arg_list})"

                # Add node to dot_nodes
                dot_nodes.append(f'  {current_node_id} [label="{node_label}"];')

                # Add edge from parent if there is one
                if parent_stack:
                    parent_id = parent_stack[-1]
                    dot_edges.append(f'  {parent_id} -> {current_node_id};')

                parent_stack.append(current_node_id)
                sys.stdout = StringIO()  # Send to a string buffer
                result = fn(*args)
                sys.stdout = original_stdout
                parent_stack.pop()

                # If this is the root call (empty parent_stack), output the complete DOT graph
                if not parent_stack:
                    # sys.stdout = original_stdout
                    print("digraph CallTree {")
                    print('  node [nojustify=true, shape=circle, style=filled, fillcolor=pink, fontcolor=black, fontsize=14, width=2.0, height=2.0, fontname="Courier"];')
                    print('  edge [len=2.0, minlen=1];')

                    for node in dot_nodes:
                        print(node)
                    for edge in dot_edges:
                        print(edge)
                    print("}")

                    # Reset for next complete tree
                    dot_nodes.clear()
                    dot_edges.clear()
                    node_counter = 0

                return result

        return wrapper
    return decorator
