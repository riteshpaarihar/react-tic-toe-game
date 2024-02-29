import React, { useState } from 'react'
import Card  from './card/Card'
import "./grid.css"
import isWinner from './isWinner'
export default function TictacGame({nunberOfCard}) {

    const [board, setBoard]=useState(Array(nunberOfCard).fill(""))
    const [turn, setTern]=useState(true)
const [winner,setWinner]=useState(null)
  function play(index){
     if(turn===true){
        board[index]="O"
    }else{
        board[index]="X"
    }

    const win=isWinner(board,turn?"X":"O")
    if(win){
        setWinner(win)
    }
    setBoard([...board])
    setTern(!turn)
}

function reset(){
setTern(true)
setWinner(null)
    setBoard(Array(nunberOfCard).fill(""))
}

  return (
    <div className='grid-con'>
    <div>
    {winner &&(
      <>
      <h1 className='turn-highlight'>Winner is : {winner} </h1>
       <button className='reset' onClick={reset}>Reset Game</button>
      </>
    )}

    <h1 className='turn-highlight'>Current Turn : {turn?"X":"O"} </h1>

    <div className='grid'>
      {board.map((el,idx)=><Card key={idx} onPlay={play} player={el} index={idx} />)}
    </div>
    </div>
    </div>
  
  )
}
