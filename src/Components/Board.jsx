import React, {useState, useEffect} from 'react';
import Cell from './Cell';
import '../Styles/Board.css';
import { generateSudoku } from '../Logic/SudoukuGenerator';
import { isBoardEmpty } from '../Logic/EmptyBoard';
import { solveSudoku } from '../Logic/BacktrackingAlgo';

const Board = ({ difficulty, trigger, reset, start, setStart }) => {
    const [board, setBoard] = useState([]);
    const [boardClass, setBoardClass] = useState("board")

    useEffect(() => {
        const newBoard = generateSudoku(difficulty);
        setBoard(newBoard);
    }, [difficulty, trigger]); 

    useEffect(() => { 
      let newBoard = Array.from({ length: 9 }, () => Array(9).fill(0));
      setBoard(newBoard)
    }, [reset]) 


    useEffect(() => {
      if (start){
        if (isBoardEmpty(board)) {
          setBoardClass("board board-red board-shake");
  
          setTimeout(() => {
            setBoardClass("board");
          }, 500);
        }
        else{
          // backtracking algo
          solveSudoku(JSON.parse(JSON.stringify(board)), setBoard);
        }
      }

    }, [start])

  return (
    <div className={boardClass}>
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
