# Recursion

## Recursive Data Types

```text
// A list is either:
//   1. The empty list, or
//   2. A value prepended to another (shorter) list
type List<Int> := EmptyList
type List<Int> := prepend(Int, List<Int>)

// A binary tree is either:
//   1. The empty tree, or
//   2. A value plus two (smaller) left + right sub-trees
BinaryTree<Int> := EmptyTree
BinaryTree<Int> := Node(Int, BinaryTree<Int>, BinaryTree<Int>)

// A tree is either:
//   1. The empty tree, or
//   2. A value plus a list of (smaller) sub-trees called its "children"
type Tree<Int> := EmptyTree
type Tree<Int> := Node(Int, List<Tree<Int>>)

// Natural numbers are {0, 1, 2, 3, ...}
// A natural number is either:
//   1. Zero, or
//   2. One more than another (smaller) natural number
type Nat := 0
type Nat := increment(Nat)
```

"Recursion" is the native language of a list.
