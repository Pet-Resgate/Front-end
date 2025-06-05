import React, { useEffect, useState } from "react";
import Titulo from "components/Titulo";
import Carousel from "components/Carousel";
import logo from "./logo.png";
import styles from "./Inicio.module.css";
import CardPets from "components/CardPets";

function getImagePath(imagem) {
  try {
    return require(`../../${imagem}`);
  } catch {
    return require("../../assets/pets/padrao.png");
  }
}

function Inicio() {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPets() {
      try {
        const response = await fetch(
          "https://web-production-8da63.up.railway.app/Pet/"
        );
        const data = await response.json();
        setPets(data);
      } catch (error) {
        console.error("Erro ao buscar pets:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPets();
  }, []);

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
        <div
          style={{
            backgroundColor: "var(--amarelo_principal)",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={getImagePath("assets/imagem.png")}
            alt="Imagem um"
            height="100%"
          ></img>
        </div>
        <div
          style={{
            backgroundColor: "#fcb61e",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={getImagePath("assets/imagem2.png")}
            alt="Imagem dois"
            height="100%"
          ></img>
        </div>
      </Carousel>
      <h1 className={styles.title}>Bem-vindo ao Pet Resgate</h1>
      <p className={styles.paragrafo}>
        <strong>Transformando vidas, um resgate por vez.</strong>
        <br />
        O Pet Resgate é uma plataforma digital criada para conectar quem
        encontra um animal em situação de abandono com ONGs de proteção animal e
        pessoas dispostas a adotar com responsabilidade. Aqui, você pode
        registrar um pet perdido ou resgatado, acompanhar o processo de
        acolhimento e facilitar sua adoção de forma segura e colaborativa. Nossa
        missão é reduzir o número de animais abandonados nas ruas e fortalecer a
        rede de apoio entre cidadãos, organizações e adotantes. Com uma
        interface simples e acessível, o aplicativo permite o cadastro de
        animais com fotos e localização, filtros inteligentes para adoção,
        perfis completos dos pets, sistema de mensagens, notificações em tempo
        real e muito mais. Junte-se a essa causa e ajude a mudar o destino de
        milhares de animais.
        <br />
        <strong>Resgate. Acolha. Adote. Compartilhe. Inspire.</strong>
      </p>
      <div className={styles.divider}></div>
      <Titulo>
        <h1>Destaques de animais disponíveis</h1>
      </Titulo>
      <div className={styles.container}>
        {loading ? (
          <p>Carregando pets...</p>
        ) : (
          pets
            .filter((pet) => pet.status !== "adotado")
            .slice(0, 6)
            .map((pet) => (
              <CardPets
                id={pet.id_pet}
                nome={pet.nome}
                idade={pet.idade}
                sexo={pet.sexo}
                imagem={getImagePath(
                  `assets/pets/${pet.nome
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
                    .toLowerCase()}.png`
                )}
                nivel_carinhoso={pet.carinhoso}
                nivel_brincalhao={pet.brinca}
                nivel_sociavel={pet.sociavel}
              />
            ))
        )}
      </div>
      <div className={styles.divider}></div>
      <Titulo>
        <h1>Depoimentos e histórias de sucesso</h1>
      </Titulo>
      <Carousel>
        <div className={styles.testimonial}>
          <img src={getImagePath("assets/mural/arya.png")} />
          <div>
            <p>
              “Foi muito bom resgatar a Arya. Ela sempre foi muito carinhosa e
              ficou com a gente desde o primeiro momento que entrou em casa, ela
              era tão pequena e sentiu que ali ficaria segura. Mudou muito
              nossas vidas, é uma ótima companheira.”
            </p>
            <span>- Pais ds Arya, 2025</span>
          </div>
        </div>
        <div className={styles.testimonial}>
          <img src={getImagePath("assets/mural/arya.png")} />
          <div>
            <p>
              “Foi muito bom resgatar a Arya. Ela sempre foi muito carinhosa e
              ficou com a gente desde o primeiro momento que entrou em casa, ela
              era tão pequena e sentiu que ali ficaria segura. Mudou muito
              nossas vidas, é uma ótima companheira.”
            </p>
            <span>- Pais ds Arya, 2025</span>
          </div>
        </div>
      </Carousel>
      <Titulo>
        <h1>Como você pode ajudar?</h1>
      </Titulo>
      <div className={styles.containerAjuda}>
        <div>
          <p className={styles.paragrafoAjuda}>
            Existem várias formas de fazer a diferença na vida de um animal
            resgatado. Você pode contribuir com
            <strong> doações diretas para ONGs</strong>, escolhendo uma
            instituição específica ou permitindo que o sistema direcione sua
            ajuda para onde for mais urgente. Também é possível
            <strong> adotar um pet</strong> e oferecer um lar definitivo cheio
            de carinho, ou se tornar um
            <strong> lar temporário</strong>, acolhendo um animal até que ele
            encontre uma família. Escolha um pet específico ou se candidate para
            receber qualquer animal que precise sair de uma ONG lotada. <br />
            <strong>
              Cada gesto conta. Seja parte dessa rede de cuidado e amor.
            </strong>
            🐾
          </p>
        </div>
        <div>
          <button className={styles.buttonAjuda}>Doar para ONG’s</button>
          <button className={styles.buttonAjuda}>
            Escolha uma ONG para ajudar
          </button>
          <button className={styles.buttonAjuda}>
            Se candidate-se a lar temporário
          </button>
        </div>
      </div>
    </>
  );
}

export default Inicio;
