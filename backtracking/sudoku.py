import sys
import time

def chunk(array, n):
    for i in range(0, len(array), n):
        yield array[i:i + n]

def sudoku_board_from_string(board_str):
    board = [int(char) for char in board_str]
    return list(chunk(board, 9))


def print_sudoku_board(board):
    for i, row in enumerate(board):
        if i % 3 == 0 and i != 0:
            print('- - - - - - - - - - -')

        for j, cell in enumerate(row):
            if j % 3 == 0 and j != 0:
                print(' |', end='')

            print(f'{" " if j != 0 else ""}{cell}', end='')

        print()

def find_first_empty_cell(board):
    for i, row in enumerate(board):
        for j, cell in enumerate(row):
            if cell == 0:
                return i, j
    return -1, -1

def is_possible_value(board, row, col, num):
    for i in range(9):
        m = 3 * (row // 3) + i // 3
        n = 3 * (col // 3) + i % 3

        if board[row][i] == num or board[i][col] == num or board[m][n] == num:
            return False
    return True

def find_possible_values(board, row, col):
    return [num for num in range(1, 10) if is_possible_value(board, row, col, num)]

def solve_sudoku(board):
    row, col = find_first_empty_cell(board)

    if row == -1 and col == -1:
        return board

    possible_values = find_possible_values(board, row, col)

    for possible_value in possible_values:
        board[row][col] = possible_value

        if solve_sudoku(board):
            return board

        board[row][col] = 0

    return None

def runtime(fn):
    start = time.perf_counter()
    fn()
    finish = time.perf_counter()
    return (finish - start) * 1000  # Convert to milliseconds

boards = []

# try:
#     boards_raw = sys.stdin.buffer.read()
#     boards = [sudoku_board_from_string(board_str) for board_str in boards_raw.strip().split('\n')]
# except:
sudoku_board = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
]
boards = [sudoku_board]

for board in boards:
    ms = runtime(lambda: solve_sudoku(board))

    print('\n---------\n')
    print(f'time: {ms:.3f} ms')
    print()

    print_sudoku_board(board)
