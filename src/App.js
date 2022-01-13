import React, { useEffect, useState } from "react";
import "./App.css";
import FormularioTareas from "./componentes/FormularioTareas";
import Header from "./componentes/Header";
import ListaTareas from "./componentes/ListaTareas";

function App() {
  // Obtenemos las tareasGuardads de localStorage
  // Si existe la variable tareas en el localStorage entonces lo parseamos a objeto ya que actualmente es una cadena de texto
  const tareasGuardadas = localStorage.getItem("tareas")
    ? JSON.parse(localStorage.getItem("tareas"))
    : [];

  // Establecemos el estado de las tareas.
  const [tareas, cambiarTareas] = useState(tareasGuardadas);

  // Guardando el estado dentro de localStorage
  useEffect(() => {
    // Guardamos en localStorage una variable llamada 'tareas' y adentro le pasamos el estado 'tareas' convertido a cadena de texto para que lo pueda guardar
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  // Accedemos a localStorage y comprobamos si mostrarCompletadas es null
  let configMostrarCompletadas = "";
  if (localStorage.getItem("mostrarCompletadas") === null) {
    configMostrarCompletadas = true;
  } else {
    configMostrarCompletadas =
      localStorage.getItem("mostrarCompletadas") === "true";
  }

  // Estado para las tareas completadas
  const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(
    configMostrarCompletadas
  );

  useEffect(() => {
    // Con toString transformamos a texto mostrarCompletadas que es un boleano
    localStorage.setItem("mostrarCompletadas", mostrarCompletadas.toString());
  }, [mostrarCompletadas]);

  return (
    <div className="contenedor">
      <Header
        mostrarCompletadas={mostrarCompletadas}
        cambiarMostrarCompletadas={cambiarMostrarCompletadas}
      />
      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas} />
      <ListaTareas
        tareas={tareas}
        cambiarTareas={cambiarTareas}
        mostrarCompletadas={mostrarCompletadas}
      />
    </div>
  );
}

export default App;
