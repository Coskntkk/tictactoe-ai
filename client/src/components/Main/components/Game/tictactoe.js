import axios from "axios";
const apiURL ='https://tictactoe-ai-api.herokuapp.com';

// Takes the board as input and returns a random move
async function getMove(board){
    // Format the board for the API
    let table = board.join("").replace(/ /g, "N");
    let returnData;
    // Set the config for the API call
    const config = {
        method: 'get',
        url: `${apiURL}/moves/${table}`,
        headers: {"Access-Control-Allow-Origin": "*"}
    };
    // Make the API call
    await axios(config)
    .then(function (response) {
        const data = response.data;
        if (data.length === 0) {
            // If the API returns no moves, return null
            returnData = null;
        } else {
            // If the API returns moves, return a random move
            let randomMove = data[Math.floor(Math.random() * data.length)];
            let playIndex = randomMove.target;
            returnData = playIndex;
        }
    })
    .catch(function (error) {
        console.log(error);
    });
    
    return returnData;
}

// Checks if the game is over and define winner
function winCheck(board) {
    if (board[0] === board[1] && board[1] === board[2] && board[0] !== " ") {
        return {over: true, winner: board[0]};
    } else if (board[3] === board[4] && board[4] === board[5] && board[3] !== " ") {
        return {over: true, winner: board[3]};
    } else if (board[6] === board[7] && board[7] === board[8] && board[6] !== " ") {
        return {over: true, winner: board[6]};
    } else if (board[0] === board[3] && board[3] === board[6] && board[0] !== " ") {
        return {over: true, winner: board[0]};
    } else if (board[1] === board[4] && board[4] === board[7] && board[1] !== " ") {
        return {over: true, winner: board[1]};
    } else if (board[2] === board[5] && board[5] === board[8] && board[2] !== " ") {
        return {over: true, winner: board[2]};
    } else if (board[0] === board[4] && board[4] === board[8] && board[0] !== " ") {
        return {over: true, winner: board[0]};
    } else if (board[2] === board[4] && board[4] === board[6] && board[2] !== " ") {
        return {over: true, winner: board[2]};
    } else if ((board.filter((i) => i === " ")).length === 0) {
        return {over: true, winner: "tie"};
    } else {
        return {over: false};
    }
}

// Takes the board and the target to remove move from the db
async function removeMove(moveToDelete) {
    // Format the board for the API
    let boardToDelete = moveToDelete[0].split("");
    let targetToDelete = moveToDelete[1];
    boardToDelete[targetToDelete] = " ";
    let deleteBoard = boardToDelete.join("").replace(/ /g, "N");
    // Set the config for the API call
    const config = {
        method: 'get',
        url: `${apiURL}/moves/${deleteBoard}/${targetToDelete}`,
        headers: {"Access-Control-Allow-Origin": "*"}
    };
    // Make the API call
    await axios(config)
    .catch(function (error) {
        console.log(error);
    });
}

// Exports
export {getMove, winCheck, removeMove};