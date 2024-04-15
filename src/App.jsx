import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/public/HomePage";
import PokemonDetailsPage from './pages/public/PokemonDetailsPage';
import PokemonsByTypePage from './pages/public/PokemonsByTypePage';
import RandomTypePage from './pages/public/RandomTeamPage';
import SearchPokemonPage from './pages/public/SearchPokemonPage';
import PokemonsByResistancePage from './pages/public/PokemonsByResistancePage';
import SearchResultPage from './pages/public/SearchResultPage';
import ListPokemonsAdminPage from './pages/admin/ListPokemonsAdminPage';
import CreatePokemonPage from './pages/admin/CreatePokemonPage';
import UpdatePokemonPage from './pages/admin/UpdatePokemonPage';
import LoginPage from './pages/public/LoginPage';

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
          <Route path="/login"  element = {<LoginPage/>}/>
          
          <Route path="/admin/pokemons"  element = {<ListPokemonsAdminPage/>}/>
          <Route path="/admin/pokemons/create"  element = {<CreatePokemonPage/>}/>
          <Route path="/admin/pokemons/update/:pokemonId"  element = {<UpdatePokemonPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default App;
