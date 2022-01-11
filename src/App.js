import React, { useState } from "react";
import "./App.css";
import FormularioTareas from "./componentes/FormularioTareas";
import Header from "./componentes/Header";
import ListaTareas from "./componentes/ListaTareas";

function App() {
  const [tareas, cambiarTareas] = useState([
    {
      id: 1,
      texto: "Lavar la ropa",
      completada: false,
    },
    {
      id: 2,
      texto: "Grabar tutorial",
      completada: false,
    },
    {
      id: 3,
      texto: "Lavar la ropa",
      completada: false,
    },
  ]);

  console.log(tareas);

  return (
    <div className="contenedor">
      <Header />
      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas} />
      <ListaTareas tareas={tareas} cambiarTareas={cambiarTareas} />
    </div>
  );
}

export default App;
