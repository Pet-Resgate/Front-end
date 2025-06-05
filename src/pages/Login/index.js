import React from "react";
import "./LoginScreen.css";
import loginImage from "../../assets/Login-image.png";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const navigate = useNavigate();

  const voltarParaHome = () => {
    navigate("/");
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    const params = new URLSearchParams();
    params.append("email", email);
    params.append("senha", senha);

    try {
      const response = await fetch(
        "https://web-production-8da63.up.railway.app/Usuario/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: params.toString(),
        }
      );

      if (!response.ok) {
        throw new Error("Erro ao fazer login");
      }

      const data = await response.json();

      if (data && data.id_usuario) {
        localStorage.setItem("usuarioLogado", JSON.stringify(data));
        navigate("/perfil");
      } else {
        setError("Credenciais inválidas.");
      }
    } catch (err) {
      setError("Erro ao tentar logar. Verifique suas credenciais.");
    } finally {
      setLoading(false);
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
            <button type="submit" disabled={loading}>
              {loading ? "Entrando..." : "Logar"}
            </button>
          </form>
          <p className="register-text">
            Não tem cadastro? <Link to="/cadastro">Cadastrar</Link>
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
