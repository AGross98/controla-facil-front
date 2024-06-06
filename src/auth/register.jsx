// src/SignUp.js
import React, { useState } from "react";
import "./auth.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const authenticate = async () => {};

  return (
    <div className="login">
      <div className="form-container">
        <h2>Cadastrar Usuário</h2>
        <form>
          <label>
            Nome:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="button" onClick={authenticate}>
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
