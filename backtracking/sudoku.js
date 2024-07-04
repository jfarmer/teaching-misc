const fs = require('node:fs');
const process = require('node:process');

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

function runtime(fn) {
  let start = performance.now();

  fn();

  let finish = performance.now();

  return finish - start;
}

function* chunk(array, n) {
  for (let i = 0; i < array.length; i += n) {
    yield array.slice(i, i + n);
  }
}

function sudokuBoardFromString(boardStr) {
  let board = boardStr.split('').map(Number)
  return [...chunk(board, 9)];
}

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

/**
 * Given a 2d Sudoku board, return a two-element array
 * [row, col] representing the first row,col index that
 * is empty.
 */

function findFirstEmptyCell(board) {
  for (let i = 0 ; i < board.length; i++){
    for(let j = 0; j < board[i].length; j++){
      if (board[i][j] === 0){
        return [i, j];
      }
    }
  }

  return [-1, -1];
}

function isPossibleValue(board, row, col, num) {
  for (let i = 0; i < 9; i++) {
    // Calculate (m,n) so we iterates through the coordinates
    // in the same 3x3 subgrid as the cell at (row, col)
    let m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
    let n = 3 * Math.floor(col / 3) + i % 3;

    // If you're curious, run:
    //   console.log(`(${row}, ${col}) cell ${i} -> (${m}, ${n})`);

    if (board[row][i] === num || board[i][col] === num || board[m][n] === num) {
      return false;
    }
  }
  return true;
}

function findPossibleValues(board, row, col) {
  let results = [];

  for (let num = 1; num <= 9; num++) {
    if (isPossibleValue(board, row, col, num)) {
      results.push(num);
    }
  }

  return results;
}

function solveSudoku(board) {
  let [row, col] = findFirstEmptyCell(board);

  // If there are no empty cells, we're done.
  if(row === -1 && col === -1) {
    return board;
  }

  let possibleValues = findPossibleValues(board, row, col);

  for (let possibleValue of possibleValues) {
    board[row][col] = possibleValue;

    // If guessing "num" leads to solved board, return
    // the solved board
    if(solveSudoku(board)) {
      return board;
    }

    // We're back, which means current possibleValue doesn't work
    board[row][col] = 0;
  }

  return null;
}


let boards = [];

try {
  let boardsRaw = fs.readFileSync(process.stdin.fd, 'utf-8');
  boards = boardsRaw.trim().split('\n').map(sudokuBoardFromString);
} catch {
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

  boards = [sudokuBoard]
}

for (let board of boards) {
    let ms = runtime(() => solveSudoku(board));

    console.log('\n---------\n')
    console.log('time: %s ms', ms.toFixed(3));
    console.log('');

    printSudokuBoard(board);
}
