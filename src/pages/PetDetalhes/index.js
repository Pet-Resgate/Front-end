import { useParams } from "react-router-dom";
import pets from "json/db.json";
import Titulo from "components/Titulo";
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

function PetDetalhe() {
  const { id } = useParams();
  const pet = pets.find((p) => String(p.id) === id);

  if (!pet) return <div>Pet não encontrado</div>;

  return (
    <div>
      <Titulo>
        <h1>Prazer, eu sou o {pet.nome}!</h1>
      </Titulo>
      <div className={styles.container}>
        <img
          src={require(`../../${pet.imagem}`)}
          alt={pet.nome}
          className={styles.imagem}
        />
        <div>
          <p className={styles.descricao}>
            {pet.descricao_full || pet.descricao}
          </p>
          <div className={styles.info}>
            <div>
              {renderNivelFotos("Carinhoso", Number(pet.nivel_carinhoso))}
              {renderNivelFotos("Brincalhão", Number(pet.nivel_brincalhao))}
              {renderNivelFotos("Sociável", Number(pet.nivel_sociavel))}
            </div>
            <div className={styles.informacoes}>
              <div>
                <strong>Informações adicionais:</strong>
              </div>
              <p>
                <strong>Idade:</strong> {pet.idade}
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
