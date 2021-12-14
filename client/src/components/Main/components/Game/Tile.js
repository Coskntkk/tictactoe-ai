import { nanoid } from 'nanoid';

function Tile( {value, index, board, setBoard, moves, setMoves, userTurn, setUserTurn} ) {

    async function play(index) {
        // Play the tile
        if (userTurn) {
            setUserTurn(false);
            const newBoard = [...board];
            newBoard[index] = "O";
            setBoard(newBoard);
        }
    }

    if (value === " ") {
        return (
            <div key={nanoid()} onClick={() => play(index)} className="tile"> 
                <img src="/none.png" alt="empty"/> 
            </div>
        );
    } else {
        return (
            <div key={nanoid()} className="tile"> 
                <img src={`/${value.toLowerCase()}.png`} alt={`${value.toLowerCase()}`}/> 
            </div>
        );
    }
}

export default Tile;