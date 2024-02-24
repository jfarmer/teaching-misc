# Topological Sort

## Agenda

1. Introductions (brief!)
2. Calibration
3. Framing Vocabulary
4. Designing + Implementing

## (Finite) DAGs

Some questions to consider:

1. Does every finite DAG have at least one sink? Why or why not?
1. Does every finite DAG have at least one source? Why or why not?

Remember, "DAG" means a "directed acyclic graph". A "source" is a vertex with no incoming edges. A "sink" is a vertex with no outgoing edges.

A graph is "finite" if it has a finite number of vertices.

There's nothing in the definition of a graph that says the set of vertexes or edges must be finite. There are many useful infinite graphs, even though we can't represent them all at once on a computer.

For example, consider a graph where there is one vertex for every natural number `0, 1, 2, 3, ...`. Draw an edge from the natural number `k` to the natural number `j` if `k` is the natural right before `j`.

That graph would look like this:

```text
0 -> 1 -> 2 -> 3 -> 4 -> 5 -> ...
```

Or consider a graph where there's a vertex for every natural number and there's an edge from `k` to `j` if `k` evenly divides `j` and `k != j`.

Both of these graphs are directed and have no cycles, so they're DAGs, but neither is a *finite* DAG.

Answer to those questions:

1. Yes, every finite DAG has at least one sink. If a DAG has `N` vertexes then it can't contain a path with a length of more than `N`. If we don't have a sink then we can find a path that contains more than `N` vertexes. How?

  Start a walk from anywhere in the graph. If the graph has no sink then every vertex has at least one outgoing edge (why?).

  Say we arrive at some vertex `w` having already visited `{v_1, v_2, v_3, ..., v_k}`. If any of the outgoing edges from `w` point to one of the vertexes we've already visited then we've found a cycle, which is impossible if our graph is a DAG (directed ***acyclic*** graph).

  That means `{v_1, v_2, v_3, ..., v_k, w}` is a path of length `k + 1`, and visiting any one one of `w`'s neighbors will give us a path of length `k + 2`, and visiting any one of that neighbor's neighbors would give us a path of length `k + 3`, and so on.

  If there's no sink, we can always find another vertex to visit that we've never visited before. That is, we could find a path of any length we'd like, including one that contains more than `N` vertexes.

  But a path can't have more vertexes than the graph itself contains, so our DAG must have a sink. Therefore our DAG must have a sink.

  Another way to frame this is that every walk on finite DAG a must terminate in a finite number of steps.
2. If a graph is a DAG then so is its opposite graph, which must have a sink by (1). A sink in the opposite graph is a source in the original graph.

## Given List

```javascript
vertexList = [
  "Prepare kitchen", "Mix flour", "Mix wet ingredients", "Combine", "Put in oven", "Clean kitchen"
]

edgeList = [
  ["Prepare kitchen", "Mix wet ingredients"],
  ["Prepare kitchen", "Mix flour"],
  ["Mix flour", "Combine"],
  ["Mix wet ingredients", "Combine"],
  ["Combine", "Put in oven"],
  ["Combine", "Clean kitchen"],
]
```

```javascript
vertexList = ['A', 'B', 'C', 'D', 'E', 'F'];
edgeList = [
  ['A', 'B'],
  ['A', 'C'],
  ['C', 'D'],
  ['D', 'B'],
  ['D', 'E'],
  ['F', 'C'],
]
```

## Age Game

Topological sorting / directed graphs as pairwise relationships, like a logic puzzle.

Mei is older than Steve but younger than Noor. Steve is younger than Amir, who is younger than Noor. Mei is also younger than Sofia. Zara is older than Mei and Dmitri. Amir is older than Sofia, but younger than Dmitri. Kendrick is older than Dmitri, but younger than Zara.

Who is the youngest? Can you say how Noor and Zara's age compare? Is Sofia definitely younger than Kendrick?

Use <https://sketchviz.com/> to generate full graph from pairwise information. Make sure students are clear on what an edge represents (either "younger than" or "older than"). Fill in the graph after it's clear they understand what each edge represents.

The goal is for them to see why arranging the information as a DAG is valuable (the gestalt of the graph). But also emphasize that the same graph can be laid out many ways by changing between render engines.
