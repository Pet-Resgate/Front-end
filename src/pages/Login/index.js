import React from "react";
import "./LoginScreen.css";
import loginImage from "../../assets/Login-image.png";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const [error, setError] = React.useState("");

  const navigate = useNavigate();

  const voltarParaHome = () => {
    navigate("/");
  };

  const handleLogin = (event) => {
    event.preventDefault();

    const usuarioFalso = {
      email: "usuario@teste.com",
      senha: "123456",
      nome: "João da Silva",
    };

    if (email === usuarioFalso.email && senha === usuarioFalso.senha) {
      localStorage.setItem("usuarioLogado", JSON.stringify(usuarioFalso));
      navigate("/perfil");
    } else {
      setError("E-mail ou senha inválidos.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="login-box">
          <h2 className="project-title">Pet Resgata</h2>
          <h1 className="login-title">Conecte-se</h1>
          <form className="login-form" onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
            {error && (
              <p style={{ color: "red", fontSize: "0.9rem" }}>{error}</p>
            )}
            <button type="submit">Logar</button>
          </form>
          <p className="register-text">
            Não tem cadastro? <a href="/pet-resgate/cadastro">Cadastrar</a>
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

export default Login;
