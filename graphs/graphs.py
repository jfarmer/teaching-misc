class Graph:
    def __init__(self, vertexes, edges) -> None:
        self.vertexes = vertexes
        self.edges = edges

        self._graph = {vertex:list() for vertex in vertexes}

        for (source, target) in edges:
            self._graph[source].append(target)

    def neighbors_for(self, vertex):
        return self._graph[vertex]

def dfs(graph, start_vertex, callback = lambda x: x, visited = set()):
    if (start_vertex in visited):
        return

    visited.add(start_vertex)

    # Preorder
    callback(start_vertex)

    for neighbor in graph.neighbors_for(start_vertex):
        dfs(graph, neighbor, callback, visited)
