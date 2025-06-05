import React from "react";
import styles from "./Carregando.module.css";

function Carregando({ texto = "Carregando..." }) {
  return (
    <div className={styles.container}>
      <div className={styles.loader}></div>
      <p>{texto}</p>
    </div>
  );
}

export default Carregando;
