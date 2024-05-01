/**
 * Given a graph represented as a vertex list and an edge list,
 * return an adjacency list that represents the same graph
 */
function graphToAdjacencyList(vertexList, edgeList) {
  const adjacencyList = {};

  for (let vertex of vertexList) {
    adjacencyList[vertex] = [];
  }

  for (let [from, to] of edgeList) {
    adjacencyList[from].push(to);
  }

  return adjacencyList;
}

/**
 * Given a graph, return an array of source vertexes, i.e., vertexes
 * with no incoming edges
 */
function graphGetSources(graph) {
  let inDegrees = graphGetInDegrees(graph);

  return Object.keys(graph).filter(vertex => inDegrees.get(vertex) === 0);
}

function graphGetSource(graph) {
  let inDegrees = graphGetInDegrees(graph);

  return Object.keys(graph).find(vertex => inDegrees.get(vertex) === 0);
}

/**
 * Given a graph, return a Map whose keys are vertexes and whose
 * values are that vertexes in-degree.
 *
 * A vertex's in-degree is the number of incoming edges to that vertex.
 */
function graphGetInDegrees(graph) {
  let inDegrees = new Map();

  for (let vertex of Object.keys(graph)) {
    inDegrees.set(vertex, 0);
  }

  for (let neighbors of Object.values(graph)) {
    for (let outVertex of neighbors) {
      let currentInDegree = inDegrees.get(outVertex);

      inDegrees.set(outVertex, currentInDegree + 1);
    }
  }

  return inDegrees;
}

/**
 * Perform a topological sort on a graph
 *
 * This is iterative, breadth first, and non-destructive
 */
function topologicalSortBFS(graph) {
  let results = [];
  let inDegrees = graphGetInDegrees(graph);
  let sources = Object.keys(graph).filter(v => inDegrees.get(v) === 0);

  let queue = [...sources];

  while (queue.length > 0) {
    let node = queue.shift();
    results.push(node);

    for (let neighbor of graph[node]) {
      inDegrees.set(neighbor, inDegrees.get(neighbor) - 1);

      if (inDegrees.get(neighbor) === 0) {
        queue.push(neighbor);
      }
    }
  }

  // Doing cycle detection with BFS is easy:
  //
  // If results doesn't contain every vertex in the graph then
  // there was a cycle. Otherwise, there was no cycle.
  return results;
}

/**
 * Perform a topological sort on a graph
 *
 * This is recursive, breadth first, and destructive
 */
function topologicalSortBFSRecursive(graph) {
  if (Object.keys(graph).length === 0) {
    return [];
  }

  let sources = graphGetSources(graph);
  sources.forEach(v => delete graph[v]);

  return sources.concat(topologicalSortBFSRecursive(graph));
}

/**
 * Perform a topological sort on a graph
 *
 * This is recursive, depth first, and non-destructive
 */

function topologicalSortDFS(graph) {
  let results = [];

  dfsPostOrder(graph, vertex => results.push(vertex));
  return results.reverse();
}

/**
 * Given a graph, a starting vertex, and a callback function perform a
 * post-order depth-first traversal of the graph. The callback function
 * is called in the post-order position.
 */
function dfsFromNodePostOrder(graph, startVertex, callbackFn, visited = new Set()) {
  if (visited.has(startVertex)) {
    return;
  }

  visited.add(startVertex);

  for (let neighbor of graph[startVertex]) {
    dfsFromNodePostOrder(graph, neighbor, callbackFn, visited);
  }

  // Invoke the callback if we have it
  if (typeof callbackFn === 'function') {
    callbackFn(startVertex);
  }
}

function dfsPostOrder(graph, callbackFn) {
  let visited = new Set();

  for (let vertex of Object.keys(graph)) {
    dfsFromNodePostOrder(graph, vertex, callbackFn, visited);
  }
}

let vertexList = ['A', 'B', 'C', 'D', 'E', 'F'];
let edgeList = [
  ['A', 'B'],
  ['A', 'C'],
  ['C', 'D'],
  ['D', 'B'],
  ['D', 'E'],
  ['F', 'C'],
]

let graph = graphToAdjacencyList(vertexList, edgeList);

console.log('BFS:', topologicalSortBFS(graph));
console.log('DFS:', topologicalSortDFS(graph));
