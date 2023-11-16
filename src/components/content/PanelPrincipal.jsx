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
import { useSearch } from '../../hooks/useSearch'
import { PokemonIndividual } from '../PokemonIndividual'



const PanelPrincipal = () => {

    const { error, data, isLoading, mostrarSiguientesPoke } = useHTTP(url)
    
    const [mostrar, setMostrar] = useState(false)
    const [pokemonSeleccionado, setPokemonSeleccionado] = useState(null);
    const [busqueda, setBusqueda] = useState('');
    const [seleccionOrden, setSeleccionOrden] = useState('A_Z');

   
    const listaPokemonOrdenada = useSortList({ data, seleccionOrden });     
    const { dataSearch, errorSearch, isLoadingSearch } = useSearch(busqueda)
    
    const handleSumbit = (newBusqueda) => {
        setBusqueda(newBusqueda);
       
    };
    
    
    const handleSeleccionChange = (nuevaSeleccion) => {
        setSeleccionOrden(nuevaSeleccion);
        
    };
    
    const verPokemon = (pokemon) => {
        setPokemonSeleccionado(pokemon);
        setMostrar(true);
    };
    


    return (
        <>
            {mostrar && (<DetallesPokemon pokemonSeleccionado={pokemonSeleccionado} onClose={() => setMostrar(false)} />)}

            <Buscador onFormSubmit={handleSumbit}></Buscador>
             {error && <p className='error'>Error al cargar los pokemon</p>} 
            {!dataSearch &&<Clasificador onSeleccionChange={handleSeleccionChange} />}
            
            {!dataSearch && <section className='container'>
                {isLoading && <Loader />}
                
                 {listaPokemonOrdenada.length > 0 && listaPokemonOrdenada.map(item => (
                     <Pokemon
                         {...item}
                         key={item.id}
                         verPokemon={() => verPokemon(item)}/>))
                } 
            </section>}

            <section className='container-useSearch'>
                {isLoadingSearch && <Loader />}

                <div>
                    {dataSearch && errorSearch == null ?

                        <PokemonIndividual
                            id={`# ${dataSearch.id}`}
                            name={dataSearch.name}
                            img={dataSearch.sprites}
                            types={dataSearch.types}
                            stats={dataSearch.stats} />
                        :
                       null

                    }
                </div>
            </section>
            {isLoading && <Loader />}

            {!dataSearch &&
                <div className='btn-mostrar'>
                    <button onClick={mostrarSiguientesPoke}>Mostrar más pokemon</button>
                </div>} 
            
        </>
    )
}

export default PanelPrincipal
