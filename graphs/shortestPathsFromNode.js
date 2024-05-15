const { bfs } = require('./bfs');

function vertexes(graph) {
  return Object.keys(graph);
}

function neighbors(graph, vertex) {
  return graph[vertex];
}

function shortestPathsFromNode(graph, startVertex) {
  let distances = new Map();

  // Set the initial distances to Infinity, except for
  // the starting vertex where the distance is 0
  for (let vertex of vertexes(graph)) {
    if (vertex === startVertex) {
      distances.set(vertex, 0);
    } else {
      distances.set(vertex, Infinity);
    }
  }

  // Because we're iterating breadth-first, the first time we see
  // a vertex will always be along the shortest path. So only ever
  // set it's distance once.
  bfs(graph, startVertex, (currentVertex) => {
    let distToCurrent = distances.get(currentVertex);

    for (let neighbor of graph[currentVertex]) {
      let distToNeighbor = distances.get(neighbor);

      // The shortest distance to any of currentNode's neighbors
      // is 1 more than the shortest distance to currentNode.
      distances.set(neighbor, Math.min(distToNeighbor, distToCurrent + 1));
    }
  });

  return distances;
}

if (require.main === module) {
  let graph = {
    'A': ['B', 'C'],
    'B': ['D'],
    'C': ['D'],
    'D': ['E'],
    'E': [],
    'F': ['G'],
    'G': ['F'],
  }

  let startNode = 'A';
  let distances  = shortestPathsFromNode(graph, startNode);

  for (let vertex of distances.keys()) {
    console.log('Distance from %s to %s: %d', startNode, vertex, distances.get(vertex));
  }
}
