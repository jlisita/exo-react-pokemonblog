import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import PokemonDetailsPage from './pages/PokemonDetailsPage';
import PokemonsByTypePage from './pages/PokemonsByTypePage';
import RandomTypePage from './pages/RandomTeamPage';
import SearchPokemonPage from './pages/SearchPokemonPage';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path="/pokemon-details/:pokemonId" element={<PokemonDetailsPage />}/>
          <Route path="/pokemons-by-type/:type"  element = {<PokemonsByTypePage/>}/>
          <Route path="/random-team"  element = {<RandomTypePage/>}/>
          <Route path="/search-pokemon"  element = {<SearchPokemonPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default App;
