import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const RandomTeam = () => {

    const [randomTeam, setRandomTeam] = useState(null);

    useEffect(() => {

        fetch("https://pokebuildapi.fr/api/v1/random/team")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
            setRandomTeam(data);
        });

    },[])

    return(
        <>
            <h2>Equipe de pokémons</h2>
            { !randomTeam ? <p>En cours de chargement</p> : 
                randomTeam.map((pokemon) => {
                    return(
                        <article key = {pokemon.id}>
                                <img src={pokemon.image} alt={`image du pokemon ${pokemon.name}`} width = "80" />
                                <p>{pokemon.name}</p> 
                                <Link to={`/pokemon-details/${pokemon.id}`}>Voir le détail du pokemon</Link>
                        </article>    
                    )
                })
            }
        </>
    )
}

export default RandomTeam;