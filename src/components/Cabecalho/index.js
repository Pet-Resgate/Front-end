import styles from "./Cabecalho.module.css";
import CabecalhoLink from "components/CabecalhoLink";
import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

function Cabecalho() {
  return (
    <header className={styles.cabecalho}>
      <Link to="/login" className={styles.loginIcon}>
        <FiUser size={30} />
      </Link>

      <h2 className={styles.headerTitle}>Pet Resgate</h2>
      <div className={styles.divider}></div>

      <nav className={styles.navLinks}>
        <CabecalhoLink url="./">Home</CabecalhoLink>
        <CabecalhoLink url="./Galeria">Adote um Pet</CabecalhoLink>
        <CabecalhoLink url="./">Resgatar Animal</CabecalhoLink>
        <CabecalhoLink url="./blog">Blog / Dicas</CabecalhoLink>
        <CabecalhoLink url="./sobre">Sobre o Projeto</CabecalhoLink>
        <CabecalhoLink url="./ajuda">Fale Conosco</CabecalhoLink>
        <CabecalhoLink url="./Favoritos">Favoritos</CabecalhoLink>
        <CabecalhoLink url="./login">Login</CabecalhoLink>
      </nav>
    </header>
  );
}

export default Cabecalho;
