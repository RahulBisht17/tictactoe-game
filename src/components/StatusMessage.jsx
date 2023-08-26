const StatusMessage=({winner,gamingBoard})=>{
    const {squares, isXnext}=gamingBoard;
    const noMovesLeft=squares.every(squareValue=>squareValue!=null);

    const nextplayer= isXnext ? "X":"O";
    const renderStatusMessage=()=>{
        if(winner){
            return <div>Winner Is <span className={winner=="X"? "text-green": "text-orange" }>{winner}</span></div>
        }
        else if(!winner && noMovesLeft){
            return <div>Game Is Draw</div>
        }
        else{
            return <div>Next Player Is <span className={isXnext?"text-green":"text-orange"}>{nextplayer}</span></div>
        }
    };

    return <div className="status-message">{renderStatusMessage()}</div>;
};

export default StatusMessage;