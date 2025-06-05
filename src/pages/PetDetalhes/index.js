import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Titulo from "components/Titulo";
import Carregando from "components/Carregando";
import styles from "./PetDetalhes.module.css";
import brincalhaoIcon from "assets/brincalhao.svg";
import carinhosoIcon from "assets/carinhoso.svg";
import sociavelIcon from "assets/sociavel.svg";

const categoriaIcone = {
  Carinhoso: carinhosoIcon,
  Brincalhão: brincalhaoIcon,
  Sociável: sociavelIcon,
};

function renderNivelFotos(label, nivel) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <div style={{ fontWeight: "bold", marginBottom: 4 }}>{label}</div>
      <div style={{ display: "flex", gap: "1rem" }}>
        {[1, 2, 3].map((i) => (
          <div key={i} className={styles.renderNivelFotos}>
            <img
              src={categoriaIcone[label]}
              alt={label}
              style={{
                width: 60,
                height: 50,
                objectFit: "contain",
                borderRadius: 6,
                opacity: 1,
                filter: i <= nivel ? "none" : "grayscale(1) brightness(0.7)",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function getImagePathPorPet(pet) {
  try {
    return require(`../../assets/pets/${pet.nome.toLowerCase()}.png`);
  } catch {
    return require("../../assets/pets/padrao.png");
  }
}

function PetDetalhe() {
  const { id } = useParams();
  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPet() {
      try {
        const response = await fetch(
          `https://web-production-8da63.up.railway.app/Pet/${id}`
        );
        const data = await response.json();
        setPet(data);
      } catch (error) {
        console.error("Erro ao buscar o pet:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPet();
  }, [id]);

  if (loading) return <Carregando texto="Carregando detalhes do pet..." />;
  if (!pet) return <div>Pet não encontrado</div>;

  return (
    <div>
      <Titulo>
        <h1>Prazer, eu sou o {pet.nome}!</h1>
      </Titulo>
      <div className={styles.container}>
        <img
          src={getImagePathPorPet(pet)}
          alt={pet.nome}
          className={styles.imagem}
        />
        <div>
          <p className={styles.descricao}>{pet.descricao}</p>
          <div className={styles.info}>
            <div>
              {renderNivelFotos("Carinhoso", Number(pet.carinhoso))}
              {renderNivelFotos("Brincalhão", Number(pet.brinca))}
              {renderNivelFotos("Sociável", Number(pet.sociavel))}
            </div>
            <div className={styles.informacoes}>
              <div>
                <strong>Informações adicionais:</strong>
              </div>
              <p>
                <strong>Idade:</strong> {pet.idade}{" "}
                {Number(pet.idade) > 1 ? "anos" : "ano"}
              </p>
              <p>
                <strong>Sexo:</strong> {pet.sexo}
              </p>
            </div>
          </div>
          <button className={styles.botaoAdotar}>Quero adotar!</button>
        </div>
      </div>
    </div>
  );
}

export default PetDetalhe;
