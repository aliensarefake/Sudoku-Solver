export function generateSudoku(difficulty) {
    let board = Array.from({ length: 9 }, () => Array(9).fill(0));
    let numPrefilled;
  
    switch (difficulty) {
      case 'easy':
        numPrefilled = Math.floor(Math.random() * 6) + 35; // 35 to 40
        break;
      case 'medium':
        numPrefilled = Math.floor(Math.random() * 7) + 28; // 28 to 34
        break;
      case 'hard':
      default:
        numPrefilled = Math.floor(Math.random() * 6) + 22; // 22 to 27
        break;
    }
  
    while (numPrefilled > 0) {
      const row = Math.floor(Math.random() * 9);
      const col = Math.floor(Math.random() * 9);
      const num = Math.floor(Math.random() * 9) + 1;
  
      // Check if number can be placed here
      if (board[row][col] === 0 && isValid(board, row, col, num)) {
        board[row][col] = num;
        numPrefilled--;
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
  