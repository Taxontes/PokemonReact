import React from 'react'
import './panel.css'
import { useHTTP } from '../../hooks/useHTTP'
import { Buscador } from '../buscador/Buscador'
import { useState } from 'react'
import { Loader } from '../loader/Loader'
import { DetallesPokemon } from '../detallesPokemon/DetallesPokemon'
import { Pokemon } from '../Pokemon'




export const PanelPrincipal = () => {

    const url = 'https://pokeapi.co/api/v2/pokemon?limit=15&offset=0'
    const { error, data, isLoading, mostrarSiguientesPoke } = useHTTP(url)
    
    const [mostrar, setMostrar] = useState(false)
    const [pokemonSeleccionado, setPokemonSeleccionado] = useState(null);

   
    const [busqueda, setBusqueda] = useState('');


    const handleSearchInputChange = (newBusqueda) => {
        setBusqueda(newBusqueda);
    };

    const filteredPokemon = data.filter((item) =>
        item.name.toLowerCase().includes(busqueda.toLowerCase())

    );


    const verPokemon = (pokemon) => {
        setPokemonSeleccionado(pokemon);
        setMostrar(true); 
    };
    



    return (
        <>
            {mostrar && (
                <DetallesPokemon pokemonSeleccionado={pokemonSeleccionado} onClose={() => setMostrar(false)} />)}
            
            <Buscador onInputChange={handleSearchInputChange}></Buscador>

            {error && <p className='error'>Error al cargar los pokemon</p>}
            <section className='container'>

                {isLoading || filteredPokemon.length > 0 ?
                    filteredPokemon.map(item => (
                        <Pokemon {...item} key={item.id} verPokemon={() => verPokemon(item)}></Pokemon>))
                    : <h2 className='error' >No hay resultados tras tu búsqueda.</h2>}

            </section>
            {isLoading
                ?
                <Loader />
                :
                <div className='btn-mostrar'>
                    <button onClick={mostrarSiguientesPoke}>Mostrar más pokemon</button>
                </div>}

        </>
    )
}
