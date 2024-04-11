import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import PokemonDetailsPage from './pages/PokemonDetailsPage';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path="/pokemon-details/:pokemonId" element={<PokemonDetailsPage />} />
        </Routes>
      </BrowserRouter >
    </>
  )
};

export default App;
