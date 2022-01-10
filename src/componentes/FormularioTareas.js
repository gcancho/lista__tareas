import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";

// Este componente esta recibiendo el estado "tareas" y su funcion cambiarTareas, las cuales fueron creadas en App.js
const FormularioTareas = ({ tareas, cambiarTareas }) => {
  //Estado para manipular el input para agregar tareas del formulario
  const [inputTarea, cambiarInputTarea] = useState("");

  // Cambiamos el valor del estado de "inputTarea" por el valor actual del input
  const handleInput = (e) => {
    cambiarInputTarea(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //Cambiando el estado de "tareas"
    cambiarTareas(
      //Obtiene todas las tareas que tenia anteriormente con los 3 puntitos y despues de eso ponerle el valor que agregaremos
      [
        ...tareas,
        {
          // Genera id dinamico
          id: uuidv4(),
          texto: inputTarea,
          completada: false,
        },
      ]
    );
  };

  return (
    <form action="" className="formulario-tareas" onSubmit={handleSubmit}>
      <input
        type="text"
        className="formulario-tareas__input"
        placeholder="Escribe una tarea"
        value={inputTarea}
        onChange={handleInput}
      />
      <button type="submit" className="formulario-tareas__btn">
        <FontAwesomeIcon icon={faPlusSquare} />
      </button>
    </form>
  );
};

export default FormularioTareas;
