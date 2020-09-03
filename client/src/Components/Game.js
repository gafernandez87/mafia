import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import socketIOClient from "socket.io-client";

// Components
import Lobby from '../Components/Lobby';
import Playing from '../Components/Playing';

// Style
import styles from "./Game.module.css";

// Utils
import { SESSION_COOKIE } from "../utils/constants";

let socket;
const Game = () => {
  const [game, setGame] = useState(null);
  const [me, setMe] = useState(null);
  const [cookies] = useCookies([SESSION_COOKIE]);

  useEffect(() => {
    const sessionId = cookies[SESSION_COOKIE];
    socket = socketIOClient();
    // socket = socketIOClient('http://localhost:4001');

    socket.on("game", (game) => {
      if (game) {
        console.log(game);
        if (game.status === 'game_over') {
          alert("Ganó " + game.winner);
        } else {
          setGame(game);
          const me = game.players.find(p => p.id === sessionId);
          setMe(me);
        }
      }
    });

    socket.on("investigate", (result) => {
      alert('Resultado: ' + result);
      socket.emit("changeTurn", "admin");
    });
  }, []);


  const emit = (event) => {
    socket.emit(event);
  }

  const adminSelect = (value) => {
    socket.emit('setAdmin', value);
  }

  const initGame = () => {
    if (game.players.length < 5) {
      alert("Se necesitan al menos 5 jugadores para comenzar");
    } else {
      emit('beginGame');
    }
  }

  const events = {
    reset: () => emit('reset'),
    toggleDay: () => emit('toggleDay'),
    kick: (who) => socket.emit('kick', who),
    kill: (who) => socket.emit('kill', who),
    protect: (who) => socket.emit('protect', who),
    changeTurn: (job) => socket.emit('changeTurn', job),
    investigate: (who) => socket.emit('investigate', who),
  }

  if (!game) return <div>Loading...</div>;

  return (
    <div className={styles.game}>
      {game.status === 'new' &&
        <Lobby
          players={game.players}
          initGame={initGame}
          adminSelect={adminSelect} />
      }

      {game.status === 'in_progress' &&
        <Playing me={me} game={game} events={events} />
      }
    </div>
  );
};

export default Game;
