import React from "react";

const Frase = ({ frase }) => {
  return (
    <div>
      <h1>{frase.quote}</h1>
      <h3>{frase.author}</h3>
    </div>
  );
};

export default Frase;
