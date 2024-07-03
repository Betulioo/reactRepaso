import React from "react";

export default function Detail({ descripcion, name }) {
  return (
    <div>
      <h2>nombre de la tarea</h2>
      <p>{descripcion}</p>
      <h3>descripcion de la tarea</h3>
      <p>{name}</p>
    </div>
  );
}
