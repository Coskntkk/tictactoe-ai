import { useState, useEffect } from 'react';
import axios from 'axios';
import Left from "./components/Left";
import Right from "./components/Right";
import Game from "./components/Game";
import StartButton from "./components/StartButton";
import Loading from './components/Loading';

const apiURL = 'https://tictactoe-ai-api.herokuapp.com';

function Main() {
  const [start, setStart] = useState(false);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (start) {
      let getConfig = {
        method: 'GET',
        url: `${apiURL}/ready`,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
        }
      };
      axios(getConfig)
        .then(res => {
          if (res.data === 'Ready') {
            setIsLoading(false);
          }
        })
        .catch(err => {
          console.log(err);
        })
    }

  }, [start]);

  return (
    <div className="row"> 
      <Left />
      
      {!start && <StartButton setStart={setStart} message={message} />}
      
      {start && isLoading && <Loading />}

      {start && !isLoading && <Game setStart={setStart} message={message} setMessage={setMessage} />}

      <Right />
    </div>
    )
}

export default Main;