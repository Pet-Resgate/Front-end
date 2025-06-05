import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Perfil.module.css";
import userIcon from "assets/user-placeholder.png";

function Perfil() {
  const navigate = useNavigate();
  const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

  const handleLogout = () => {
    localStorage.removeItem("usuarioLogado");
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.fotoContainer}>
          <img
            src={userIcon}
            alt="Foto do usuário"
            className={styles.fotoUsuario}
          />
        </div>

        <h2 className={styles.nome}>{usuarioLogado?.nome || "Usuário"}</h2>
        <p className={styles.email}>
          {usuarioLogado?.email || "email@exemplo.com"}
        </p>

        <div className={styles.botoes}>
          <button
            onClick={() => navigate("/favoritos")}
            className={styles.button}
          >
            ⭐ Meus Favoritos
          </button>
          <button
            onClick={() => alert("Função ainda não disponível")}
            className={styles.button}
          >
            🐾 Meus Pets
          </button>
          <button
            onClick={() => alert("Função ainda não disponível")}
            className={styles.button}
          >
            ✏️ Editar Perfil
          </button>
          <button
            onClick={() => alert("Função ainda não disponível")}
            className={styles.button}
          >
            ⚙️ Configurações
          </button>
          <button className={styles.logout} onClick={handleLogout}>
            🚪 Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
