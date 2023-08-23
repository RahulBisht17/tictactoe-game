import { calculateWinner } from './components/winner';
import Board from './components/Board';
import { useState } from 'react';
import './style.scss'
import StatusMessage from './components/StatusMessage';

function App() {
  const [squares,setSquares]= useState(Array(9).fill(null));
  const [isXnext, setisXnext]=useState(false);

  const winner =calculateWinner(squares);
    
  const handleSquareClick = clickedPosition =>{
      if(squares[clickedPosition] || winner){
          return;
      }
      setSquares(currentSquares=>{
          return currentSquares.map((squareValue, position)=>{
              if (clickedPosition == position){
                  return isXnext ? "X":"O";
              }
              return squareValue;
          });
      });
      setisXnext((curr) => !curr);
  };

  return ( 
    <div className='app'>
      <StatusMessage winner={winner} isXnext={isXnext} squares={squares}/>
      <Board squares={squares} handleSquareClick={handleSquareClick}/>
    </div>
  );
}
export default App
