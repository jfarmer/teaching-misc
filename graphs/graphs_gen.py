from collections import deque

def graph_to_adjacency_list(vertex_list, edge_list):
    """
    Given a graph represented as a vertex list and an edge list,
    return an adjacency list that represents the same graph.
    """
    adjacency_list = {vertex: [] for vertex in vertex_list}

    for from_vertex, to_vertex in edge_list:
        adjacency_list[from_vertex].append(to_vertex)

    return adjacency_list

def dfs_events(graph, start_vertex, visited=None):
    """
    Generator that yields DFS traversal events as (event_type, vertex) tuples.

    Args:
        graph: Dictionary representing adjacency list
        start_vertex: The vertex to start from
        visited: Set of already visited vertices (for internal use)

    Yields:
        Tuples of ('enter', vertex) for pre-order and ('exit', vertex) for post-order
    """
    if visited is None:
        visited = set()

    if start_vertex in visited:
        return

    visited.add(start_vertex)

    # Pre-order event
    yield ('enter', start_vertex)

    for neighbor in graph[start_vertex]:
        yield from dfs_events(graph, neighbor, visited)

    # Post-order event
    yield ('exit', start_vertex)

def dfs_preorder_events(graph, start_vertex, visited=None):
    """Generator that yields only pre-order DFS events."""
    for event_type, vertex in dfs_events(graph, start_vertex, visited):
        if event_type == 'enter':
            yield vertex

def dfs_postorder_events(graph, start_vertex, visited=None):
    """Generator that yields only post-order DFS events."""
    for event_type, vertex in dfs_events(graph, start_vertex, visited):
        if event_type == 'exit':
            yield vertex

def dfs_iter_events(graph, start_vertex, visited=None):
    """
    Generator that yields DFS traversal events using iterative approach.
    Note: This only yields 'enter' events due to the nature of iterative DFS.
    """
    if visited is None:
        visited = set()

    stack = [start_vertex]

    while stack:
        current = stack.pop()
        if current in visited:
            continue

        visited.add(current)
        yield ('enter', current)

        # Add neighbors in reverse order to maintain left-to-right traversal
        for neighbor in reversed(graph[current]):
            if neighbor not in visited:
                stack.append(neighbor)

def graph_dfs_events(graph):
    """
    Generator that yields DFS events for all vertices in the graph.
    Ensures all disconnected components are visited.
    """
    visited = set()

    for vertex in graph:
        if vertex not in visited:
            yield from dfs_events(graph, vertex, visited)

def bfs_events(graph, start_vertex, visited=None):
    """
    Generator that yields BFS traversal events as (event_type, vertex) tuples.
    BFS only has 'enter' events since there's no natural post-order in level-order traversal.
    """
    if visited is None:
        visited = set()

    queue = deque([start_vertex])

    while queue:
        current = queue.popleft()
        if current in visited:
            continue

        visited.add(current)
        yield ('enter', current)

        for neighbor in graph[current]:
            if neighbor not in visited:
                queue.append(neighbor)

def shortest_paths_events(graph, start_vertex):
    """
    Generator that yields shortest path computation events.

    Yields:
        ('distance_update', vertex, distance) tuples as distances are computed
        ('final_distances', distances_dict) at the end
    """
    distances = {v: float('inf') for v in graph}
    distances[start_vertex] = 0

    yield ('distance_update', start_vertex, 0)

    for event_type, vertex in bfs_events(graph, start_vertex):
        if event_type == 'enter':
            dist_to_current = distances[vertex]

            for neighbor in graph[vertex]:
                dist_to_neighbor = distances[neighbor]
                new_distance = dist_to_current + 1

                if new_distance < dist_to_neighbor:
                    distances[neighbor] = new_distance
                    yield ('distance_update', neighbor, new_distance)

    yield ('final_distances', distances)

# Convenience functions that consume the generators for backward compatibility

def dfs_from_node_pre(graph, start_vertex, callback=lambda x: x, visited=None):
    """Execute callback for each vertex in pre-order DFS."""
    for vertex in dfs_preorder_events(graph, start_vertex, visited):
        callback(vertex)

def dfs_from_node_post(graph, start_vertex, callback=lambda x: x, visited=None):
    """Execute callback for each vertex in post-order DFS."""
    for vertex in dfs_postorder_events(graph, start_vertex, visited):
        callback(vertex)

def dfs_from_node_iter(graph, start_vertex, callback=lambda x: x, visited=None):
    """Execute callback for each vertex in iterative DFS."""
    for event_type, vertex in dfs_iter_events(graph, start_vertex, visited):
        if event_type == 'enter':
            callback(vertex)

def bfs_from_node(graph, start_vertex, callback=lambda x: x, visited=None):
    """Execute callback for each vertex in BFS order."""
    for event_type, vertex in bfs_events(graph, start_vertex, visited):
        if event_type == 'enter':
            callback(vertex)

def shortest_paths_from_node(graph, start_vertex):
    """
    Find the shortest path from start_vertex to every other vertex in the graph.

    Uses BFS to explore the graph level by level, ensuring we find the minimum
    number of edges needed to reach each vertex from the starting point.

    Args:
        graph: Dictionary representing adjacency list of an unweighted graph
        start_vertex: The vertex to start from

    Returns:
        Dictionary mapping each vertex to its shortest distance from start_vertex.
        Distance is measured in number of edges. Unreachable vertices have distance infinity.

    Example:
        graph = {'A': ['B', 'C'], 'B': ['D'], 'C': ['D'], 'D': []}
        shortest_paths_from_node(graph, 'A') -> {'A': 0, 'B': 1, 'C': 1, 'D': 2}
    """
    distances = None
    for event_type, data in shortest_paths_events(graph, start_vertex):
        if event_type == 'final_distances':
            distances = data
            break
    return distances

def dfs_preorder(graph, callback=lambda x: x):
    """Execute callback for each vertex in pre-order DFS across all components."""
    visited = set()
    for vertex in graph:
        if vertex not in visited:
            dfs_from_node_pre(graph, vertex, callback, visited)

def dfs_postorder(graph, callback=lambda x: x):
    """Execute callback for each vertex in post-order DFS across all components."""
    visited = set()
    for vertex in graph:
        if vertex not in visited:
            dfs_from_node_post(graph, vertex, callback, visited)

# Example usage and testing
if __name__ == "__main__":
    from pprint import pprint

    vertex_list = ['A', 'B', 'C', 'D', 'E', 'F']
    edge_list = [
        ('A', 'B'),
        ('A', 'C'),
        ('C', 'D'),
        ('D', 'B'),
        ('D', 'E'),
        ('F', 'C')
    ]

    graph = graph_to_adjacency_list(vertex_list, edge_list)
    print("Graph:")
    pprint(graph, width=40)

    print("\nDFS Events from A:")
    for event_type, vertex in dfs_events(graph, 'A'):
        print(f"  {event_type}: {vertex}")

    print("\nBFS Events from A:")
    for event_type, vertex in bfs_events(graph, 'A'):
        print(f"  {event_type}: {vertex}")

    print("\nShortest Path Events from A:")
    for event_type, data in shortest_paths_events(graph, 'A'):
        if event_type == 'distance_update':
            vertex, distance = data
            print(f"  distance to {vertex}: {distance}")
        elif event_type == 'final_distances':
            print(f"  final distances: {data}")

    print("\nShortest paths from A:")
    print(shortest_paths_from_node(graph, 'A'))
