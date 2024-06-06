// src/Login.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  const authenticate = async () => {
    try {
      const response = await fetch("http://localhost:5000/users/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: usuario,
          senha: senha,
        }),
      });

      if (response.ok) {
        console.log("Login bem-sucedido!");
      } else {
        console.error("Falha no login");
        alert("Usuário ou senha incorretos. Por favor, tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      alert("Erro inesperado!");
    }
  };

  return (
    <div className="login">
      <div className="form-container">
        <h2>Login</h2>
        <form>
          <label>
            <input
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              placeholder="Digite seu usuário"
            />
          </label>
          <label>
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Digite sua senha"
            />
          </label>
          <button type="button" onClick={authenticate}>
            Entrar
          </button>
        </form>
        <Link to="/register">Cadastre-se</Link>
      </div>
    </div>
  );
};

export default Login;
