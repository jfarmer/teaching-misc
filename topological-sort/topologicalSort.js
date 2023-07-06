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

function graphGetVertexes(graph) {
  return Object.keys(graph);
}

function graphGetNeighbors(graph, vertex) {
  return graph[vertex];
}

function graphGetSources(graph) {
  let nonSources = new Set(Object.values(graph).flat());

  return Object.keys(graph).filter(vertex => !nonSources.has(vertex));
}

function graphGetInDegrees(graph) {
  let inDegrees = new Map(graphGetVertexes(graph).map(v => [v,0]));

  return Object.values(graph).flat().reduce((map, v) => map.set(v, map.get(v) + 1), inDegrees);
}

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
 * Given a graph, returns an array of vertexes that have been topologically sorted
*/

function topologicalSort(graph) {
  let visited = new Set();
  let results = [];

  for (let vertex of Object.keys(graph)) {
    if (!visited.has(vertex)) {
      dfs(graph, vertex, vertex => results.push(vertex), visited);
    }
  }

  return results.reverse();
}

function dfs(graph, vertex, callbackFn, visited) {
  if (visited.has(vertex)) {
    return;
  }

  visited.add(vertex);

  for (let neighbor of graph[vertex]) {
    dfs(graph, vertex, callbackFn, visited);
  }

  callbackFn(vertex);
}
