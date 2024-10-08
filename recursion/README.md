# Recursion

## Contents <!-- omit in toc -->

- [Goals](#goals)
- [Algorithms or data structures first](#algorithms-or-data-structures-first)
- [Exercises](#exercises)
  - [Sequence of Exercises](#sequence-of-exercises)
- [Recursive Data Types](#recursive-data-types)
  - [Linked Lists as Recursive Data Types](#linked-lists-as-recursive-data-types)
  - [Other Recursive Data Types](#other-recursive-data-types)
- [Problem-Solving Strategies](#problem-solving-strategies)

## Goals

Many folks feel like recursion is a more-convoluted way to solve a problem. It doesn't have any real benefit over iteration and makes things unnecessarily "mathematical". Maybe *you* don't feel that way, but many folks do.

I have three goals for this session:

1. Give you a new way of thinking about recursion (with link lists as an example)
2. Leave you with a template that you can use to solve *any* problem involving linked lists, recursively
3. Convince you that "thinking recursively" is worth it on its own terms and not just because you might be asked in an interview one day.

## Algorithms or data structures first

Data structures and algorithms (DSA) is typically adopt an algorithm-centric perspective. Data structures exist to make algorithms fast.

The truth is that they are two sides of the same coin and you can just as well take a data-structure-centric perspective. Every data structure has a shape and that shape pushes us towards certain ways of interacting with it and away from others.

This is the programming equivalent of "When in Rome, do as the Romans do." What is the "native language" of a linked list or a binary tree? What do our problems look like using data structures' native language?

We're going to take this shape-centric perspective.

## Exercises

Read a bit below on [recursive data types](#recursive-data-types) and then take a look at some of the other files.

- To see what I typically cover in a session, look at <code>[coderpad.js](./coderpad.js)</code>.
- For a fuller set of exercises, complete the unwritten functions in <code>[lists.skeleton.js](./lists.skeleton.js)</code> (JavaScript) or <code>[lists.skeleton.py](./lists.skeleton.py)</code> (Python).

### Sequence of Exercises

The structure of the exercises goes like this:

1. We have a basic linked list implementation
1. Make sure you understand how `sum` is calculating the sum of a linked list
1. There's a fill-in-the-blank template that can be used to implement *any* linked list algorithm you'd be interested in
1. Use that template to implement `product`, `largest`, `reverse`, and `append`.

This is `sum` and the template:

```js
function add(x, y) {
  return x + y;
}

/**
 * Given a list of numbers, return their sum.
 */
function sum(list) {
  // List<Int> := EmptyList
  if (isEmpty(list)) {
    return 0;
  }

  // List<Int> := prepend(Int, List<Int>)
  let [first, rest] = unprepend(list);

  return add(first, sum(rest));
}

function template(list) {
  if (isEmpty(list)) {
    return _____;
  }

  let [first, rest] = unprepend(list);

  return _____;
}


/**
 * Given a list of numbers, return their product, i.e.,
 * multiply them together.
 */
function product(list) {
  if (isEmpty(list)) {
    return _____;
  }

  let [first, rest] = unprepend(list);

  return _____;
}

let list = [10, 20, 30, -1];

console.log('list:    ', list);
console.log('sum:     ', sum(list));
// console.log('product: ', product(list));
```

## Recursive Data Types

If you think of "recursion" you probably think of recursive algorithms like Fibonacci, factorial, etc. But there's a way to think about *data structures* as recursive.

Linked lists are the paradigmatic recursive data type. They're the default linear data type in most functional language for a reason (e.g., in Scheme, Haskell, Clojure, etc.).

That makes "recursion" is the native language of a (linked) list, so to speak. If you can speak that language, solving list-related problems becomes much easier *even if your ultimate solution is iterative*.

Many data types you're familiar with have a natural recursive structure. See the Wikipedia page for [Recursive Data Type](https://en.wikipedia.org/wiki/Recursive_data_type).

IMO, going from a recursive solution to an iterative solution is much easier than the going the other direction.

### Linked Lists as Recursive Data Types

Here's what it means for a `List` to be recursive. Although JavaScript doesn't care about types, it's easier to think about if we make the type contained in the list explicit. So `List<Int>` means "a list of integers".

```text
// A list (of integers) is either:
//   1. The empty list, or
//   2. A value (integer) prepended to another (shorter) list
type List<Int> := EmptyList
type List<Int> := prepend(Int, List<Int>)
```

There's nothing special about `Int` here, it could be any type.

There are a few ways to read this:

1. Every list is either empty or a value prepended to another (shorter) list
1. If a list isn't empty, it contains another list (like a recursive fractal)
1. As a recipe: any list can be constructed by some number of `prepend` operations applied to an empty list.

```js
// Here [10, 20] represents a linked list that looks like 10 -> 20
// In a language like JS it's easier to illustrate w/ array syntax

         [462] == prepend(462, [])

      [10, 20] == prepend(10, [20])
               == prepend(10, prepend(20, []))

[-90, 107, 42] == prepend(-90, prepend([107, 42]))
               == prepend(-90, prepend(107, [42]))
               == prepend(-90, prepend(107, prepend(42, [])))
```

### Other Recursive Data Types

Other recursive data types include trees and the natural numbers:

```text
// A binary tree is either:
//   1. The empty tree, or
//   2. A value plus two (smaller) left + right sub-trees
type BinaryTree<Int> := EmptyTree
type BinaryTree<Int> := Node(Int, BinaryTree<Int>, BinaryTree<Int>)

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
         := successor(Nat)
         := Nat + 1
```

The fact that the natural numbers have a recursive structure is why you can write recursive functions like Fibonacci and factorial.

What this recursive definition says is that you can construct any natural number by starting at `0` and repeatedly taking the `successor`. For example,

```text
1 == successor(0)
2 == successor(successor(0))
5 == successor(successor(successor(successor(successor(0)))))
```

## Problem-Solving Strategies

Here are some helpful problem-solving strategies:

1. Concretize the situation by thinking of a pile of index cards w/ numbers on them. Something like `first + sum(rest)` means "the first number in the pile plus the sum of the rest of the numbers".

1. If you don't know what the answer should be for the empty list, think about how to get the function working with a 1-element linked list. That will usually tell you.

   For example, `product([30])` should be `30`, but the recursive definition also says that it should be `30 * product([])`. Basic algebra tells us that if `product([])` has a value then that value must be `1`.

1. "Play legos" by ensuring the types line up. For example, `largest(list)` wants to take a linked list as an argument. The only lists you have a reference to are `list` and `rest`. The recursive call can't be `largest(list)` because that'd create an infinite loop, so the recursive call *must* be `largest(rest)` by process of elimination.

   Because we've handled the base case, `largest(rest)` will terminate. How can we use that result to answer the question for the entire list?

1. Every non-empty list is constructed by repeatedly prepending values to the empty list. That is, it looks like

   ```js
   // List is 10 -> 20 -> 30 -> EmptyList
   prepend(10, prepend(20, prepend(30, EMPTY_LIST)));
   ```

   Whatever we replace `EMPTY_LIST` with is the base case, and what we replace `prepend` with is the recursive case. For example,

   ```js
   prepend(10, prepend(20, prepend(30, EMPTY_LIST)));

   // sum of list, replace prepend with add and EMPTY_LIST with 0
   add(10, add(20, add(30, 0)));

   // product of list, replace prepend with multiply and EMPTY_LIST with 1
   multiply(10, multiply(20, multiply(30, 1)));
   ```
