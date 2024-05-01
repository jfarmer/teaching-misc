/**
 * Given a graph, represented as an adjacency list, and a starting vertex,
 * perform a depth-first traversal of the graph beginning at the
 * starting vertex.
 *
 * Call the callback once per vertex (pre-order).
 */
function dfs(graph, startNode, callback, visited = new Set()) {
  let stack = [startNode];

  while (stack.length > 0) {
    let node = stack.pop();
    if (visited.has(node)) {
      continue;
    }

    visited.add(node);

    if (typeof callback === 'function') {
      callback(node);
    }

    for (let neighbor of graph[node]) {
      stack.push(neighbor);
    }
  }
}

/**
 * Pre-order DFS (recursive)
 */
function dfsRecursive(graph, startNode, callback, visited = new Set()) {
  if (visited.has(startNode)) {
    return;
  }

  visited.add(startNode);

  if (typeof callback === 'function') {
    callback(node);
  }

  for (let neighbor of graph[node]) {
    dfs(graph, neighbor, callback, visited);
  }
}

/**
 * Post-order DFS (recursive)
 *
 * In post-order DFS we invoke the callback after we've handled all of a
 * vertex's descendents. To do this iteratively we'd have to keep track of
 * which neighbor counted as the "last" neighbor.
 */

function dfsRecursivePostOrder(graph, startNode, callback, visited = new Set()) {
  if (visited.has(startNode)) {
    return;
  }

  visited.add(startNode);

  for (let neighbor of graph[node]) {
    dfs(graph, neighbor, callback, visited);
  }

  if (typeof callback === 'function') {
    callback(node);
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

  dfs(graph, 'A', node => console.log(node));
}
