import React from 'react';

// Style
import styles from "./Game.module.css";

const renderJob = (player, me) => {
  let job = player.status;
  if (me.isAdmin || player.id == me.id) {
    job = player.job;
  }
  return <span className={styles.job}>{job}</span>;
}

const Player = ({ player, me, handleClick, selected, disabled }) => {
  const classes = [styles.player];
  if (selected) classes.push(styles.selected);
  if (disabled) classes.push(styles.disabled);
  return (
    <li className={classes.join(' ')} onClick={() => !disabled && handleClick(player.id)}>
      <span>{player.name}</span>
      {renderJob(player, me)}
    </li>
  );
};

export default Player;