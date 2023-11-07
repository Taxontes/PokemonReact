import React from 'react'
import { BuscarIcon } from '../Icons'
import './buscador.css'
import { useEffect, useState } from 'react'

export const Buscador = ({ onInputChange }) => {

    const [pokemon, setPokemon] = useState('')
    
   

    useEffect(() => {

        onInputChange(pokemon)

    }, [pokemon])



    return (
        <>
            <h3 className='titulo-buscador'>Encuentra el pokémon que buscas</h3>

            <form className='container-buscador' >
                <input
                    type="text"
                    className='input-buscar'
                    placeholder='Encuentralo aquí'
                    onChange={(e) => setPokemon(e.target.value)}

                />

            </form>
           
        </>
    )
}
