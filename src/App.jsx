import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import PokemonDetailsPage from './pages/PokemonDetailsPage';
import PokemonsByTypePage from './pages/PokemonsByTypePage';
import RandomTypePage from './pages/RandomTeamPage';
import SearchPokemonPage from './pages/SearchPokemonPage';
import PokemonsByResistancePage from './pages/PokemonsByResistancePage';
import SearchResultPage from './pages/SearchResultPage';

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
          <Route path="/pokemons-by-resistance/:resistance"  element = {<PokemonsByResistancePage/>}/>
          <Route path="/random-team"  element = {<RandomTypePage/>}/>
          <Route path="/search/:pokemonName"  element = {<SearchResultPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default App;
