import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faEdit,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

// Esta obteniendo la tarea que se creo dentro del map del componente "ListaTareas", no confundir con el estado "tareas"
// Recomendacion: Llamar de otra forma a los estados para que no genere confusion
const Tarea = ({ tarea }) => {
  return (
    <li className="lista-tareas__tarea">
      <FontAwesomeIcon
        icon={faCheckSquare}
        className="lista-tareas__icono lista-tareas__icono-check"
      />
      <div className="lista-tareas__texto">{tarea.texto}</div>
      <div className="lista-tareas__contenedor-botones">
        <FontAwesomeIcon
          icon={faEdit}
          className="lista-tareas__icono lista-tareas__icono-accion"
        />
        <FontAwesomeIcon
          icon={faTimes}
          className="lista-tareas__icono lista-tareas__icono-accion"
        />
      </div>
    </li>
  );
};

export default Tarea;
