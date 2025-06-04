import Card from "components/Card";
import Titulo from "components/Titulo";
import { useFavoritoContext } from "contextos/Favoritos";
import styles from "./Favoritos.module.css";

function Favoritos() {
  const { favorito } = useFavoritoContext();

  return (
    <>
      <Titulo>
        <h1>Meus Favoritos</h1>
      </Titulo>

      <section className={styles.container}>
        {favorito.length > 0 ? (
          favorito.map((fav) => <Card {...fav} key={fav.id} />)
        ) : (
          <p className={styles.mensagemVazia}>Você ainda não tem favoritos.</p>
        )}
      </section>
    </>
  );
}

export default Favoritos;
