def word_search(board, word):
    if not board or not board[0] or not word:
        return False
    
    rows, cols = len(board), len(board[0])
    
    def dfs(r, c, word_idx, visited):
        if word_idx == len(word):
            return True
        
        if (r < 0 or r >= rows or c < 0 or c >= cols or 
            (r, c) in visited or board[r][c] != word[word_idx]):
            return False
        
        visited_copy = visited.copy()
        visited_copy.add((r, c))
        
        # Try all 4 directions
        directions = [(0, 1), (0, -1), (1, 0), (-1, 0)]
        for dr, dc in directions:
            if dfs(r + dr, c + dc, word_idx + 1, visited_copy):
                return True
        
        return False
    
    # Try starting from each cell
    for r in range(rows):
        for c in range(cols):
            if dfs(r, c, 0, set()):
                return True
    
    return False

def word_search_optimized(board, word):
    if not board or not board[0] or not word:
        return False
    
    rows, cols = len(board), len(board[0])
    
    def dfs(r, c, word_idx):
        if word_idx == len(word):
            return True
        
        if (r < 0 or r >= rows or c < 0 or c >= cols or 
            board[r][c] != word[word_idx]):
            return False
        
        # Mark as visited
        temp = board[r][c]
        board[r][c] = '#'
        
        # Try all 4 directions
        directions = [(0, 1), (0, -1), (1, 0), (-1, 0)]
        found = False
        for dr, dc in directions:
            if dfs(r + dr, c + dc, word_idx + 1):
                found = True
                break
        
        # Backtrack
        board[r][c] = temp
        return found
    
    # Try starting from each cell
    for r in range(rows):
        for c in range(cols):
            if dfs(r, c, 0):
                return True
    
    return False

def word_search_all_paths(board, word):
    if not board or not board[0] or not word:
        return []
    
    rows, cols = len(board), len(board[0])
    all_paths = []
    
    def dfs(r, c, word_idx, path):
        if word_idx == len(word):
            all_paths.append(path[:])
            return
        
        if (r < 0 or r >= rows or c < 0 or c >= cols or 
            board[r][c] != word[word_idx]):
            return
        
        # Mark as visited
        temp = board[r][c]
        board[r][c] = '#'
        path.append((r, c))
        
        # Try all 4 directions
        directions = [(0, 1), (0, -1), (1, 0), (-1, 0)]
        for dr, dc in directions:
            dfs(r + dr, c + dc, word_idx + 1, path)
        
        # Backtrack
        path.pop()
        board[r][c] = temp
    
    # Try starting from each cell
    for r in range(rows):
        for c in range(cols):
            dfs(r, c, 0, [])
    
    return all_paths

# Test examples
board1 = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
word1 = "ABCCED"

board2 = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
word2 = "SEE"

board3 = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
word3 = "ABCB"

from pprint import pprint

print("Example 1 - ABCCED:")
result1 = word_search_optimized([row[:] for row in board1], word1)
print(f"Found: {result1}")

print("\nExample 2 - SEE:")
result2 = word_search_optimized([row[:] for row in board2], word2)
print(f"Found: {result2}")

print("\nExample 3 - ABCB:")
result3 = word_search_optimized([row[:] for row in board3], word3)
print(f"Found: {result3}")

print("\nAll paths for SEE:")
paths = word_search_all_paths([row[:] for row in board2], word2)
pprint(paths)