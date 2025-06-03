import styles from "./Cabecalho.module.css";
import CabecalhoLink from "Components/CabecalhoLink";
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
        <CabecalhoLink url="./Resgatar">Resgatar Animal</CabecalhoLink>
        <CabecalhoLink url="./Blog">Blog / Dicas</CabecalhoLink>
        <CabecalhoLink url="./Sobre">Sobre o Projeto</CabecalhoLink>
        <CabecalhoLink url="./Contato">Fale Conosco</CabecalhoLink>
        <CabecalhoLink url="./Favoritos">Favoritos</CabecalhoLink>
      </nav>
    </header>
  );
}

export default Cabecalho;
