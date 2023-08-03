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

function printSudokuBoard(board) {
  for (let i = 0; i < board.length; i++) {
    if (i % 3 === 0 && i !== 0) {
      console.log(' - - - - - - - - - - - -');
    }

    for (let j = 0; j < board[i].length; j++) {
      if (j % 3 === 0 && j !== 0) {
        process.stdout.write(' | ');
      }

      process.stdout.write(' ' + board[i][j]);
    }

    console.log();
  }
}

// Don't worry about the arithmetic, here.
function isPossibleValue(board, row, col, num) {
  for (let i = 0; i < 9; i++) {
    let m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
    let n = 3 * Math.floor(col / 3) + i % 3;

    if (board[row][i] === num || board[i][col] === num || board[m][n] === num) {
      return false;
    }
  }
  return true;
}


function solveSudoku(board) {
  let [row, col] = findFirstEmptyCell(board);

  // If there are no empty cells, we're done.
  if(row === -1 && col === -1){
    return board;
  }

  for(let num = 1; num <= 9; num++) {
    if (isPossibleValue(board, row, col, num)) {
      board[row][col] = num;

      // If guessing "num" leads to solved board, return
      // the solved board
      if(solveSudoku(board)) {
        return board;
      }
    }
  }

  // Everything failed, erase cell and report we can't
  // solve it from here
  board[row][col] = 0;

  return null;
}

/**
 * Given a 2d Sudoku board, return a two-element array
 * [row, col] representing the first row,col index that
 * is empty.
 */

function findFirstEmptyCell(board) {
  for (let i = 0 ; i < board.length; i++){
    for(let j = 0; j < board[i].length; j++){
      if (board[i][j] == 0){
        return [i, j];
      }
    }
  }

  return [-1, -1];
}

let sudokuBoard = [
  [3, 0, 6, 5, 0, 8, 4, 0, 0],
  [5, 2, 0, 0, 0, 0, 0, 0, 0],
  [0, 8, 7, 0, 0, 0, 0, 3, 1],
  [0, 0, 3, 0, 1, 0, 0, 8, 0],
  [9, 0, 0, 8, 6, 3, 0, 0, 5],
  [0, 5, 0, 0, 9, 0, 6, 0, 0],
  [1, 3, 0, 0, 0, 0, 2, 5, 0],
  [0, 0, 0, 0, 0, 0, 0, 7, 4],
  [0, 0, 5, 2, 0, 6, 3, 0, 0]
];

let solvedBoard = solveSudoku(sudokuBoard);
printSudokuBoard(solvedBoard);