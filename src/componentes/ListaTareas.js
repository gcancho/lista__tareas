import React from "react";
import Tarea from "./Tarea";

//Este componente es una lista que contendra las tareas, a este componente se le pasa el estado "tareas" para mostrarlo con map
const ListaTareas = ({ tareas, cambiarTareas }) => {
  // Esta funcion la tenemos que pasar al componente "Tarea" para que funcione
  const toggleCompletada = (id) => {
    cambiarTareas(
      tareas.map((tarea) => {
        if (id === tarea.id) {
          // Nos devuelve un arreglo nuevo, por eso va el return, nos devuelve el arreglo inicial pero le modifica su 'tarea.completada'
          return { ...tarea, completada: !tarea.completada };
        }
        return tarea;
      })
    );
  };

  return (
    <ul className="lista-tareas">
      {/* Muestra el texto de cada tarea del estado de "tareas" que estamos obteniendo en el componente*/}
      {tareas.length > 0 ? (
        tareas.map((tarea) => {
          // return <li key={tarea.id}>{tarea.texto}</li>;
          // Creamos un componente para mejor orden y le pasamos los parametros al componente "Tarea"
          return (
            <Tarea
              key={tarea.id}
              tarea={tarea}
              toggleCompletada={toggleCompletada}
            />
          );
        })
      ) : (
        <div className="lista-tareas__mensaje">No hay tareas agregadas</div>
      )}
    </ul>
  );
};

export default ListaTareas;
