def graph_to_adjacency_list(vertex_list, edge_list):
    """
    Given a graph represented as a vertex list and an edge list,
    return an adjacency list that represents the same graph.
    """
    adjacency_list = {vertex: [] for vertex in vertex_list}

    for from_vertex, to_vertex in edge_list:
        adjacency_list[from_vertex].append(to_vertex)

    return adjacency_list


def graph_get_outdegrees(graph):
    return {vertex: len(graph[vertex]) for vertex in graph}

def graph_get_sinks(graph):
    return [v for v in graph if len(graph[v]) == 0]

def graph_opposite(graph):
    opposite = {v : [] for v in graph}

    for vertex in graph:
        for neighbor in graph[vertex]:
            opposite[neighbor].append(vertex)

    return opposite

def graph_get_sources(graph):
    return graph_get_sinks(graph_opposite(graph))

def graph_get_source(graph):
    """
    Given a graph, return the first source vertex we find or None
    if there aren't any.
    """
    return next((s for s in graph_get_sources(graph)), None)

def graph_get_indegrees(graph):
    """
    Given a graph, return a dictionary whose keys are vertices and whose
    values are that vertex's in-degree.

    A vertex's in-degree is the number of incoming edges to that vertex.
    """
    return graph_get_outdegrees(graph_opposite(graph))

def topological_sort_bfs(graph):
    """
    Perform a topological sort on a graph using breadth-first search.
    This is iterative, breadth first, and non-destructive.
    """
    results = []
    in_degrees = graph_get_indegrees(graph)
    queue = [v for v in graph if in_degrees[v] == 0]

    while queue:
        node = queue.pop(0)
        results.append(node)

        for neighbor in graph[node]:
            in_degrees[neighbor] -= 1
            if in_degrees[neighbor] == 0:
                queue.append(neighbor)

    return results


def topological_sort_bfs_recursive(graph):
    """
    Perform a topological sort on a graph using a recursive and
    destructive breadth-first search. We recursively remove
    sources from the graph.
    """
    if not graph:
        return []

    source = graph_get_source(graph)

    # The graph isn't empty, but it has no source.
    # That means there must be a cycle
    if not source:
        raise TypeError('Graph contains a cycle')

    # Could also do: graph.pop(source)
    del graph[source]

    return [source] + topological_sort_bfs_recursive(graph)


def topological_sort_dfs_recursive(graph):
    """
    Perform a topological sort on a graph using depth-first search.
    This is recursive, depth first, and non-destructive.
    """

    def post_order_dfs(start_vertex, visited, results):
        """
        Perform a post-order depth-first traversal of the graph, starting
        from 'start_vertex'. The results list is updated in post-order.
        """
        if start_vertex in visited:
            return

        visited.add(start_vertex)

        for neighbor in graph[start_vertex]:
            post_order_dfs(neighbor, visited, results)

        results.append(start_vertex)

    visited = set()
    results = []

    for vertex in graph:
        if vertex not in visited:
            post_order_dfs(vertex, visited, results)

    return results[::-1]

# Example usage
# graph = {
#     'A': ['B', 'C'],
#     'B': ['D'],
#     'C': ['D'],
#     'D': []
# }
# print(topological_sort_dfs_recursive(graph))


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

from pprint import pprint
pprint(graph, width=40)

print('BFS (iterative):', topological_sort_bfs(graph))
print('BFS (recursive):', topological_sort_bfs_recursive(graph.copy()))
print('DFS (recursive):', topological_sort_dfs_recursive(graph))
