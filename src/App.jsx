import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Entrar/Login";
import CadastroUsuario from "./Entrar/CadastroUsuario";
import Lancamentos from "./Home/Lancamentos";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastroUsuario" element={<CadastroUsuario />} />
        <Route path="/lancamentos" element={<Lancamentos />} />
      </Routes>
    </>
  );
}

export default App;
