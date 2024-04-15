import { Link, useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const pokemonName = event.target.pokemonName.value;
    console.log(pokemonName);
    navigate("/search/" + pokemonName);
  };

  return (
    <header>
        <nav>
            <ul>
                <Link to="/">Accueil</Link>
                <Link to="/random-team">Team</Link>
                <Link to="/search-pokemon">Search</Link>
                <Link to="/admin/pokemons/create">Créer Pokemon</Link>
                <Link to="/admin/pokemons">Administrer pokémons</Link>
            </ul>
        </nav>

        <form onSubmit={handleSubmit}>
                <label htmlFor="pokemonName">saisir un nom de pokemon</label>
                <input type="text" id = "pokemonName" name = "pokemonName"/>
                <input type="submit"/>
        </form>
    </header>
  )
};

export default Header;