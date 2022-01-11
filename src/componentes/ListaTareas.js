import React from "react";
import Tarea from "./Tarea";

//Este componente es una lista que contendra las tareas, a este componente se le pasa el estado "tareas" para mostrarlo con map
const ListaTareas = ({ tareas }) => {
  return (
    <ul className="lista-tareas">
      {/* Muestra el texto de cada tarea del estado de "tareas" que estamos obteniendo en el componente*/}
      {tareas.length > 0 ? (
        tareas.map((tarea) => {
          // return <li key={tarea.id}>{tarea.texto}</li>;
          // Creamos un componente para mejor orden y le pasamos los parametros al componente "Tarea"
          return <Tarea key={tarea.id} tarea={tarea} />;
        })
      ) : (
        <div className="lista-tareas__mensaje">No hay tareas agregadas</div>
      )}
    </ul>
  );
};

export default ListaTareas;
