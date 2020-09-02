import React, { useState } from 'react'

// Components 
import Player from './Player';

// Style
import styles from "./Game.module.css";

const renderAdmin = (game, events, target) => {
  const buttons = [];
  const newDaytime = game.daytime === 'day' ? 'noche' : 'dia';

  if (game.daytime === 'night') {
    const policeDisabled = game.alreadyPlayed.includes('policia');
    const medicDisabled = game.alreadyPlayed.includes('medico');
    const mafiaDisabled = game.alreadyPlayed.includes('mafia');
    buttons.push(<button key="mafia" onClick={() => events.changeTurn('mafia')} disabled={mafiaDisabled}>Mafia</button>);
    buttons.push(<button key="medico" onClick={() => events.changeTurn('medico')} disabled={medicDisabled}>Medico</button>);
    buttons.push(<button key="policia" onClick={() => events.changeTurn('policia')} disabled={policeDisabled}>Policia</button>);
  }
  const newDayEnabled = game.alreadyPlayed >= 3 || game.daytime === 'day';
  buttons.push(<button onClick={events.toggleDay} key="pass" disabled={!newDayEnabled}>Pasar a {newDaytime}</button>);
  buttons.push(<button onClick={() => events.kick(target.id)} key="kick">Echar {target ? `a ${target.name}` : ''}</button>);
  buttons.push(<button onClick={events.reset} key="reset">Volver a empezar</button>);

  return [...buttons]
}

const renderButtons = (turn, me, events, target) => {
  if (turn === me.job) {
    switch (me.job) {
      case 'mafia': {
        return (
          <button onClick={() => events.kill(target.id)}>
            Matar {target ? `a ${target.name}` : ''}
          </button>
        );
      }
      case 'policia': {
        return (
          <button onClick={() => events.investigate(target.id)}>
            Investigar {target ? `a ${target.name}` : ''}
          </button>
        );
      }
      case 'medico': {
        return (
          <button onClick={() => events.protect(target.id)}>
            Proteger {target ? `a ${target.name}` : ''}
          </button>
        );
      }
      default: return null;
    }
  }
  return null;
}


const Playing = ({ game, me, events }) => {
  const [target, setTarget] = useState(null);

  const selectTarget = (who) => {
    const target = game.players.find(p => p.id === who);
    setTarget(target);
  }

  if (!me) return <div>Loading...</div>;
  return (
    <>
      <h2 className={styles.title}>Juego en curso</h2>
      {game.turn !== 'admin' && <h4 className={styles.subtitle}>Es el turno de <b>{game.turn}</b></h4>}
      <div className={[styles.playerList, styles.day].join(' ')}>
        <ul>
          {game.players.map((p) => {
            if (p.isAdmin) return null;
            const selected = me.job === game.turn && target && target.id === p.id;
            const disabled = p.status === 'dead' || p.id === me.id;
            return (
              <Player
                key={p.id}
                player={p}
                me={me}
                handleClick={selectTarget}
                selected={selected}
                disabled={disabled}
              />
            )
          })}
        </ul>
      </div>
      {renderButtons(game.turn, me, events, target)}
      {me.isAdmin && renderAdmin(game, events, target)}
    </>
  )
}

export default Playing;