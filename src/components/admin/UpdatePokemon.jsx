import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const UpdatePokemon = () => 
{
  const {pokemonId} = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {

    fetch("https://pokebuildapi.fr/api/v1/pokemon/" + pokemonId )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPokemon(data);
      });
  }, []);

  const handleUpdatePokemon = (event) => {

    event.preventDefault();
    const name = event.target.name.value;
    const gerenation = event.target.name.value;

    const json = JSON.stringify({
        name: name,
        generation: generation,
      });

    fetch("https://pokebuildapi.fr/api/v1/pokemon/" + pokemonId,{
        method: "PATCH",
        body: json,
      });

  };

    return(
        <>
            {
                !pokemon ? <p>Pokemon en cours de chargement</p> : 
                <form onSubmit={handleUpdatePokemon}>
                    <div>
                        <label htmlFor="name">Nom</label>
                        <input type="text" id = "name" name = "name" defaultValue = {pokemon.name}/>
                    </div>
                    <div>
                        <label htmlFor="name">Génération</label>
                        <input type="text" id = "generation" name = "generation" defaultValue = {pokemon.apiGeneration}/>
                    </div>
                    <div>
                        <input type = "submit" />
                    </div>
                </form>
            }
        </>
    );
};

export default UpdatePokemon;