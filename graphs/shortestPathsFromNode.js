/**
 * Given a graph, represented as an adjacency list, iterate through it breadth-first
 * and call the callback for each node.
 */
function bfs(graph, startNode, callback, visited = new Set()) {
  let queue = [startNode];

  while (queue.length > 0) {
    let node = queue.shift();

    if (visited.has(node)) {
      continue;
    }

    visited.add(node);

    if (typeof callback === 'function') {
      callback(node);
    }

    for (let neighbor of graph[node]) {
      queue.push(neighbor);
    }
  }
}

function vertexes(graph) {
  return Object.keys(graph);
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
  // a vertex will always be along the shortest path.
  bfs(graph, startVertex, (currentVertex) => {
    for (let neighbor of graph[currentVertex]) {
      // The shortest distance to any of currentNode's neighbors
      // is 1 more than the shortest distance to currentNode
      distances.set(neighbor, distances.get(currentVertex) + 1);
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
