class Graph {
  constructor(vertexes, edges) {
    this.vertexes = vertexes;
    this.edges = edges;
    let adjList = new Map(vertexes.map(v => [v, new Set()]));

    this._adjList = this.edges.reduce((acc, [from, to]) => {
      return acc.set(from, acc.get(from).add(to));
    }, adjList);
  }
}

let noOp = v => v;

function dfs(graph, startVertex, callback = noOP, visited = new Set()) {
  visited.add(startVertex);
  callback(startVertex);

  for (let neighbor of graph.getNeighbors(startVertex)) {
    if (!visited.has(neighbor)) {
      dfs(graph, neighbor, callback, visited);
    }
  }
}

function dfsIterative(graph, startVertex, callback = noOp) {
  let visited = new Set();
  let stack = [];

  stack.push(startVertex);

  while (stack.length > 0) {
    let vertex = stack.pop();

    if (!visited.has(vertex)) {
      visited.add(vertex);
      callback(vertex)

      for (let neighbor of graph.getNeighbors(vertex)) {
        stack.push(neighbor);
      }
    }
  }
}
