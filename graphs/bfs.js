function doNothing() { return; }

/**
 * Given a graph, represented as an adjacency list, iterate through it breadth-first
 * and call the callback for each node.
 */
function bfs(graph, startNode, callback = doNothing, visited = new Set()) {
  let queue = [startNode];

  while (queue.length > 0) {
    let node = queue.shift();

    if (visited.has(node)) {
      continue;
    }

    visited.add(node);

    callback(node);

    for (let neighbor of graph[node]) {
      queue.push(neighbor);
    }
  }
}

if (require.main === module) {
  let graph = {
    'A': ['B', 'C'],
    'B': [],
    'C': ['D'],
    'D': ['B', 'E'],
    'E': [],
    'F': ['C'],
  }

  let graphAdj = [
  // A  B  C  D  E  F
    [0, 1, 1, 0, 0, 0],  // A
    [0, 0, 0, 0, 0, 0],  // B
    [0, 0, 0, 1, 0, 0],  // C
    [0, 1, 0, 0, 1, 0],  // D
    [0, 0, 0, 0, 0, 0],  // E
    [0, 0, 1, 0, 0, 0],  // F
  ]

  bfs(graph, 'A', node => console.log(node));
}

module.exports = {
  bfs,
}
