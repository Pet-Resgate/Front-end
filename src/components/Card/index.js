import { useFavoritoContext } from "contextos/Favoritos";
import styles from "./Card.module.css";
import iconeFavoritar from "./favoritar.png";
import iconeDesfavoritar from "./desfavoritar.png";

function Card({ id, nome, descricao, imagem }) {
  const { favorito, adicionarFavorito } = useFavoritoContext();
  const ehFavorito = favorito.some((fav) => fav.id === id);
  const icone = !ehFavorito ? iconeFavoritar : iconeDesfavoritar;

  return (
    <div className={styles.card}>
      <img src={imagem} alt={nome} className={styles.imagem} />
      <div className={styles.texto}>
        <div className={styles.header}>
          <h2 className={styles.nome}>{nome}</h2>
          <img
            src={icone}
            alt="Favoritar"
            className={styles.favoritar}
            onClick={() => adicionarFavorito({ id, nome, descricao, imagem })}
          />
        </div>
        <p>{descricao}</p>
      </div>
    </div>
  );
}

export default Card;
