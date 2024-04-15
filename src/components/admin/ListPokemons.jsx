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

        return (
            <>
                <h2>liste des Pokémons</h2>
                <table>
                    <tr>
                        <td>pokemon</td><td>Action</td>
                    </tr>
                { !pokemons ? <p>En cours de chargement</p> :
                pokemons.map((pokemon) => 
                {
                return (
                    <article key = {pokemon.id}>
                        <tr>
                            <td><p>{pokemon.name}</p></td>
                            <td><button>modifier</button><button>supprimer</button></td>
                        </tr>
                        
                    </article>)
                })}
                </table>            
            </>
        )
};

export default ListPokemons;