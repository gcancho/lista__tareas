import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faEdit,
  faSquare,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

// Esta obteniendo la tarea que se creo dentro del map del componente "ListaTareas", no confundir con el estado "tareas"
// Recomendacion: Llamar de otra forma a los estados para que no genere confusion
const Tarea = ({ tarea, toggleCompletada, editarTarea, borrarTarea }) => {
  // Estado para manipular el boton de actualizar, tendra como valor por default 'false'
  const [editandoTarea, cambiarEditandoTarea] = useState(false);

  // Estado para manipular el input del formulario nuevo que aparece al querer editar la tarea
  const [nuevaTarea, cambiarNuevaTarea] = useState(tarea.texto);

  const handleSubmit = (e) => {
    e.preventDefault();
    cambiarEditandoTarea(false);
  };

  return (
    <li className="lista-tareas__tarea">
      <FontAwesomeIcon
        icon={tarea.completada ? faCheckSquare : faSquare}
        className="lista-tareas__icono lista-tareas__icono-check"
        // Función para capturar el id al cual se le esta haciendo click ya que son varias tareas y es un icono no un input
        onClick={() => toggleCompletada(tarea.id)}
      />
      <div className="lista-tareas__texto">
        {/* Si "editandoTarea" es verdadero entonces nos mostrara un formulario, sino simplemente nos muestra el nombre de la tarea */}
        {editandoTarea ? (
          <form
            action=""
            className="formulario-editar-tarea"
            onSubmit={handleSubmit}
            // Funcion para editar tarea, recibe el id para identificar a que tarea editar y el estado 'nuevaTarea' para setearlo
            onClick={() => editarTarea(tarea.id, nuevaTarea)}
          >
            <input
              type="text"
              className="formulario-editar-tarea__input"
              value={nuevaTarea}
              onChange={(e) => cambiarNuevaTarea(e.target.value)}
            />
            <button className="formulario-editar-tarea__btn">Actualizar</button>
          </form>
        ) : (
          tarea.texto
        )}
      </div>
      <div className="lista-tareas__contenedor-botones">
        <FontAwesomeIcon
          icon={faEdit}
          className="lista-tareas__icono lista-tareas__icono-accion"
          // Esta funcion cambia el estado de "editandoTarea" a su valor contrario, es como un toogle
          onClick={() => cambiarEditandoTarea(!editandoTarea)}
        />
        <FontAwesomeIcon
          icon={faTimes}
          className="lista-tareas__icono lista-tareas__icono-accion"
          onClick={() => borrarTarea(tarea.id)}
        />
      </div>
    </li>
  );
};

export default Tarea;
