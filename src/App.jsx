import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./auth/login";
import Register from "./auth/register";
import Entry from "./Home/entry";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/entry" element={<Entry />} />
      </Routes>
    </>
  );
}

export default App;
