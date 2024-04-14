import { useState } from "react";

const SearchPokemon = () => {

    const [pokemon, setPokemon] = useState(null)

    const handleSearch = (event) => {
        event.preventDefault();
        const name = event.target.pokemonName.value;

        fetch("https://pokebuildapi.fr/api/v1/pokemon/"+ name)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
            setPokemon(data)
        });
    
    };
    
    return(
        <>
            <form action="" onSubmit={handleSearch}>
                <label htmlFor="pokemonName">saisir un nom de pokemon</label>
                <input type="text" id = "pokemonName" name = "pokemonName"/>
                <input type="submit"/>
            </form>

            {  !pokemon ? <p>Pokémon en cours de chargement</p> :
                  
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

}; 

export default SearchPokemon;