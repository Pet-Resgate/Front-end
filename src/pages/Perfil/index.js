import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Perfil.module.css";

function Perfil() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("usuarioLogado");
    navigate("/");
  };

  const handleGoToFavoritos = () => {
    navigate("/favoritos");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Perfil do Usuário</h1>

      <div className={styles.botoes}>
        <button className={styles.botao} onClick={handleGoToFavoritos}>
          Meus Favoritos
        </button>

        <button className={styles.botaoLogout} onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Perfil;
