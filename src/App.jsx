import { Navbar } from './components/navbar/Navbar'
import { PanelPrincipal } from './components/content/PanelPrincipal'
import { Routes, Route } from 'react-router-dom'
import { EquipoPokemon } from './pages/equipoPokemon/EquipoPokemon'
import { PokemonFvoritos } from './pages/favPokemon/PokemonFvoritos'
import { MiniJuego } from './pages/miniJuego/MiniJuego'
import { NotFound } from './pages/notFound/NotFound'
import { Inicio } from './pages/inicio/Inicio'
import './App.css'


function App() {

  return (
    <>
      <Navbar></Navbar>
        <Routes>
        <Route path='/' element={<Inicio></Inicio>}></Route>
          <Route path='/pokedex' element={<PanelPrincipal></PanelPrincipal>}></Route>
          <Route path='/favoritos' element={<PokemonFvoritos></PokemonFvoritos>}></Route>
          <Route path='/combate' element={<EquipoPokemon></EquipoPokemon>}></Route>
          <Route path='/minijuego' element={<MiniJuego></MiniJuego>}></Route>
          <Route path='/*' element={<NotFound></NotFound>}></Route>
        </Routes>
    
    </>
  )
}

export default App
