/*
Find the first empty cell
Find all the possible numbers that could go in that cell
if there are no possible numbers then
  backtrack
else:
  for each possible number N:
    put N in empty cell
    try to solve with N in that cell
    erase N

for each number from 1..9 as N:
  if N is possible then:
    ....
*/

/**
 * Given a Sudoku board represented by a 9x9 2d array,
 * display it like a proper Sudoku board
 */
function printSudokuBoard(board) {
  for (let i = 0; i < board.length; i++) {
    if (i % 3 === 0 && i !== 0) {
      console.log('- - - - - - - - - - -');
    }

    for (let j = 0; j < board[i].length; j++) {
      if (j % 3 === 0 && j !== 0) {
        process.stdout.write(' |');
      }

      process.stdout.write((j === 0 ? '' : ' ') + board[i][j]);
    }

    console.log();
  }
}

function solveSudoku(board) {
}

let sudokuBoard = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9]
];
