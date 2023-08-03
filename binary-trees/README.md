# Binary Trees

## Outline

- A binary tree is a tree where each node has at MOST 2 children
- What would you call a tree where each node as as most 1 child?
  - You could call it a "unary" tree, but more commonly...
  - It's a linked list, so a linked list is a type of binary tree
- Folks often think putting data in a binary tree is enough to get `O(log n)` functionality, but that's not true.
  - If every linked list is a binary tree, how are you automatically getting `O(log n)`?
- Two things are required for a binary tree to be a performance gain:
  1. Information is arranged strategically in the tree
  2. The tree isn't far away from being a linked list
- Binary trees aren't enough. Binary search trees aren't enough. Balanced trees aren't enough. You need balanced binary search trees.
- I will show you why each isn't enough.
- If I want to store 3 numbers in a binary tree, how many distinct trees are there? Answer: 5
  - What about 4 numbers? Answer: 14
- The height of a binary tree is the longest path from the root to any leaf node, counting edges.
- Because the height of a tree is the length of the LONGEST path, it's an upper bound on the worst-case amount of time it takes to get from the root to a leaf.
  - That is, if a tree has height K, you never have to traverse more than K edges to get to any leaf node. There might be leaf nodes closer than K to the root, but none farther away.
- So if we have an algorithm that amounts to travesing to a leaf node, it'll never take longer than `O(height)`.
- It's the *height* that algorithms tend to care about, not the number of nodes *per se*.
- What are the largest and lowest heights among all the binary trees that store 4 notes? What about 3? What about 7? What about 15?
  - For N nodes, maximum height is N-1.
  - For N nodes, minimum height is floor(log2(N - 1))
- That's where the `O(log n)` comes in.
  - Note: When computer scientists say "log" they mean log-base-2
- A binary tree with N nodes is balanced if it's height is like `log2(N)`.
- By using a binary search tree (BST), we turn the problem of finding a particular value into a problem of traversing to a leaf node.
  - So searching in a BST is `O(height)`
- If the BST is balanced then `O(height)` is `O(log N)`.
- The issue w/ a BST is that if you insert the data in the first place possible, you might unbalance the tree.
  - Put another way, the shape of a BST is sensitive to the order in which you insert the data.
  - For example, if you insert data that's already sorted you will get a linked list.
- So the tricky thing about getting performance out of BSTs is inserting data in a way that keeps it balanced.
- In general, this type of balanced BST is called a [self-balancing binary search tree](https://en.wikipedia.org/wiki/Self-balancing_binary_search_tree).
- Two common approaches are:
  - [AVL Trees](https://en.wikipedia.org/wiki/AVL_tree)
  - [Red-Blak Trees](https://en.wikipedia.org/wiki/Red%E2%80%93black_tree)
