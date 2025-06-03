import React from "react";
import Titulo from "components/Titulo";
import Card from "components/Card";
import styles from "./Galeria.module.css";
import pets from "json/db.json";

function getImagePath(imagem) {
  try {
    return require(`../../${imagem}`);
  } catch {
    return "";
  }
}

function Galeria() {
  return (
    <div className={styles.galeria}>
      <Titulo>
        <h1>Conheça gatinhos</h1>
      </Titulo>
      <div className={styles.container}>
        {pets
          .filter((pet) => pet.tipo === "gato")
          .map((pet) => (
            <Card key={pet.id} {...pet} imagem={getImagePath(pet.imagem)} />
          ))}
      </div>
      <Titulo>
        <h1>Conheça cachorrinhos</h1>
      </Titulo>
      <div className={styles.container}>
        {pets
          .filter((pet) => pet.tipo === "cachorro")
          .map((pet) => (
            <Card key={pet.id} {...pet} imagem={getImagePath(pet.imagem)} />
          ))}
      </div>
    </div>
  );
}

export default Galeria;
