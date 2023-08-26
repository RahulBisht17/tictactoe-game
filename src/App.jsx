import { calculateWinner } from './components/winner';
import Board from './components/Board';
import { useState } from 'react';
import './style.scss'
import History from './components/History';
import StatusMessage from './components/StatusMessage';

function App() {
  const [history,setHistory]=useState([{squares:Array(9).fill(null), isXnext:false}]);
  const [currentMove, setCurrentMove]=useState(0);
  const gamingBoard=history[currentMove];

  const winner =calculateWinner(gamingBoard.squares);

  const handleSquareClick = clickedPosition =>{
      if(gamingBoard.squares[clickedPosition] || winner){
          return;
      }
      setHistory(currentHistory=>{
        const isTraversing=currentMove+1 != currentHistory.length;

        const lastGamingState= isTraversing ?
        currentHistory[currentMove]
        : currentHistory[currentHistory.length-1];

          const nextSquaresState=lastGamingState.squares.map((squareValue, position)=>{
              if (clickedPosition == position){
                  return lastGamingState.isXnext ? "X":"O";
              }
              return squareValue;
          });

          const base= isTraversing
          ? currentHistory.slice(0,currentHistory.indexOf(lastGamingState)+1)
          : currentHistory;

          return base.concat({squares: nextSquaresState, isXnext:!lastGamingState.isXnext});
      });
      setCurrentMove(move=>move+1);
  };

  const moveTo=move=>{
    setCurrentMove(move);
  }
  return ( 
    <div className='app'>
      <StatusMessage winner={winner} gamingBoard={gamingBoard}/>
      <Board squares={gamingBoard.squares} handleSquareClick={handleSquareClick}/>
      <h2>Game History</h2>
      <History history={history} moveTo={moveTo} currentMove={currentMove}/>
    </div>
  );
}
export default App
