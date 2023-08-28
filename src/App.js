import './App.css';
import React, {useState} from 'react';
import Board from './Components/Board';

function App() {
  const [difficulty, setDifficulty] = useState('easy');
  const [trigger, setTrigger] = useState(false);
  const [reset, setReset] = useState(false);
  const [start, setStart] = useState(false)
  
  return (
    <div className='App'>
      <h1 className='App-title'>SUDOKU SOLVER</h1>
      <div className='button-row'>
        <span className="difficultyButton easy" onClick={() => { setDifficulty('easy'); setTrigger(!trigger); }}><span className='text'>Easy</span></span>
        <span className="difficultyButton medium" onClick={() => { setDifficulty('medium'); setTrigger(!trigger); }}><span className='text'>Medium</span></span>
        <span className="difficultyButton hard" onClick={() => { setDifficulty('hard'); setTrigger(!trigger); }}><span className='text'>Hard</span></span>
        <span className="iconButton" onClick={() => {setStart(!start); console.log(start)}}>
          <svg className='startButton' xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16"> <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/> </svg>
        </span>
        <span className="iconButton">
          <img src="refresh.png" className="refreshButton" alt="refresh button" onClick={() =>{setReset(!reset)}}></img>
        </span>        
      </div>
      <Board difficulty={difficulty} trigger={trigger} reset={reset} start={start}/>
      
    </div>
  );
} 

export default App;
