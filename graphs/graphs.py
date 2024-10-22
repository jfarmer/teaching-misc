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

def dfs_from_node_pre(graph, start_vertex, callback = lambda x: x, visited = None):
    if visited is None:
        visited = set()

    if (start_vertex in visited):
        return

    visited.add(start_vertex)

    # Preorder
    callback(start_vertex)

    for neighbor in graph[start_vertex]:
        dfs_from_node_pre(graph, neighbor, callback, visited)

def dfs_from_node_post(graph, start_vertex, callback = lambda x: x, visited = None):
    if visited is None:
        visited = set()

    if (start_vertex in visited):
        return

    visited.add(start_vertex)

    for neighbor in graph[start_vertex]:
        dfs_from_node_post(graph, neighbor, callback, visited)

    # Post-order
    callback(start_vertex)

def dfs_from_node_iter(graph, start_vertex, callback = lambda x: x, visited = None):
    if visited is None:
        visited = set()

    stack = [start_vertex]

    while stack:
        current = stack.pop()
        if current in visited:
            continue

        visited.add(current)
        callback(current)

        for neighbor in graph[current]:
            stack.append(neighbor)


def graph_for_each(graph, iter_method = dfs_from_node_pre, callback = lambda x: x):
    visited = set()

    for vertex in graph:
        iter_method(graph, vertex, callback, visited)

def dfs_preorder(graph, callback = lambda x: x):
    visited = set()

    for vertex in graph:
        dfs_from_node_pre(graph, vertex, callback, visited)

def dfs_postorder(graph, callback = lambda x: x):
    visited = set()

    for vertex in graph:
        dfs_from_node_post(graph, vertex, callback, visited)

def dfs_postrder2(graph, callback = lambda x: x):
    graph_for_each(graph, dfs_from_node_post, callback)

from collections import deque

def bfs_from_node(graph, start_vertex, callback = lambda x: x, visited = None):
    if visited is None:
        visited = set()

    # queue = [start_vertex]
    queue = deque([start_vertex])

    while queue:
        current = queue.popleft()
        if current in visited:
            continue

        visited.add(current)
        callback(current)

        for neighbor in graph[current]:
            queue.append(neighbor)


def shortest_paths_from_node(graph, start_vertex):
    distances = {v : float('inf') for v in graph}
    distances[start_vertex] = 0

    def graph_update_distances(vertex):
        dist_to_current = distances[vertex]

        for neighbor in graph[vertex]:
            dist_to_neighbor = distances[neighbor]

            # Replace 1 with edge weight, and you'll find minimum
            # edge-weighted path
            distances[neighbor] = min(dist_to_neighbor, dist_to_current + 1)

    bfs_from_node(graph, start_vertex, graph_update_distances)

    return distances

vertex_list = ['A', 'B', 'C', 'D', 'E', 'F']

edge_list = [
  ('A', 'B'),
  ('A', 'C'),
  ('C', 'D'),
  ('D', 'B'),
  ('D', 'E'),
  ('F', 'C')
]

from pprint import pprint

graph = graph_to_adjacency_list(vertex_list, edge_list)
# pprint(graph, width=40)

print(shortest_paths_from_node(graph, 'A'))

# import pprint

# pprint.pprint(graph, width=40)
