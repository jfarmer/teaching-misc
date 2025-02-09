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

function graphOpposite(graph) {
  let opposite = {};

  for (let vertex of Object.keys(graph)) {
    opposite[vertex] = [];
  }

  for (let vertex of Object.keys(graph)) {
    for (let neighbor of graph[vertex]) {
      opposite[neighbor].push(vertex)
    }
  }

  return vertex;
}

function graphGetSinks(graph) {
  return Object.keys(graph).filter(vertex => graph[vertex].length === 0);
}

function graphGetSinks(graph) {
  return Object.keys(graph).filter(vertex => graph[vertex].length === 0);
}

function graphGetSources(graph) {
  return graphGetSinks(graphOpposite(graph));
}

function graphGetOutDegrees(graph) {
  let degrees = {};

  for (let vertex of Object.keys(graph)) {
    degrees[vertex] = graph[vertex].length;
  }

  return degrees;
}

function graphGetInDegrees(graph) {
  return graphGetOutDegrees(graphOpposite(graph));
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

module.exports = {
  graphToAdjacencyList,
  graphGetSources,
  graphGetSource,
  graphGetInDegrees,
};
