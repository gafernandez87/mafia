import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import socketIOClient from "socket.io-client";

// Components
import Lobby from '../Components/Lobby';
import Playing from '../Components/Playing';
import Notification from '../Components/Notification/Notification';

// Style
import styles from "./Game.module.css";

// Utils
import { SESSION_COOKIE } from "../utils/constants";

let socket;
const Game = () => {
  const [game, setGame] = useState(null);
  const [me, setMe] = useState(null);
  const [notification, setNotification] = useState({
    visible: false,
    message: '',
  });
  const [cookies] = useCookies([SESSION_COOKIE]);

  useEffect(() => {
    const sessionId = cookies[SESSION_COOKIE];
    socket = socketIOClient();
    // socket = socketIOClient('http://localhost:4001');

    socket.on("game", (game) => {
      if (game) {
        console.log(game);
        if (game.status === 'game_over') {
          setNotification({
            visible: true,
            message: (
              <>
                <h3>Juego terminado</h3>
                <p style={{ fontSize: '20px', marginBottom: '40px' }}>
                  Ganó {game.winner === 'pueblo' ? 'el pueblo!' : 'la mafia!'}
                </p>
              </>
            ),
          });
        } else {
          setGame(game);
          if (!me) {
            const me = game.players.find(p => p.id === sessionId);
            setMe(me);
          }
          if (game.turn === 'policia') {
            const police = game.players.find(p => p.job === 'policia');
            if (police.status === 'dead') {
              setTimeout(() => {
                socket.emit("changeTurn", { nextTurn: "admin", from: 'policia' });
              }, 3000);
            }
          } else if (game.turn === 'medico') {
            const medic = game.players.find(p => p.job === 'medico');
            if (medic.status === 'dead') {
              setTimeout(() => {
                socket.emit("changeTurn", { nextTurn: "admin", from: 'medico' });
              }, 3000);
            }
          }
        }
      }
    });

    socket.on("investigate", (result) => {
      setNotification({
        visible: true,
        message: (
          <>
            <b style={{ fontSize: '17px' }}>Resultado de la investigacion:</b>
            <h2>{result ? <b style={{ color: 'green' }}>POSITIVO</b> : <b style={{ color: 'red' }}>NEGATIVO</b>}</h2>
          </>
        ),
      });
      socket.emit("changeTurn", { nextTurn: "admin" });
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
      setNotification({
        visible: true,
        message: <h3>Se necesitan al menos 5 jugadores para comenzar</h3>,
      });
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
    changeTurn: (job) => socket.emit('changeTurn', { nextTurn: job }),
    investigate: (who) => socket.emit('investigate', who),
  }

  const closeModal = () => {
    setNotification({ visible: false, message: '' });
  }

  if (!game) return <div>Loading...</div>;

  return (
    <div className={styles.game}>
      <Notification
        visible={notification.visible}
        message={notification.message}
        handleOk={closeModal} />
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
