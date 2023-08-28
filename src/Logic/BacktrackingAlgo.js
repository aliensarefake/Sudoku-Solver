function isValid(board, row, col, num) {
    // Check row
    for (let i = 0; i < 9; i++) {
      if (board[row][i] === num) return false;
    }
  
    // Check column
    for (let i = 0; i < 9; i++) {
      if (board[i][col] === num) return false;
    }
  
    // Check 3x3 grid
    let startRow = row - (row % 3), startCol = col - (col % 3);
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i + startRow][j + startCol] === num) return false;
      }
    }
    
    return true;
  }
  
  export async function solveSudoku(board, setBoard) {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (board[row][col] === 0) {
          for (let num = 1; num <= 9; num++) {
            if (isValid(board, row, col, num)) {
              // Create a new copy of the board
              const newBoard = JSON.parse(JSON.stringify(board));
              newBoard[row][col] = num;
  
              setBoard(newBoard);
              await new Promise(resolve => setTimeout(resolve, 50)); // Delay for visualization
  
              if (await solveSudoku(newBoard, setBoard)) {
                return true;
              }
  
              newBoard[row][col] = 0; // backtrack
              setBoard(newBoard);
              await new Promise(resolve => setTimeout(resolve, 50)); // Delay for visualization
            }
          }
          return false;
        }
      }
    }
    return true; // Sudoku solved
  }