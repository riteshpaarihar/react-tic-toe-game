import React, { useState } from 'react';
import Card from './card/Card';
import "./grid.css";
import isWinner from './isWinner';

export default function TictacGame({ numberOfCard }) {
    const [board, setBoard] = useState(Array(numberOfCard).fill(""));
    const [turn, setTurn] = useState(true);
    const [winner, setWinner] = useState(null);

    function play(index) {
        if (!winner && board[index] === "") {
            const newBoard = [...board];
            newBoard[index] = turn ? "X" : "O";
            setBoard(newBoard);
            setTurn(!turn);

            const win = isWinner(newBoard, turn ? "X" : "O");
            if (win) {
                setWinner(win);
            }
        }
    }

    function reset() {
        setTurn(true);
        setWinner(null);
        setBoard(Array(numberOfCard).fill(""));
    }

    return (
        <div className='grid-con'>
            <div>
                {winner && (
                    <>
                        <h1 className='turn-highlight'>Winner is : {winner} </h1>
                        <button className='reset' onClick={reset}>Reset Game</button>
                    </>
                )}

                <h1 className='turn-highlight'>Current Turn : {turn ? "X" : "O"} </h1>

                <div className='grid'>
                    {board.map((el, idx) => (
                        <Card
                            key={idx}
                            onPlay={() => play(idx)}
                            player={el}
                            index={idx}
                            gameEnd={winner ? true : false}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
