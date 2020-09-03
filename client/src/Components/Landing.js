import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";

// Utils
import apiCall from "../utils/apiCall";
import { SESSION_COOKIE } from "../utils/constants";

// Styles
import styles from "./Landing.module.css";

const allJobs = ['mafia.png', 'medico.png', 'policia.png', 'pueblo.png'];

const Landing = () => {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [_, setCookie] = useCookies([SESSION_COOKIE]);
  const history = useHistory();

  const joinGame = () => {
    apiCall({
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
      <img src={job} alt="roles" />
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
