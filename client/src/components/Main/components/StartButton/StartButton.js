function StartButton({setStart, message}) {

    return (
        <div className="col-lg-6 col-md-6 col-sm-12 start-screen">
            <div className="center">
                <h1>{message}</h1>
                <button className="btn btn-lg btn-success" onClick={() => setStart(true)}>{!message ? "Start Game" : "Play Again"}</button>
            </div>
        </div>
    )
}

export default StartButton;