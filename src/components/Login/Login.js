import React from 'react';
import './LoginScreen.css';
import loginImage from '../../assets/Login-image.png'; // Verifique se o caminho está certo
import { useNavigate } from 'react-router-dom'; // ✅ Importa o hook para navegação

function LoginScreen() {
  const navigate = useNavigate(); // ✅ Hook de navegação

  const voltarParaHome = () => {
    navigate('/'); // ✅ Vai para a página inicial
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="login-box">
          <h2 className="project-title">Pet Resgata</h2>
          <h1 className="login-title">Conecte-se</h1>
          <form className="login-form">
            <input type="email" placeholder="E-mail" />
            <input type="password" placeholder="Senha" />
            <button type="submit">Logar</button>
          </form>
          <p className="register-text">
            Não tem cadastro? <a href="/cadastro">cadastrar</a>
          </p>
          {/* ✅ Botão para voltar */}
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

export default LoginScreen;
