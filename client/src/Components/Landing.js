import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";

// Utils
import apiCall from "../utils/apiCall";
import { SESSION_COOKIE } from "../utils/constants";

// Styles
import styles from "./Landing.module.css";

const allJobs = ['mafia', 'medico', 'policia', 'pueblo'];

const Landing = () => {
  const [name, setName] = useState("");
  const [job, setJob] = useState(null);
  const [_, setCookie] = useCookies([SESSION_COOKIE]);
  const history = useHistory();

  const joinGame = () => {
    apiCall(`/api/players`, {
      // apiCall(`http://localhost:4001/api/players`, {
      method: "POST",
      body: JSON.stringify({ name: name }),
    })
      .then((player) => {
        setCookie(SESSION_COOKIE, player.id);
        history.push(`/game`)
      })
      .catch((err) => console.log("Error while creating room", err));
  };

  useEffect(() => {
    changeJob();
  }, []);

  const changeJob = () => {
    const job = allJobs.shift();
    setJob(job);
    allJobs.push(job);
    setTimeout(() => {
      changeJob();
    }, 1000);
  }

  return (
    <div className={styles.landing}>
      <h1 className={styles.title}>MAFIA</h1>
      <img src="mafia.png" alt="roles" style={{ display: job === 'mafia' ? 'block' : 'none' }} />
      <img src="medico.png" alt="roles" style={{ display: job === 'medico' ? 'block' : 'none' }} />
      <img src="policia.png" alt="roles" style={{ display: job === 'policia' ? 'block' : 'none' }} />
      <img src="pueblo.png" alt="roles" style={{ display: job === 'pueblo' ? 'block' : 'none' }} />
      <input
        type="text"
        value={name}
        placeholder="NOMBRE"
        className={styles.input}
        onChange={(e) => setName(e.target.value)}
      />
      <button className={styles.coolButton} onClick={joinGame} >
        Unirse al juego
      </button>
    </div>
  );
};

export default Landing;
