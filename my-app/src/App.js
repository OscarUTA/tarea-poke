import { useEffect, useRef, useState } from "react";



export default function App() {
const [pokemons, setPokemons] = useState([])


useEffect(()=>{
  listPokemons()
},[])

async function listPokemons(){
  const result = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
  const data= await result.json();
  console.log(data)
  setPokemons(data.results)
}

return (
<div className="App">
  <h1>Hello codeSandbox</h1>
  <ol>
    {
    pokemons.map((pokemon)=><li key={pokemon.name}>{pokemon.name}</li>)
    }
</ol>
</div>
);
}

