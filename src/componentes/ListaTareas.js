import React from "react";
import Tarea from "./Tarea";

//Este componente es una lista que contendra las tareas, a este componente se le pasa el estado "tareas" para mostrarlo con map
const ListaTareas = ({ tareas, cambiarTareas, mostrarCompletadas }) => {
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

  // Esta funcion la tenemos que pasar al componente "Tarea" para que funcione
  // El nuevo texto es la 'nuevaTarea' en el componente "Tarea"
  const editarTarea = (id, nuevoTexto) => {
    cambiarTareas(
      tareas.map((tarea) => {
        if (id === tarea.id) {
          return { ...tarea, texto: nuevoTexto };
        }
        return tarea;
      })
    );
  };

  const borrarTarea = (id) => {
    cambiarTareas(
      tareas.filter((tarea) => {
        if (id !== tarea.id) {
          return tarea;
        }
        // Devolvemos nada y elimina la tarea
        return;
      })
    );
  };

  return (
    <ul className="lista-tareas">
      {/* Muestra el texto de cada tarea del estado de "tareas" que estamos obteniendo en el componente*/}
      {tareas.length > 0 ? (
        tareas.map((tarea) => {
          if (mostrarCompletadas) {
            // return <li key={tarea.id}>{tarea.texto}</li>;
            // Creamos un componente para mejor orden y le pasamos los parametros al componente "Tarea"
            return (
              <Tarea
                key={tarea.id}
                tarea={tarea}
                toggleCompletada={toggleCompletada}
                editarTarea={editarTarea}
                borrarTarea={borrarTarea}
              />
            );
            //Si la tarea no esta completada, la devolvemos
          } else if (!tarea.completada) {
            return (
              <Tarea
                key={tarea.id}
                tarea={tarea}
                toggleCompletada={toggleCompletada}
                editarTarea={editarTarea}
                borrarTarea={borrarTarea}
              />
            );
          }
          // Si ya esta completada no la devolvemos
          return;
        })
      ) : (
        <div className="lista-tareas__mensaje">No hay tareas agregadas</div>
      )}
    </ul>
  );
};

export default ListaTareas;
