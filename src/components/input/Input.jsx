import React, { useState } from "react";

export default function Input({ setDescripcion, setName }) {
  const [input, setInput] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleChange = (evento, setState) => {
    setState(evento.target.value);
  };

  return (
    <div>
      <input
        type="text"
        name="input"
        id="input"
        onChange={() => {
          handleChange(event, setInput);
        }}
      />
      <input
        type="text"
        name="inputValue"
        id="inputValue"
        onChange={() => {
          handleChange(event, setInputValue);
        }}
      />
      <button
        onClick={() => {
          setDescripcion(input);
          setName(inputValue);
        }}
      >
        Crear
      </button>
    </div>
  );
}
