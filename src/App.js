import './App.css';
import React, {useState} from 'react';
import Board from './Components/Board';

function App() {
  const [difficulty, setDifficulty] = useState('easy');
  const [trigger, setTrigger] = useState(false);
  const [reset, setReset] = useState(false);

  return (
    <div className='App'>
      <h1 className='App-title'>SUDOKU SOLVER</h1>
      <div className='button-row'>
        <span className="difficultyButton easy" onClick={() => { setDifficulty('easy'); setTrigger(!trigger); }}><span className='text'>Easy</span></span>
        <span className="difficultyButton medium" onClick={() => { setDifficulty('medium'); setTrigger(!trigger); }}><span className='text'>Medium</span></span>
        <span className="difficultyButton hard" onClick={() => { setDifficulty('hard'); setTrigger(!trigger); }}><span className='text'>Hard</span></span>
        <img src="refresh.png" className="refreshButton" alt="refresh button" onClick={() =>{setReset(!reset)}}></img>
      </div>
      <Board difficulty={difficulty} trigger={trigger} reset={reset}/>
    </div>
  );
} 

export default App;
