function generateSolvedBoard(board) {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === 0) {
        let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        while (numbers.length > 0) {
          const index = Math.floor(Math.random() * numbers.length);
          const num = numbers.splice(index, 1)[0];
          if (isValid(board, row, col, num)) {
            board[row][col] = num;
            if (generateSolvedBoard(board)) {
              return true;
            }
            board[row][col] = 0;
          }
        }
        return false;
      }
    }
  }
  return true;
}

export function generateSudoku(difficulty) {
  let board = Array.from({ length: 9 }, () => Array(9).fill(0));

  // Step 1: Generate a solved board
  generateSolvedBoard(board);

  let numPrefilled;
  switch (difficulty) {
    case 'easy':
      numPrefilled = 35 + Math.floor(Math.random() * 6); // 35 to 40
      break;
    case 'medium':
      numPrefilled = 28 + Math.floor(Math.random() * 7); // 28 to 34
      break;
    case 'hard':
    default:
      numPrefilled = 22 + Math.floor(Math.random() * 6); // 22 to 27
      break;
  }

  let numRemoved = 81 - numPrefilled;
  while (numRemoved > 0) {
    const row = Math.floor(Math.random() * 9);
    const col = Math.floor(Math.random() * 9);
    if (board[row][col] !== 0) {
      const temp = board[row][col];
      board[row][col] = 0;
        numRemoved--;
    }
  }

  return board;
}

function isValid(board, row, col, num) {
    // Check row
    for (let x = 0; x < board[row].length; x++) {
      if (board[row][x] === num) {
        return false;
      }
    }
  
    // Check column
    for (let x = 0; x < board.length; x++) {
      if (board[x][col] === num) {
        return false;
      }
    }
  
    // Check 3x3 subgrid
    const startRow = row - (row % 3);
    const startCol = col - (col % 3);
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i + startRow][j + startCol] === num) {
          return false;
        }
      }
    }
  
    return true;
  }
  