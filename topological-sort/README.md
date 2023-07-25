# Topological Sort

## Agenda

1. Introductions (brief!)
2. Calibration
3. Framing Vocabulary
4. Designing + Implementing

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
let vertexList = ['A', 'B', 'C', 'D', 'E', 'F'];
let edgeList = [
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

Use <https://viz-js.com/> to generate full graph from pairwise information. Make sure students are clear on what an edge represents (either "younger than" or "older than"). Fill in the graph after it's clear they understand what each edge represents.

The goal is for them to see why arranging the information as a DAG is valuable (the gestalt of the graph). But also emphasize that the same graph can be laid out many ways by changing between render engines.
