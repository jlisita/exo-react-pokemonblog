import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const PokemonsByResistance = () => {

    const {resistance} = useParams();

    const[pokemons, setPokemons] = useState(null);

    useEffect( () => {
    fetch("https://pokebuildapi.fr/api/v1/pokemon/type/resistance/"+ resistance)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
        setPokemons(data)
    });
    },[])

    return(
        <>
            <h2>Pokemon par resistance</h2>
            { !pokemons ? <p>En cours de chargement</p> :
            pokemons.map((pokemon) => 
            {
            return (
                <article key = {pokemon.id}>
                    <p>{pokemon.name}</p> 
                    <img src={pokemon.image} alt={`image du pokemon ${pokemon.name}`} width = "80" />
                </article>)
            })}            
        </>
    );
};

export default PokemonsByResistance;