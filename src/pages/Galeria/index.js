import React, { useState, useEffect } from "react";
import Titulo from "components/Titulo";
import Card from "components/Card";
import Carregando from "components/Carregando";
import styles from "./Galeria.module.css";

function getImagePathPorPet(pet) {
  try {
    return require(`../../assets/pets/${pet.nome
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()}.png`);
  } catch {
    return require("../../assets/pets/padrao.png");
  }
}

function Galeria() {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPets() {
      try {
        const response = await fetch(
          "https://web-production-8da63.up.railway.app/Pet/"
        );
        const data = await response.json();
        console.log("Pets recebidos:", data);
        setPets(data);
      } catch (error) {
        console.error("Erro ao buscar os pets:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPets();
  }, []);

  if (loading) return <Carregando texto="Carregando detalhes do pet..." />;

  return (
    <div className={styles.galeria}>
      <Titulo>
        <h1>Conheça gatinhos</h1>
      </Titulo>
      <div className={styles.container}>
        {pets
          .filter((pet) => pet.animal === "gato")
          .map((pet) => (
            <Card key={pet.id_pet} {...pet} imagem={getImagePathPorPet(pet)} />
          ))}
      </div>
      <Titulo>
        <h1>Conheça cachorrinhos</h1>
      </Titulo>
      <div className={styles.container}>
        {pets
          .filter((pet) => pet.animal === "cachorro")
          .map((pet) => (
            <Card key={pet.id_pet} {...pet} imagem={getImagePathPorPet(pet)} />
          ))}
      </div>
    </div>
  );
}

export default Galeria;
