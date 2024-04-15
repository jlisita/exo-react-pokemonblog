const CreatePokemon = () => {


    const handleCreatePokemon = (event) => {

        event.preventDefault();

        const name = event.target.name.value;
        const generation = event.target.generation.value;

        const json = JSON.stringify({
            name: name,
            generation: generation,
          });

        fetch("https://pokebuildapi.fr/api/v1/pokemon",{
            method: "POST",
            body: json,
          });

    };

    return (
        <>
            <p>Créer votre Pokémon</p>
            <form onSubmit={handleCreatePokemon}>
                <div>
                    <label htmlFor="name">Nom: </label>
                    <input type="text" name = "name" id = "name"/>
                </div>
                <div>
                    <label htmlFor="generation">Génération: </label>
                    <input type="text" name = "generation" id = "generation"/>
                </div>
                <input type="submit" />
            </form>
        </>
    );

};

export default CreatePokemon;