import React, {useState, useEffect} from 'react';
import Cell from './Cell';
import '../Styles/Board.css';
import { generateSudoku } from '../Logic/SudoukuGenerator';

const Board = ({ difficulty, trigger, reset }) => {
    const [board, setBoard] = useState([]);

    useEffect(() => {
        const newBoard = generateSudoku(difficulty);
        setBoard(newBoard);
    }, [difficulty, trigger]); 

    useEffect(() => { 
      let newBoard = Array.from({ length: 9 }, () => Array(9).fill(0));
      setBoard(newBoard)
    }, [reset]) 

  return (
    <div className="board">
      {board.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((cell, cellIndex) => (
            <Cell value={cell} key={cellIndex} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
