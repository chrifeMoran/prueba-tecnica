import responseResults from "../mockup/with-results.json";
import { useEffect, useState } from "react";
// import { Navigate } from "react-router-dom";
import { getApiData } from "../services/apiData";

export default function ListOfPersonajes() {
  const [personajes, setPersonajes] = useState([]);
  const response = responseResults.results;

  const HandleClick = (person) => {
    // Navigate("")
  };

  useEffect(() => {
    getApiData().then((response) => {
      setPersonajes(response.results);
    });
  }, []);

  return (
    <main className="">
      <ul>
        {personajes.map((person) => {
          return (
            <li key={person.id}>
              <img src={person.image} alt={person.name} />
              <h3>{person.name}</h3>
              <button onClick={HandleClick(person)}>Ver Detalle</button>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
