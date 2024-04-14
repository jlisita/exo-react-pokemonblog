import { useState, useEffect } from "react";
import {useParams } from "react-router-dom";

const SearchResult = () => {

    const {pokemonName} = useParams();

    const[pokemon, setPokemon] = useState(null);

    useEffect( () => {
    fetch("https://pokebuildapi.fr/api/v1/pokemon/"+ pokemonName)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
        setPokemon(data)
    });
    },[pokemonName])

    return (
        <>
         {  !pokemon ? <p>Pokémon non existant</p> :
            <article key = {pokemon.id}>
                <h1>Détails du pokemon: </h1>
                <p>{pokemon.name}</p>
                <img src={pokemon.image} alt="image du pokémon" />
                <p>Type: {pokemon.apiTypes[(pokemon.apiTypes.length)-1].name}</p>
                <p>HP: {pokemon.stats.HP}</p>
                <p>defense: {pokemon.stats.attack}</p>
                <p>special attack: {pokemon.stats.defense}</p>
                <p>special attack: {pokemon.special_attack}</p>
                <p>special defense: {pokemon.stats.special_defense}</p>
                <p>speed: {pokemon.stats.speed}</p>
            </article>  
        }  
        </>
    );
}

export default SearchResult;
