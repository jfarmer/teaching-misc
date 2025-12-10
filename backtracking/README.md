# Backtracking

## Agenda

1. Introductions (brief!)
2. Calibration
3. The Maze Metaphor + DFS
4. Exercises

## Links

- Maze: <https://bit.ly/jfarmer-maze>
- Permutations: <https://bit.ly/jfarmer-permutation-tree>

```text
+   +----------+---+
| S...........A| C |
| . -----------+ . |
| ....B........... |
+---- . +----+-----+
|D....E.....F|L... |
+---+ . +----+-- . |
| G | . | ...... H |
| . | . | . +--+ . |
| ....I...J...K| X |
+--------------+   +
```

## DFS

Every backtracking problem is a depth-first search of *some* tree. Many trees can represent the same problem. How fast backtracking runs depends on your choice of tree to represent the problem.

If you have a tree which represents the backtracking problem then you "solve" it by writing a program whose call tree looks like that tree. In other words, if your program's call tree mirrors the "solution tree" then, congrats, you've solved it!

That's the name of the game: find a suitable tree and write a program that represents the same tree via its call tree.

## The Gospel of Tree

1. Find a tree, any tree, that represents the problem
2. Translate that tree into code as literally as possible, like a dutiful 8th-century religious scribe
3. Optimize or make idiomatic

Folks tackling novel backtracking problems often get stuck or waste time or trip themselves up by trying to do all 3 at once. Optimizations (3) are important, for example, but there are 4-5 optimizations that account for 90% of every optimization you see in backtracking.

If you have a tree that represents the problem/solution and program's call tree mirrors it then your code will work. That means if your code isn't working, either your tree is wrong or your code doesn't match it faithfully.

If you're explicit about the tree, e.g., you've drawn some or all of it, it's very hard to believe the tree is correct when it's not. So a broken program USUALLY means your code isn't a faithful transcription.

You want to get visibility into the ACTUAL CALL TREE and compare it to your intended tree. Check out the [print_call_tree.py](print_call_tree.py) file for a `@print_call_tree` decorator which does just that.

## Permutations

List all permutations of the string: ABC

```text
ABC
ACB
BAC
BCA
CAB
CBA
```

How about all permutations of ABCD? To make pattern clearer, let's say the string is QABC

```text
QABC
QACB
QBAC
QBCA
QCAB
QCBA
```

## Trees

Let's say we have generic `Tree` where each node has a value and 0 or more children:

```js
class Tree {
  constructor(value, children = []) {
    this.value = value;
    this.children = children;
  }

  isLeaf() {
    return children.length === 0;
  }
}

// Just a helper function
function tree(value, children = []) {
  return new Tree(value, children);
}
```

Here is a DFS traversal of the tree:

```js
function dfs(root, callback) {
  callback(root);

  for (let child of root.children) {
    dfs(child, callback);
  }
}

let root = tree(100, [
  tree(200, [
    tree(300),
    tree(310)
  ]),
  tree(210, [
    tree(320, [
      tree(400)
    ]),
    tree(330),
    tree(340)
  ]),
  tree(220, [
    tree(350)
  ]),
]);

dfs(root, node => console.log(node.value));
```

## Pseudocode

```text
// P is the data
// c is a solution candidate
procedure backtrack(P, c) is
  if reject(P, c) then return
  if accept(P, c) then output(P, c)
  s ← first(P, c)
  while s ≠ NULL do
    backtrack(P, s)
    s ← next(P, s)
```
