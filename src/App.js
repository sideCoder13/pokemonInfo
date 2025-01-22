import axios from "axios";
import { useEffect } from "react";
import Card from "./Componenet/Card";
import React from 'react';

function App() {
  const [allPokemons, setAllPokemons] = React.useState([])
  useEffect(() => {
    const fetchData = async() => {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon/")
      console.log(response.data.results)
      setAllPokemons(response.data.results)
    }
    fetchData()
  },[])
  return (
    <div className=''>
      <div className='text-2xl my-5 font-bold capitalize flex justify-center'>Pokemon List</div>
      {
        allPokemons.length === 0 ? <div>Loading...</div> : 
        (
          allPokemons.map((pokemon,index) => (
            <Card pokemon={pokemon} key={index}/>
          ))
        )
      }
    </div>
  );
}

export default App;
