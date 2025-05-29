import styles from "./Cabecalho.module.css";
import CabecalhoLink from "components/CabecalhoLink";

function Cabecalho() {
  return (
    <header className={styles.cabecalho}>
      <h2 className={styles.headerTitle}>Pet Resgate</h2>
      <div className={styles.divider}></div>
      <nav>
        <CabecalhoLink url="./">Home</CabecalhoLink>
        <CabecalhoLink url="./Galeria">Adote um Pet</CabecalhoLink>
        <CabecalhoLink url="./">Resgatar Animal</CabecalhoLink>
        <CabecalhoLink url="./">Blog / Dicas</CabecalhoLink>
        <CabecalhoLink url="./sobre">Sobre o Projeto</CabecalhoLink>
        <CabecalhoLink url="./">Fale Conosco</CabecalhoLink>
        <CabecalhoLink url="./Favoritos">Favoritos</CabecalhoLink>
      </nav>
    </header>
  );
}

export default Cabecalho;
