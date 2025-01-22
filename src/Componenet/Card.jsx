import axios from "axios";
import React, { useEffect, useState } from "react";
import PokemonInfo from "./PokemonInfo";

const Card = ({ pokemon, key }) => {
  const [data, setData] = useState({});  // Use an object to store the fetched data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${pokemon.url}`);
        console.log(response.data);  // Check if the data structure is correct
        setData(response.data);  // Set the fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [pokemon.url]);

  return (
    <div key={key}>
      {/* <div>{}</div> */}
      {data && Object.keys(data).length > 0 && (
        <PokemonInfo pokemonName={pokemon.name} key={data.id} pokemon={data} />  // Pass the entire data to PokemonInfo
      )}
    </div>
  );
};

export default Card;
