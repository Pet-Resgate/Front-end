import React from "react";
import Banner from "components/Banner";
import Titulo from "components/Titulo";
import Carousel from "components/Carousel";
import logo from "./logo.png";
import styles from "./Inicio.module.css";
import CardPets from "components/CardPets";
import HorizontalScroll from 'components/HorizontalScroll';
import pets from "json/db.json";

function getImagePath(imagem) {
  try {
    return require(`../../${imagem}`);
  } catch {
    return "";
  }
}

function Inicio() {
  return (
    <>
      <Carousel>
        <div
          style={{
            backgroundColor: "var(--amarelo_principal)",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={logo} alt="Logo do cinetag" height="100%"></img>
        </div>
        <div style={{ height: "100%" }}>
          <Banner imagem="home" />
        </div>
        <div
          style={{
            backgroundColor: "var(--amarelo_principal)",
            height: "100%",
          }}
        >
          Slide 3
        </div>
      </Carousel>
      <Titulo>
        <h1>Destaques de animais disponíveis</h1>
      </Titulo>
      <HorizontalScroll>
        <div className={styles.container}>
          {pets
            .filter((pet) => pet.tipo === "gato")
            .map((pet) => (
              <CardPets key={pet.id} {...pet} imagem={getImagePath(pet.imagem)} />
            ))}
        </div>
      </HorizontalScroll>
      <div className={styles.divider}></div>
      <Titulo>
        <h1>Depoimentos e histórias de sucesso</h1>
      </Titulo>
    </>
  );
}

export default Inicio;
