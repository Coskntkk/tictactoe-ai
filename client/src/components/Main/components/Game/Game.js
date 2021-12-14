import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Tile from './Tile'
import {getMove, winCheck, removeMove} from './tictactoe';

function Game({setStart, setMessage}) {
    // States
    const [board, setBoard] = useState([" ", " ", " ", " ", " ", " ", " ", " ", " "]);
    const [status, setStatus] = useState({over: false});
    const [userTurn, setUserTurn] = useState(true);
    const [moves, setMoves] = useState([]);

    // When board is changed;
    useEffect(() => {
        // Play AI if it is AI's turn
        const isAiTurn = checkAiTurn();
        if (isAiTurn){
            AI();
        }
    }, [board]); 

    // When status is changed;
    useEffect(() => {
        // If game is over, set message
        if (status.over){
            if (status.winner === "O") {
                setMessage(`You won!`);
            } else if (status.winner === "X") {
                setMessage(`AI won!`);
            } else if (status.winner === "tie") {
                setMessage("Tie!");
            }
            setUserTurn(false);
            setStart(false);
            setMoves([]);
        }
    }, [status]);

    function checkAiTurn() {
        // Checks if it is the AI's turn
        setStatus(winCheck(board));
        const tempBoard = [...board];
        const count = tempBoard.filter(tile => tile === " ").length;
        // If game is not over, board is not empty and it is AI's turn, run AI
        if (!status.over && tempBoard !== [" ", " ", " ", " ", " ", " ", " ", " ", " "] && count %2 === 0) {
            return true;
        } else {
            return false;
        }
    }

    async function AI() {
        // Get board state and request move from db
        let tempBoard = [...board];
        let playIndex = await getMove(tempBoard);
        if (!playIndex) {
            // Remove last move if exists
            if (moves.length > 0) {
                const moveToDelete = moves[moves.length - 1];
                await removeMove(moveToDelete);
            }
            // If no move is found, check if game is over
            setStatus(winCheck(board));
            if (!status.over) {
                //// If game is not over
                // Play random from empty tiles
                let emptyIndexes = [];
                for (let i = 0; i < tempBoard.length; i++) {
                    if (tempBoard[i] === " ") {
                        emptyIndexes.push(i);
                    }
                }
                let randomIndex = emptyIndexes[Math.floor(Math.random() * emptyIndexes.length)];
                AiMove(randomIndex);
            }
        } else {
            // If move is found, play move
            AiMove(playIndex);
        }
    };

    function AiMove(index){
        // Plays the move and updates the board
        let boardCopy = [...board];
        boardCopy[index] = "X";
        // Add move to moves list
        setMoves(moves => [...moves, [boardCopy.join(""), index]]);
        // Set board
        setBoard(boardCopy);
        // Set turn to user
        setUserTurn(true);
    }

    return (
        <div className="game d-flex justify-content-center col-lg-6 col-md-12 col-sm-12">
            <div className="board">
                {board.map((tile, index) => {
                    return <Tile key={nanoid()} value={tile} index={index} board={board} setBoard={setBoard} moves={moves} setMoves={setMoves} userTurn={userTurn} setUserTurn={setUserTurn} />
                })}
            </div>
        </div>
    )
}

export default Game;