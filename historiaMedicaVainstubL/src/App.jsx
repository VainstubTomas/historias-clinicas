import React from "react";
import { Routes, Route } from "react-router-dom";
import Paciente from "./pages/Paciente";
import Home from "./pages/Home"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Paciente" element={<Paciente />} />
      </Routes>
    </div>
  );
};

export default App;

