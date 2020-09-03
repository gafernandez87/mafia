import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";

// Utils
import apiCall from "../utils/apiCall";
import { SESSION_COOKIE } from "../utils/constants";

// Styles
import styles from "./Landing.module.css";

const Landing = () => {
  const [name, setName] = useState("");
  const [_, setCookie] = useCookies(["mafia-session-id"]);
  const history = useHistory();

  const joinGame = () => {
    apiCall(`http://localhost:4001/api/players`, {
      method: "POST",
      body: JSON.stringify({ name: name }),
    })
      .then((player) => {
        setCookie(SESSION_COOKIE, player.id);
        history.push(`/game`)
      })
      .catch((err) => console.log("Error while creating room", err));
  };

  return (
    <div className={styles.landing}>
      <h2 className={styles.title}>Mafia!</h2>
      <section className={styles.newRoom}>
        <p className={styles.subtitle}>Ingresa tu nombre</p>
        <label className={styles.roomName}>Nombre</label>
        <input
          type="text"
          className={styles.input}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className={styles.button} onClick={joinGame}>
          Unirse al juego
        </button>
      </section>
    </div>
  );
};

export default Landing;
