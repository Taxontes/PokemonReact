import React from 'react'
import './panel.css'
import { useHTTP } from '../../hooks/useHTTP'
import { Buscador } from '../buscador/Buscador'
import { useState } from 'react'
import { Loader } from '../loader/Loader'
import { DetallesPokemon } from '../detallesPokemon/DetallesPokemon'
import { Pokemon } from '../Pokemon'
import { Clasificador } from '../clasificador/Clasificador'
import { useSort } from '../../helpers/useSort'
import { url, orden_A_Z, orden_por_tipo, orden_Z_A, numerico_ascendente, numerico_descendente } from '../../helpers/costantes'


export const PanelPrincipal = () => {

    const { error, data, isLoading, mostrarSiguientesPoke } = useHTTP(url)

    const [mostrar, setMostrar] = useState(false)
    const [pokemonSeleccionado, setPokemonSeleccionado] = useState(null);

    const sortedPokemonFunctions = useSort({ data })

    const [busqueda, setBusqueda] = useState('');


    const handleSearchInputChange = (newBusqueda) => {
        setBusqueda(newBusqueda);
    };


    const handleSeleccionChange = (nuevaSeleccion) => {
        setSeleccionOrden(nuevaSeleccion);

    };

    const verPokemon = (pokemon) => {
        setPokemonSeleccionado(pokemon);
        setMostrar(true);
    };

    const [seleccionOrden, setSeleccionOrden] = useState('A_Z');

    const renderPokemonList = () => {
        let sortedPokemonList = [...data];



        switch (seleccionOrden) {
            case orden_A_Z:
                sortedPokemonList = sortedPokemonFunctions.sortedPokemonName;
                break;
            case orden_Z_A:
                sortedPokemonList = sortedPokemonFunctions.sortedPokemonInverseName;
                break;
            case numerico_ascendente:
                sortedPokemonList = sortedPokemonFunctions.sortedPokemonOrder;
                break;
            case numerico_descendente:
                sortedPokemonList = sortedPokemonFunctions.sortedPokemonInverseOrder;
                break;
            case orden_por_tipo:
                sortedPokemonList = sortedPokemonFunctions.sortedPokemonType;
                break;


        }

        if (busqueda.length > 0) {
            sortedPokemonList = sortedPokemonList.filter((item) =>
                item.name.toLowerCase().includes(busqueda.toLowerCase())
            );
        }

        if (sortedPokemonList.length <= 0) { 
            return <h2 className=''>No hay resultados tras la búsqueda</h2>
        }

        return sortedPokemonList.map(item => (
            <Pokemon {...item} key={item.id} verPokemon={() => verPokemon(item)} />
        ));
    };

    return (
        <>
            {mostrar && (<DetallesPokemon pokemonSeleccionado={pokemonSeleccionado} onClose={() => setMostrar(false)} />)}

            <Buscador onInputChange={handleSearchInputChange}></Buscador>
            <Clasificador onSeleccionChange={handleSeleccionChange} />
            {error && <p className='error'>Error al cargar los pokemon</p>}
            <section className='container'>

                {!isLoading && renderPokemonList()}

            </section>
            {isLoading ? <Loader />
                :
                <div className='btn-mostrar'>
                    <button onClick={mostrarSiguientesPoke}>Mostrar más pokemon</button>
                </div>}

        </>
    )
}
