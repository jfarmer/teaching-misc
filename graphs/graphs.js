class Graph {
  constructor(vertexes, edges) {
    this.vertexes = vertexes;
    this.edges = edges;
    let adjList = new Map(vertexes.map((v) => [v, new Set()]));

    this._adjList = this.edges.reduce(
      (acc, [from, to]) => acc.set(from, acc.get(from).add(to)),
      adjList,
    );
  }

  getNeighbors(vertex) {
    return this._adjList.get(vertex);
  }
}

// The identity function: does nothing
function doNothing() {
  return;
}

function dfs(graph, callback = doNothing, visited = new Set()) {
  for (let vertex of graph.vertexes) {
    dfsFromVertex(graph, vertex, callback, visited);
  }
}

function dfsFromVertex(graph, startVertex, callback = doNothing, visited = new Set()) {
  if (visited.has(startVertex)) {
    return;
  }

  visited.add(startVertex);

  callback(startVertex);

  for (let neighbor of graph.getNeighbors(startVertex)) {
    dfsFromVertex(graph, neighbor, callback, visited);
  }
}

function dfsFromVertexIterative(graph, startVertex, callback = doNothing) {
  let visited = new Set();
  let stack = [];

  stack.push(startVertex);

  while (stack.length > 0) {
    let vertex = stack.pop();

    if (!visited.has(vertex)) {
      visited.add(vertex);
      callback(vertex);

      for (let neighbor of graph.getNeighbors(vertex)) {
        stack.push(neighbor);
      }
    }
  }
}

// let vertexes = 'ABCDE'.split('')
// let edges = ['AB', 'AC', 'BC', 'BD', 'CD', 'DE'].map(s => s.split(''))
// let graph = new Graph(vertexes, edges);

// let vertexList = ['A', 'B', 'C', 'D', 'E', 'F'];
// let edgeList = [
//   ['A', 'B'],
//   ['A', 'C'],
//   ['C', 'D'],
//   ['D', 'B'],
//   ['D', 'E'],
//   ['F', 'C'],
// ];

// let graph = graphToAdjacencyList(vertexList, edgeList);

module.exports = {
  Graph,
  dfs,
  dfsFromVertex,
};
