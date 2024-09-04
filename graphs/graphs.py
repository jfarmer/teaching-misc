class Graph:
    def __init__(self, vertexes, edges) -> None:
        self.vertexes = vertexes
        self.edges = edges

        self._graph = {vertex:list() for vertex in vertexes}

        for (source, target) in edges:
            self._graph[source].append(target)

    def neighbors_for(self, vertex):
        return self._graph[vertex]

def graph_to_adjacency_list(vertex_list, edge_list):
    """
    Given a graph represented as a vertex list and an edge list,
    return an adjacency list that represents the same graph.
    """
    adjacency_list = {vertex: [] for vertex in vertex_list}

    for from_vertex, to_vertex in edge_list:
        adjacency_list[from_vertex].append(to_vertex)

    return adjacency_list

def graph_get_neighbors(graph, node):
    return graph[node]

def dfs_from_node(graph, start_vertex, callback = lambda x: x, visited = set()):
    if (start_vertex in visited):
        return

    visited.add(start_vertex)

    # Preorder
    callback(start_vertex)

    for neighbor in graph[start_vertex]:
        dfs_from_node(graph, neighbor, callback, visited)


def dfs_from_node_iter(graph, start_vertex, callback = lambda x: x, visited = set()):
    stack = [start_vertex]

    while stack:
        current = stack.pop()
        if current in visited:
            continue

        visited.add(current)
        callback(current)

        for neighbor in graph[current]:
            stack.append(neighbor)

def bfs_from_node(graph, start_vertex, callback = lambda x: x, visited = set()):
    queue = [start_vertex]

    while queue:
        current = queue.pop(0)
        if current in visited:
            continue

        visited.add(current)
        callback(current)

        for neighbor in graph[current]:
            queue.append(neighbor)

vertex_list = ['A', 'B', 'C', 'D', 'E', 'F']
edge_list = [
  ('A', 'B'),
  ('A', 'C'),
  ('C', 'D'),
  ('D', 'B'),
  ('D', 'E'),
  ('F', 'C'),
]

graph = graph_to_adjacency_list(vertex_list, edge_list)

import pprint

pprint.pprint(graph, width=40)
