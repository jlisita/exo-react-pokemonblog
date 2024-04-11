import { useEffect, useState } from 'react';

const AllPokemons = () => {

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
        <section>
            <h2 id = "AllPokemons-title">Liste de tout les pokémons</h2>
            <div className="cardGallery">
                {   !pokemons ? <p>Pokémons en cours de chargement</p> :
                    pokemons.map((pokemon) => {
                        return (
                            <p key = {pokemon.id}>{pokemon.name}</p>        
                            );
                    })
                } 
            </div>  
        </section>

    );
};

export default AllPokemons;