import React from 'react'
import './panel.css'
import { useHTTP } from '../../hooks/useHTTP'
import { Buscador } from '../buscador/Buscador'
import { useState } from 'react'
import { Loader } from '../loader/Loader'
import { DetallesPokemon } from '../detallesPokemon/DetallesPokemon'
import { Pokemon } from '../Pokemon'
import { Clasificador } from '../clasificador/Clasificador'
import { url } from '../../helpers/costantes'
import { useSortList } from '../../hooks/useSortList'


const PanelPrincipal = () => {

    const { error, data, isLoading, mostrarSiguientesPoke } = useHTTP(url)

    const [mostrar, setMostrar] = useState(false)
    const [pokemonSeleccionado, setPokemonSeleccionado] = useState(null);

   

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

    const listaPokemonOrdenada = useSortList({ data, seleccionOrden, busqueda });
  
    

    return (
        <>
            {mostrar && (<DetallesPokemon pokemonSeleccionado={pokemonSeleccionado} onClose={() => setMostrar(false)} />)}

            <Buscador onInputChange={handleSearchInputChange}></Buscador>
            <Clasificador onSeleccionChange={handleSeleccionChange} />
            {error && <p className='error'>Error al cargar los pokemon</p>}
            <section className='container'>

                
                {listaPokemonOrdenada.length > 0 ? listaPokemonOrdenada.map(item => (
                    <Pokemon {...item} key={item.id} verPokemon={() => verPokemon(item)}></Pokemon>))
                    :
                     <h2 className='error'>No hay resultados tras la búsqueda</h2>
                }
                   

            </section>
            {isLoading && <Loader />}
                {listaPokemonOrdenada.length === 0 ? null :
                <div className='btn-mostrar'>
                    <button onClick={mostrarSiguientesPoke}>Mostrar más pokemon</button>
                </div>}

        </>
    )
}

export default PanelPrincipal
