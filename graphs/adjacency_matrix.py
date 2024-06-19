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

# If you think of an edge as a "path of length 1" then
# the adjacency matrix tells you how many paths of length 1
# there are between any two vertexes.

# If you look at adj @ adj, where @ is matrix multiplication
# you can see that it tells you how many paths of length two
# there are between any two vertexes.

# print(adj @ adj)
# [[0 0 1 1 2]
#  [0 0 0 1 1]
#  [0 0 0 0 0]
#  [0 0 0 0 0]
#  [0 0 0 0 0]]

# In general, the k-th matrix power of adj tells you how
# many paths of length k there are between any two vertexes.

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
# path of ANY length then that's the number of paths of length 1
# plus the number of paths of length 2 plus the number of paths
# of length 3 and so on.

dim = adj.shape[0]
I = np.identity(dim)

all_paths = np.linalg.inv(I - adj).astype(int)
no_zero_paths = (all_paths - I).astype(int)

print('All paths, exluding paths of length 0:')
print(no_zero_paths)
