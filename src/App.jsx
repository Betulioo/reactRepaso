import { useEffect, useState } from "react";
import "./App.css";
import Input from "./components/input/Input";
import Detail from "./components/detail/Detail";
import Posts from "./components/Posts/Posts";

function App() {
  const [descripcion, setDescripcion] = useState("");
  const [name, setName] = useState("");
  const [datosApi, setDatosApi] = useState([]);
  const [isCreated, setIsCreated] = useState(false);

  const fetchApi = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setDatosApi(data);
  };

  const createPost = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        userId: 1,
        title: "post creado desde el front",
        body: "este es el body del post creado desde el front",
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await response.json();
    console.log(data);
    setIsCreated(true);
  };

  useEffect(() => {
    fetchApi();
    console.log("render");
    console.log(isCreated);
  }, [isCreated]);

  return (
    <>
      <Input setDescripcion={setDescripcion} setName={setName} />
      <Detail descripcion={descripcion} name={name} />
      <button onClick={() => createPost()}>Creando Post</button>

      {datosApi.length > 0 ? <Posts datosApi={datosApi} /> : null}
    </>
  );
}

export default App;
