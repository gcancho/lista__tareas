import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Header = ({ mostrarCompletadas, cambiarMostrarCompletadas }) => {
  const toogleCompletadas = () => {
    cambiarMostrarCompletadas(!mostrarCompletadas);
  };
  return (
    <header className="header">
      <h1 className="header__titulo">Lista de tareas</h1>
      {mostrarCompletadas ? (
        <button className="header__boton" onClick={() => toogleCompletadas()}>
          No mostrar completadas
          <FontAwesomeIcon icon={faEyeSlash} className="header__icono-boton" />
        </button>
      ) : (
        <button className="header__boton" onClick={() => toogleCompletadas()}>
          Mostrar completadas
          <FontAwesomeIcon icon={faEye} className="header__icono-boton" />
        </button>
      )}
    </header>
  );
};

export default Header;
