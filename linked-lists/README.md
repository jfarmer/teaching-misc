# Linked Lists

## Agenda

1. Introductions (brief!)
2. Calibration
3. Codin'

## Recursive Data Types

"Recursion" is the native language of a (linked) list because it's a recursive data type. Linked lists are a great way to build fluency with recursion and once you're fluent enough, most linked list problems have a simple recursive solution.

And, IMO, going from a recursive solution to an iterative solution is much easier than the going the other direction.

```text
// A list is either:
//   1. The empty list, or
//   2. A value prepended to another (shorter) list
type List<Int> := EmptyList
type List<Int> := prepend(Int, List<Int>)

// A binary tree is either:
//   1. The empty tree, or
//   2. A value plus two (smaller) left + right sub-trees
type BinaryTree<Int> := EmptyTree
type BinaryTree<Int> := Node(Int, BinaryTree<Int>, BinaryTree<Int>)
```

For example:

```js
// Here [10, 20] represends a linked list that looks like 10 -> 20
// In a language like JS it's easier to illustrate w/ array syntax

         [462] == prepend(462, [])

      [10, 20] == prepend(10, [20])
               == prepend(10, prepend(20, []))

[-90, 107, 42] == prepend(-90, prepend([107, 42]))
               == prepend(-90, prepend(107, [42]))
               == prepend(-90, prepend(107, prepend(42, [])))
```

## Two Approaches

If it's unclear what to do, there are two general approaches:

1. Restrict your vocabulary
2. Play Lego with types
