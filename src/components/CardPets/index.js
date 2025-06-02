import { useFavoritoContext } from "contextos/Favoritos";
import styles from "./CardPets.module.css";
import iconeFavoritar from "./favoritar.png";
import iconeDesfavoritar from "./desfavoritar.png";
import { useNavigate } from "react-router-dom";
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
    <div>
      <div style={{ display: "flex", gap: "0.5rem" }}>
        {[1, 2, 3].map((i) => (
          <div key={i} className={styles.renderNivelFotos}>
            <img
              src={categoriaIcone[label]}
              alt={label}
              style={{
                width: 30,
                height: 30,
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

function CardPets({
  id,
  nome,
  idade,
  sexo,
  imagem,
  nivel_carinhoso,
  nivel_brincalhao,
  nivel_sociavel,
}) {
  const { favorito, adicionarFavorito } = useFavoritoContext();
  const ehFavorito = favorito.some((fav) => fav.id === id);
  const icone = !ehFavorito ? iconeFavoritar : iconeDesfavoritar;
  const navigate = useNavigate();

  function handleCardClick() {
    navigate(`/pet/${id}`);
  }

  return (
    <div
      className={styles.card}
      onClick={handleCardClick}
      style={{ cursor: "pointer" }}
    >
      <img src={imagem} alt={nome} className={styles.imagem} />
      <div className={styles.info}>
        <div className={styles.descricao}>
          <h2 className={styles.nome}>{nome}</h2>
          <p className={styles.idade}>±{idade}</p>
          <p className={styles.sexo}>{sexo}</p>
        </div>
        <div>
          {renderNivelFotos("Carinhoso", Number(nivel_carinhoso))}
          {renderNivelFotos("Brincalhão", Number(nivel_brincalhao))}
          {renderNivelFotos("Sociável", Number(nivel_sociavel))}
        </div>
      </div>
    </div>
  );
}

export default CardPets;
