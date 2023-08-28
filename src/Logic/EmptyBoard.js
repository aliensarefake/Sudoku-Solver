export function isBoardEmpty(board) {
    for (let row of board) {
      for (let cell of row) {
        if (cell !== 0) {
          return false;
        }
      }
    }
    return true;
  }