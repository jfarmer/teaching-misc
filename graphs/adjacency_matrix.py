import numpy as np

# Consider this graph:
#
# A -> {B,C,D}
# B -> {C,E}
# C -> {D,E}
# D -> {}
# E -> {}
# This is its adjacency matrix:

adj = np.array([
  [0,1,1,1,0],
  [0,0,1,0,1],
  [0,0,0,1,1],
  [0,0,0,0,0],
  [0,0,0,0,0]
])

# If you think of an edge as a "walk of length 1" then
# the adjacency matrix tells you how many walks of length 1
# there are between any two vertexes.

# If you look at adj @ adj, where @ is matrix multiplication
# you can see that it tells you how many walks of length two
# there are between any two vertexes.

# print(adj @ adj)
# [[0 0 1 1 2]
#  [0 0 0 1 1]
#  [0 0 0 0 0]
#  [0 0 0 0 0]
#  [0 0 0 0 0]]

# In general, the k-th matrix power of adj tells you how
# many walks of length k there are between any two vertexes.

for k in range(5):
    print(f'adj**{k} is:')
    print(np.linalg.matrix_power(adj, k))
    print()

# But you might remember that the infinite series
#
#   1 + x^2 + x^3 + x^4 + ...
#
# is a geometric series and has the following value if it converges:
#
#   1 / (1 - x)
#
# The same rule applies for matrixes. If we want the number of
# walk of ANY length then that's the number of walks of length 1
# plus the number of walks of length 2 plus the number of walks
# of length 3 and so on.

# When does this converge? One *sufficient* condition is that
# the graph is acyclic. Why? Because in an acyclic graph, a walk
# can't contain more vertexes than are in the graph itself.
#
# That means that A**k will be all zero if k is greater than
# the number of vertexes is the graph, so the "infinite" series
# is eventually all 0s.

# Because our graph above is acyclic, when we count "walks"
# we are really counting paths.

# Get the dimension of our adjacency matrix, i.e., the number
# of vertexes
dim = adj.shape[0]

# For N vertexes, create an N-by-N identity matrix
I = np.identity(dim)

# 1/(1-x) becomes inv(I - adj), where inv finds the matrix inverse
all_walks = np.linalg.inv(I - adj)

# inv(I - adj) counts walks of length 0, but we can subtract those
# if we want
print(all_walks)
no_zero_walks = (all_walks - I)

print('All walks, exluding walks of length 0:')
print(no_zero_walks.astype(int))

# If G is a graph then the degree matrix Deg(G) is the matrix
# where the diagonal entries contain the (out-)degrees of the
# vertexes and every other entry is 0
def degree_matrix(adj_matrix):
  return np.diag(np.sum(adj_matrix, axis=1))

# If G is a graph then the Laplacian matrix L(G) is defined as
#    Deg(G) - Adj(G)
# So, the diagonal contains the degrees and the non-diagonal entries
# are -1 is there is an edge and 0 otherwise.
def laplacian_matrix(adj_matrix):
  return degree_matrix(adj_matrix) - adj_matrix

# Given an adjacency matrix, this returns a new adjacency matrix
# corresponding to the undirected version of the graph.
# The "|" operator is an entrywise OR and adj_matrix.T is the
# transpose of adj_matrix, i.e., what we get by swapping rows
# and cvolumns.
def to_undirected(adj_matrix):
  return adj_matrix | adj_matrix.T

def is_connected(adj_matrix):
  lap = laplacian_matrix(adj_matrix)

  eigenvalues = sorted(np.linalg.eigvalsh(lap))

  return eigenvalues[1] > 0

print()
print("--- LAPLACIAN ---")
print()

undirected = to_undirected(adj)
lap = laplacian_matrix(undirected)

print('Laplacian:')
print(lap.astype(int))
print()

from pprint import pprint
print("Eigenvalues of Laplacian:")
pprint(sorted(np.linalg.eigvalsh(lap)), width=30)
print()

print("Graph connected:", is_connected(undirected))
