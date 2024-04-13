import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const PokemonDetails = () => {
  
  const {pokemonId} = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {

    fetch("https://pokebuildapi.fr/api/v1/pokemon/" + pokemonId)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPokemon(data);
      });
  }, []);

  return (
    <section>
      { !pokemon ? <p>Pokémon non défini</p> : (
        <article >
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
      )}
    </section>
  );
};

export default PokemonDetails;