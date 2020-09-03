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
    buttons.push(<button
      key="mafia"
      style={{ flexGrow: 1 }}
      className={[styles.smallButton, styles.mafiaButton].join(' ')}
      onClick={() => events.changeTurn('mafia')}
      disabled={mafiaDisabled}>Mafia</button>);
    buttons.push(<button
      key="medico"
      style={{ flexGrow: 1 }}
      className={styles.smallButton}
      onClick={() => events.changeTurn('medico')}
      disabled={medicDisabled}>Medico</button>);
    buttons.push(<button
      key="policia"
      style={{ flexGrow: 1 }}
      className={[styles.smallButton, styles.policeButton].join(' ')}
      onClick={() => events.changeTurn('policia')}
      disabled={policeDisabled}>Policia</button>);
  }
  const newDayEnabled = game.alreadyPlayed.length >= 3 || game.daytime === 'day';
  buttons.push(<button
    key="pass"
    onClick={events.toggleDay}
    className={[styles.smallButton, styles.pass].join(' ')}
    disabled={!newDayEnabled}>Pasar a {newDaytime}</button>);
  buttons.push(<button
    key="kick"
    style={{ flexGrow: 2 }}
    onClick={() => events.kick(target.id)}
    className={styles.smallButton}>Echar {target ? `a ${target.name}` : ''}</button>);
  buttons.push(<button
    key="reset"
    style={{ flexGrow: 2 }}
    onClick={events.reset}
    className={styles.smallButton}>Volver a empezar</button>);

  return [...buttons]
}

const renderButtons = (turn, me, events, target) => {
  if (turn === me.job) {
    const classes = [styles.coolButton];
    switch (me.job) {
      case 'mafia': {
        classes.push(styles.mafiaButton);
        return (
          <button className={classes.join(' ')} onClick={() => events.kill(target.id)}>
            Matar {target ? `a ${target.name}` : ''}
          </button>
        );
      }
      case 'policia': {
        classes.push(styles.policiaButton);
        return (
          <button className={classes.join(' ')} onClick={() => events.investigate(target.id)}>
            Investigar {target ? `a ${target.name}` : ''}
          </button>
        );
      }
      case 'medico': {
        return (
          <button className={classes.join(' ')} onClick={() => events.protect(target.id)}>
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
            const disabled = p.status === 'dead';
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
      <div className={styles.buttons}>
        {renderButtons(game.turn, me, events, target)}
        {me.isAdmin && renderAdmin(game, events, target)}
      </div>
    </>
  )
}

export default Playing;