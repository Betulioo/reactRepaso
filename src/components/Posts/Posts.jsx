import React, { useState } from "react";

export default function Posts({ datosApi }) {
  const [posts, setPosts] = useState([]);

  return (
    <>
      {datosApi.map((post, index) => (
        <div key={index}>
          <h2> TITULO: {post.title}</h2>
          <p>DESCRIPCION: {post.body}</p>
        </div>
      ))}
    </>
  );
}
