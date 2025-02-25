import React from "react";
import { Routes, Route } from "react-router-dom";
import Paciente from "./pages/Paciente";
import EditorPaciente from "./pages/EditorPaciente";
import ActualizacionHistorial from "./pages/ActualizacionHistorial"
import NuevoPaciente from "./pages/NuevoPaciente"
import Home from "./pages/Home"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Paciente" element={<Paciente />} />
        <Route path="/EditorPaciente" element={<EditorPaciente />} />
        <Route path="/ActualizacionHistorial" element={<ActualizacionHistorial />} />
        <Route path="/NuevoPaciente" element={<NuevoPaciente />} />
      </Routes>
    </div>
  );
};

export default App;

