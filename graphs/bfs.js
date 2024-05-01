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

  bfs(graph, 'A', node => console.log(node));
}
