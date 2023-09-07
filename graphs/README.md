# Graphs

## Agenda

1. Intros
2. Calibration / Mini-"Quiz"
3. Terminology + Common Misconceptions
4. Exercises

## Calibration

What words, concepts, problems, etc. come to mind when I say "graph"?

### Terms

Here's a list of graph terms. Put your initial next to any you haven't heard before or aren't totally sure about:

- Vertex / node:
- Edge:
- Degree (directed vs. undirected):
- Source and sink:
- Directed vs. Undirected:
- Path (directed vs. undirected):
  - Walk:
  - Trail:
  - Path:
- Cycle:
- Connected (vs. disconnected):
- Subgraph:

## Main Themes

When traversing a graph depth-first, how many times do we visit a given node?

### Generality of Graphs

The point of graphs is that they can represent a HUGE range of general situations and structures, but still be concrete enough that we can reason about them mathematically and algorithmically.

A graph consists of two sets, V and E, called the vertex and edge sets respectively.

V can represnet anything. E consists of pairs of vertices. Every graph can be described by saying...

> Let each vertex represent a ______. Draw an edge from Vertex A to Vertex B if ______.

For example:

> Let G be a graph where each vertex represents a person. Draw an edge from Person A to Person B if Person A knows Person B's phone number.
> Let G be a graph where each vertex represents a website. Draw an edge from Website A to Website B if there's a hyperlink from Website A to Website B.

This is often written by saying "Let G=(V,E) be a graph where V is ... and E is ...".

For example, this is a graph:

```text
V = {A, B, C}
E = {(A,B), (A,C), (B,C)}
```

Just remember, vertexes can represent anything and edges can represent any (binary) relation between vertexes. Really, ANYTHING.

### The Split Between Directed and Undirected Graphs

- Every directed graph can be transformed into a "canonical" / "obvious" / "natural" undirected graph by forgetting or erasing the direction of each edge.
- The opposite isn't true. If we have an undirected graph, there are many directed graphs we could construct and there's no clear natural choice. We have to choose a direction for each edge.
- As a result, many concepts in graph theory have a "simple" definition for undirected graphs but get split into two for directed graphs. For example:
  - Degree vs. indegree/outdegree
  - Path vs. undirected/directed path
  - Connected vs. weakly/strongly connected
- This means there's more to say about directed graphs because there are more distinctions we can make. For example...
  - The concepts of "source" and "sink" make no sense for undirected graphs.
  - If an undirected graph is connected and has no cycles, it must be a tree. But there are directed graphs with no directed cycles that aren't trees (DAGs).

### Examples of Graphs

Using the "G=(V,E)" language, here are many examples of graphs:

1. Let W be a set of websites and let (w1, w2) ∈ W² be an edge if w1 contains a hyperlink to w2
2. Let D be a set of documents with citations and let (d1, d2) ∈ D² be an edge if d1 cites d2.
3. Let C be a set of contestants playing a round-robin tournament, i.e., every contestant plays against every other contestant exactly once.  Let (c1, c2) ∈ C² if c1 beat c2 in their game.
4. Let T be the set of Twitter users and let (t1, t2) ∈ T² be an edge if t1 follows t2
5. Let T be the set of Twitter users and let (t1, t2) ∈ T² be an edge if t1 is blocking t2
6. Let C be the set of all possible valid positions in chess and let (c1, c2) ∈ C² if we can arrive at c2 from c1 in a single move
7. Let P be a set of phones and let (p1, p2) ∈ P² be an edge if p1 has p2 in its contact list / phone book
8. Let S be the set of states in the Unites States and let (s1, s2) ∈ S² be an edge if s1 and s2 share a border
9. Let ℤ⁺ = {1, 2, 3, ...} be the set of positive integers and let (r, s) ∈ ℤ⁺² be an edge if r divides s
10. Let ℙ({1,2,3}) be the set of all subsets of {1,2,3} and let (s1, s2) ∈ ℙ({1,2,3})² be an edge if s1 is a subset of s2
11. Let P be a set of propositions, each of which may be true or false. Let (p1, p2) ∈ P² be an edge if p1 implies p2.
12. Let G=(V,E) be a graph. Define C(G)=(V, V²\E), i.e., the vertexes remain the same, but there's an edge (v1, v2) in C(G) onli if there is NO edge (v1, v2) in the original graph. This is called the "complement graph" of G.
13. Let G=(V,E) be a graph. Define Op(G) where the vertexes remain the same and the edges are reversed, i.e., (a,b) is an edge in Op(G) only if (b,a) is an edge in G. This is called the "opposite graph" or "transpose graph" of G.
14. Let G=(V,E) be a graph. Define L(G) where the vertexes are all the edges in E and (e1, e2) is an edge in L(G) if e1 and e2 have a vertex in common in the original graph G. This is called the "line graph" of G.
15. Let G=(V,E) be a graph. Define P(G)=(V,F) where (v1, v2) is in F if there's a path from v1 to v2 in G. This is called the "path graph" or "reachability graph" of G.

## Exercise

There are n rooms labeled from `0` to `n - 1` and all the rooms are locked except for room `0`. Your goal is to visit all the rooms. However, you cannot enter a locked room without having its key.

When you visit a room, you may find a set of distinct keys in it. Each key has a number on it, denoting which room it unlocks, and you can take all of them with you to unlock the other rooms.

Given an array rooms where `rooms[i]` is the set of keys that you can obtain if you visited room `i`, return `true` if you can visit all the rooms, or `false` otherwise.

Example 1:

Input: rooms = [[1],[2],[3],[]]
Output: true
Explanation:
We visit room 0 and pick up key 1.
We then visit room 1 and pick up key 2.
We then visit room 2 and pick up key 3.
We then visit room 3.
Since we were able to visit every room, we return true.

Example 2:

Input: rooms = [[1,3],[3,0,1],[2],[0]]
Output: false
Explanation: We can not enter room number 2 since the only key that unlocks it is in that room.

### Solution

```js
function canVisitEverything(rooms) {
  let currentKey = null;
  let keysInPocket = [0];
  let pocket = [];
  let visited = new Set();

  while (pocket.length !== 0) {
    currentKey = pocket.pop();

    visited.add(currentKey);

    keysInPocket = keysInPocket.concat(rooms[currentKey]);
  }

  return visited.length === rooms.length;
}
```
