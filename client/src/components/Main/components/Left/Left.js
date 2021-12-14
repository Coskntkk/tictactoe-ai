function Left(){
    return (
        <div className="col-lg-3 col-md-12 col-sm-12 side-frame">
            <h2><strong>TicTacToe AI</strong></h2>

            <p>TicTacToe AI is a reinforcement learning project inspired
            by <a href="https://en.wikipedia.org/wiki/Matchbox_Educable_Noughts_and_Crosses_Engine">MENACE.</a> --a 
            mechanical computer made from 304 matchboxes designed and built by artificial intelligence researcher 
            Donald Michie in 1961--</p>

            <p>AI chooses its next move from a database which filled up with all possible moves (~7500).
             When the game is over, AI removes the last move it played -which caused it to lose- from the database.</p>

            <p>If there aren't any available moves that the AI can play, that means the AI can't win in current situation,
            so after losing the rount with random play, AI removes the previous move from the database. </p>

            <p>After enough (i mean too much) games, the AI will eventualy get rid of all losing moves in the database.
            With no losing moves, the AI won't able to lose again.</p>

            <h4><a href="https://github.com/Coskntkk/tictactoe-ai">See in GitHub</a></h4>
        </div>
    )
}

export default Left;