import React from "react";
import Card from "../Components/Card";
import { useGlobalStates } from "../Components/utils/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const {favorites} = useGlobalStates()

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favorites.map(data =>(<Card key={data.id} id={data.id} name = {data.name} username = {data.username}/>))}
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </>
  );
};

export default Favs;
