import React, { useEffect, useState } from "react";
import styles from "./Cabecalho.module.css";
import CabecalhoLink from "components/CabecalhoLink";
import { FiUser } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

function Cabecalho() {
  const location = useLocation();
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    setIsLogged(!!localStorage.getItem("usuarioLogado"));
  }, [location]);

  return (
    <header className={styles.cabecalho}>
      <Link to={isLogged ? "/perfil" : "/login"} className={styles.loginIcon}>
        <FiUser size={30} />
      </Link>

      <h2 className={styles.headerTitle}>Pet Resgate</h2>
      <div className={styles.divider}></div>

      <nav className={styles.navLinks}>
        <CabecalhoLink url="/">Home</CabecalhoLink>
        <CabecalhoLink url="/adote">Adote um Pet</CabecalhoLink>
        <CabecalhoLink url="/resgate">Resgatar Animal</CabecalhoLink>
        <CabecalhoLink url="/blog">Blog / Dicas</CabecalhoLink>
        <CabecalhoLink url="/sobre">Sobre o Projeto</CabecalhoLink>
        <CabecalhoLink url="/ajuda">Fale Conosco</CabecalhoLink>
      </nav>
    </header>
  );
}

export default Cabecalho;
