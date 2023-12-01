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
 * Given a graph return a list of its vertexes
 */
function graphGetVertexes(graph) {
  return Object.keys(graph);
}

/**
 * Given a graph, return an array of source vertexes, i.e., vertexes
 * with no incoming edges
 */
function graphGetSources(graph) {
  let inDegrees = graphGetInDegrees(graph);

  return graphGetVertexes(graph).filter(vertex => inDegrees.get(vertex) === 0);
}

/**
 * Given a graph, return a Map whose keys are vertexes and whose
 * values are that vertexes in-degree.
 *
 * A vertex's in-degree is the number of incoming edges to that vertex.
 */
function graphGetInDegrees(graph) {
  let inDegrees = new Map(graphGetVertexes(graph).map(v => [v, 0]));

  return Object.values(graph).flat().reduce((map, v) => map.set(v, map.get(v) + 1), inDegrees);
}

/**
 * Perform a topological sort on a graph
 *
 * This is iterative, breadth first, and non-destructive
 */
function topologicalSortBFS(graph) {
  let results = [];
  let inDegrees = graphGetInDegrees(graph);
  let queue = graphGetVertexes(graph).filter(v => inDegrees.get(v) === 0);

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
  let visited = new Set();
  let results = [];

  for (let vertex of Object.keys(graph)) {
    if (!visited.has(vertex)) {
      postOrderDFS(graph, vertex, vertex => results.push(vertex), visited);
    }
  }

  return results.reverse();
}

/**
 * Given a graph, a starting vertex, and a callback function perform a
 * post-order depth-first traversal of the graph. The callback function
 * is called in the post-order position.
 */
function postOrderDFS(graph, startVertex, callbackFn, visited = new Set()) {
  if (visited.has(startVertex)) {
    return;
  }

  visited.add(startVertex);

  for (let neighbor of graph[startVertex]) {
    postOrderDFS(graph, neighbor, callbackFn, visited);
  }

  // Invoke the callback if we have it
  if (typeof callbackFn === 'function') {
    callbackFn(startVertex);
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
