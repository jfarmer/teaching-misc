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
