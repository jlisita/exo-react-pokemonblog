import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const ListPokemons = () => 
{
    const[pokemons, setPokemon] = useState(null);

    useEffect (() => {
        fetch("https://pokebuildapi.fr/api/v1/pokemon")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
            setPokemon(data)
        });
    }, [])

    const handleDeletePokemon = (event, pokemonId) => {

        fetch("https://pokebuildapi.fr/api/v1/pokemon" + pokemonId, {method:"DELETE"})
    };

        return (
            <>
                <h2>liste des Pokémons</h2>

                    { pokemons ? 
                    <table>
                        <thead>
                            <tr>
                                <th>pokemon</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                    <tbody>
                        {pokemons.map((pokemon) => 
                        {
                        return (
                            <tr key = {pokemon.id}>
                                <td><p>{pokemon.name}</p></td>
                                <td>
                                    <button>modifier</button>
                                    <button onClick={(event) => handleDeletePokemon(event,pokemon.id)}>supprimer</button>
                                </td>
                            </tr>     
                        )})}
                    </tbody> 
                    </table>   : 
                    <p>pokemons en cours de chargement</p>
                    }         
            </>
        )
};

export default ListPokemons;