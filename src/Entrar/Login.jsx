// src/Login.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  const logar = async () => {
    try {
      console.log("usuario ->", usuario, "Senha ->", senha);
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
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };

  return (
    <div className="login">
      <div className="form-container">
        <h2>Login</h2>
        <form>
          <label>
            Usuário:
            <input
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />
          </label>
          <label>
            Senha:
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </label>
          <button type="button" onClick={logar}>
            Login
          </button>
        </form>
        <Link to="/CadastroUsuario">Cadastre-se</Link>
      </div>
    </div>
  );
};

export default Login;
