import React from "react";
import Titulo from "Components/Titulo";
import Card from "Components/Card";
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
    <>
      <Titulo>
        <h1>Adote um Pet</h1>
      </Titulo>
      <div className={styles.container}>
        {pets.map((pet) => (
          <Card key={pet.id} {...pet} imagem={getImagePath(pet.imagem)} />
        ))}
      </div>
    </>
  );
}

export default Galeria;
