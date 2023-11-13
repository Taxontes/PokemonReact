import { Navbar } from './components/navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import { Loader } from './components/loader/Loader';
import React, { lazy, Suspense } from 'react';
import './App.css'

const Inicio = lazy(() => import('./pages/inicio/Inicio'))
const EquipoPokemon = lazy(() => import('./pages/equipoPokemon/EquipoPokemon'))
const PokemonFvoritos = lazy(() => import('./pages/favPokemon/PokemonFvoritos'))
const MiniJuego = lazy(() => import('./pages/miniJuego/MiniJuego'))
const NotFound = lazy(() => import('./pages/notFound/NotFound'))
const PanelPrincipal = lazy(() => import('./components/content/PanelPrincipal'))

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route
          path='/'
          element={
            <Suspense fallback={<Loader />}>
              <Inicio />
            </Suspense>}

        />
        <Route
          path='/pokedex'
          element={
            <Suspense fallback={<Loader />}>
              <PanelPrincipal />
            </Suspense>}

        />
        <Route
          path='/favoritos'
          element={
            <Suspense fallback={<Loader />}>
              <PokemonFvoritos />
            </Suspense>}

        />
        <Route
          path='/combate'
          element={
            <Suspense fallback={<Loader />}>
              <EquipoPokemon />
            </Suspense>}

        />
        <Route
          path='/minijuego'
          element={
            <Suspense fallback={<Loader />}>
              <MiniJuego />
            </Suspense>}

        />
        <Route
          path='/*'
          element={
            <Suspense fallback={<Loader />}>
              <NotFound />
            </Suspense>}

        />
      </Routes>

    </>
  )
}

export default App
