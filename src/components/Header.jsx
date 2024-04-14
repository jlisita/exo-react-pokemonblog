import {Link} from "react-router-dom"

const Header = () => {

  return (
    <header>
        <nav>
            <ul>
                <Link to="/">Accueil</Link>
                <Link to="/random-team">Team</Link>
                <Link to="/search-pokemon">Search</Link>
            </ul>
        </nav>
    </header>
  )
};

export default Header;