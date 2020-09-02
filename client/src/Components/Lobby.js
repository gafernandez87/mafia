import React from 'react'

// Style
import styles from "./Game.module.css";

const Lobby = ({ players, adminSelect, initGame }) => {
  return (
    <>
      <h4>Jugadores</h4>
      <div className={styles.adminSelect}>
        <label>Moderador</label>
        <select onChange={e => adminSelect(e.target.value)}>
          <option value="">Seleccionar...</option>
          {players.map((p) => {
            return <option key={p.name} value={p.name}>{p.name}</option>
          })}
        </select>
      </div>
      <ul>
        {players.map((p) => (
          <li key={p.id}>{p.name} {p.isAdmin ? ' -> A' : ''}</li>
        ))}
      </ul>
      <button onClick={initGame}>Empezar</button>
    </>
  )
}

export default Lobby;