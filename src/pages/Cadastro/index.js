import React from "react";
import { useNavigate } from "react-router-dom";
import loginImage from "../../assets/Login-image.png";
import styles from "./Cadastro.module.css";

function Cadastro() {
  const navigate = useNavigate();

  const voltarParaHome = () => {
    navigate("/");
  };
  return (
    <div className="login-container">
      <div className="login-left">
        <div className="login-box">
          <h2 className="project-title">Pet Resgata</h2>
          <h1 className="login-title">Cadastre-se</h1>
          <form className="login-form">
            <input type="email" placeholder="E-mail" />
            <input type="password" placeholder="Senha" />
            <input type="password" placeholder="Confirme Senha" />
            <button type="submit">Cadastrar</button>
          </form>
          <p className="register-text">
            Já tem cadastro? <a href="/pet-resgate/login">Conecte-se</a>
          </p>
          <button onClick={voltarParaHome} className="back-button">
            Voltar para a Home
          </button>
        </div>
      </div>
      <div className="login-right">
        <img src={loginImage} alt="Pets felizes" />
      </div>
    </div>
  );
}
export default Cadastro;
