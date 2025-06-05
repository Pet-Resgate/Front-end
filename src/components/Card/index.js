import { useFavoritoContext } from "contextos/Favoritos";
import styles from "./Card.module.css";
import iconeFavoritar from "./favoritar.png";
import iconeDesfavoritar from "./desfavoritar.png";
import { useNavigate } from "react-router-dom";

function Card({ id_pet, nome, descricao, imagem }) {
  const { favorito, adicionarFavorito } = useFavoritoContext();
  const ehFavorito = favorito.some((fav) => fav.id_pet === id_pet);
  const icone = !ehFavorito ? iconeFavoritar : iconeDesfavoritar;
  const navigate = useNavigate();

  function handleCardClick() {
    navigate(`/pet/${id_pet}`);
  }

  return (
    <div
      className={styles.card}
      onClick={handleCardClick}
      style={{ cursor: "pointer" }}
    >
      <img src={imagem} alt={nome} className={styles.imagem} />
      <div className={styles.texto}>
        <div className={styles.header}>
          <h2 className={styles.nome}>{nome}</h2>
          <img
            src={icone}
            alt="Favoritar"
            className={styles.favoritar}
            onClick={(e) => {
              e.stopPropagation();
              adicionarFavorito({ id_pet, nome, descricao, imagem });
            }}
          />
        </div>
        <p className={styles.descricao}>{descricao}</p>
      </div>
    </div>
  );
}

export default Card;
