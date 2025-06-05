import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginImage from "../../assets/Login-image.png";
import styles from "./Cadastro.module.css";

function Cadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cpf, setCpf] = useState("");

  const [error, setError] = useState("");
  const [mensagem, setMensagem] = useState("");

  const navigate = useNavigate();

  const handleCadastro = async (e) => {
    e.preventDefault();

    if (senha !== confirmarSenha) {
      setError("As senhas não coincidem.");
      return;
    }

    const dados = {
      tipo_usuario: "Cidadao",
      email,
      senha,
      nome,
      idade: parseInt(idade),
      telefone,
      cpf,
      cnpj: null,
    };

    try {
      const response = await fetch(
        "https://web-production-8da63.up.railway.app/Usuario/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dados),
        }
      );

      const data = await response.json();

      if (response.ok) {
        const formBody = new URLSearchParams();
        formBody.append("email", email);
        formBody.append("senha", senha);

        const loginResponse = await fetch(
          "https://web-production-8da63.up.railway.app/Usuario/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: formBody.toString(),
          }
        );

        const loginData = await loginResponse.json();

        if (loginResponse.ok) {
          localStorage.setItem("usuarioLogado", JSON.stringify(loginData));
          navigate("/perfil");
        } else {
          setMensagem(
            "Cadastro feito, mas erro ao logar: " + loginData.message
          );
        }
      }
    } catch (err) {
      setError("Erro na conexão com o servidor.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="login-box">
          <h2 className="project-title">Pet Resgata</h2>
          <h1 className="login-title">Cadastre-se</h1>
          <form className="login-form" onSubmit={handleCadastro}>
            <input
              type="text"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="Idade"
              value={idade}
              onChange={(e) => setIdade(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Telefone"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="CPF"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Confirme Senha"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
              required
            />
            {error && <p style={{ color: "red" }}>{error}</p>}
            {mensagem && <p style={{ color: "green" }}>{mensagem}</p>}
            <button type="submit">Cadastrar</button>
          </form>
          <p className="register-text">
            Já tem cadastro? <Link to="/login">Conecte-se</Link>
          </p>
        </div>
      </div>
      <div className="login-right">
        <img src={loginImage} alt="Pets felizes" />
      </div>
    </div>
  );
}

export default Cadastro;
