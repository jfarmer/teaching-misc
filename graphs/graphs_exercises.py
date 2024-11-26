def graph_to_adjacency_list(vertex_list, edge_list):
    """
    Given a graph represented as a vertex list and an edge list,
    return an adjacency list that represents the same graph.
    """
    adjacency_list = {vertex: [] for vertex in vertex_list}

    for from_vertex, to_vertex in edge_list:
        adjacency_list[from_vertex].append(to_vertex)

    return adjacency_list

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
def label_print(label, obj):
    print(label)

graph = graph_to_adjacency_list(vertex_list, edge_list)
pprint(graph, width=40)
