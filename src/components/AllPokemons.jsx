import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

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
                            <article key = {pokemon.id}>
                                <img src={pokemon.image} alt={`image du pokemon ${pokemon.name}`} width = "80" />
                                <p>{pokemon.name}</p> 
                                <Link to={`/pokemon-details/${pokemon.id}`}>Voir le détail du pokemon</Link>
                                <p>Type: {pokemon.apiTypes[(pokemon.apiTypes.length)-1].name}</p>
                                <Link to={`/pokemons-by-type/${pokemon.apiTypes[(pokemon.apiTypes.length)-1].name}`}>Voir tout les pokémons de ce type</Link>
                                <br/>
                                <Link to={`/pokemons-by-resistance/${pokemon.apiTypes[(pokemon.apiTypes.length)-1].name}`}>Voir tout les pokémons resitant à ce type</Link>
                            </article>    
                            );
                    })
                } 
            </div>  
        </section>

    );
};

export default AllPokemons;