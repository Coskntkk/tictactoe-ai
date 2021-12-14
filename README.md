# TicTacToe AI

TicTacToe AI is a reinforcement learning project inspired by [ MENACE ]( https://en.wikipedia.org/wiki/Matchbox_Educable_Noughts_and_Crosses_Engine ). --a mechanical computer made from 304 matchboxes designed and built by artificial intelligence researcher Donald Michie in 1961--

AI chooses its next move from a database which filled up with all possible moves (~7500). When the game is over, AI removes the last move it played -which caused it to lose- from the database.

If there aren't any available moves that the AI can play, that means the AI can't win in current situation, so after losing the rount with random play, AI removes the previous move from the database.

After enough (i mean too much) games, the AI will eventualy get rid of all losing moves in the database. With no losing moves, the AI won't able to lose again.

## Deployment

Visit Tictactoe AI [**HERE**]( https://tictactoe-ai-coskntkk.vercel.app/ ) to play against the AI.

API deployment is done using [Heroku]( https://www.heroku.com/ ) and Client side deployment is done using [Vercel]( https://vercel.com/ ).


# Tech

- Backend:
    - Node.js
    - Express
    - MongoDB & Mongoose
- Frontend:
    - React
    - Axios

## Installation

1. Clone the project

2. Open db-setup folder and follow instructions in README.md

3. Continue this list after you have setup the database

3. Install dependencies

```
$ cd api
$ npm i
$ cd ..
$ cd client
$ npm i
```

4. Open two terminals and start both severs (api & client)

    3.a. Terminal 1:
    ``` 
    $ cd api
    $ npm start
    ```

    3.b. Terminal 2:
    ``` 
    $ cd client
    $ npm start
    ```

5. Go to `localhost:3000` on your browser

## Roadmap


- [x] API in Node.js
- [x] UI template in React
- [x] Tic Tac Toe mechanics in React
- [x] Mechanics for check game status
- [x] Mechanics for disable move from database
- [x] Handle empty response from API
- [x] Improve Move model
- [x] Put it all together / Make it work
- [x] Improve UI
- [x] DB setup folder
- [x] Deployment
    - [x] Backend
    - [x] Frontend
- [x] Improve README file
- [x] Complete project