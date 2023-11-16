import React from 'react'
import './buscador.css'
import { useState } from 'react'

export const Buscador = ({ onFormSubmit }) => {

    const [pokemon, setPokemon] = useState('')
    
    const onInputChange = (e) => {
        setPokemon(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault(); // Evitar el envío automático del formulario
        onFormSubmit(pokemon);
        
    };
  


    return (
        <>
            <h3 className='titulo-buscador'>Encuentra el pokémon que buscas</h3>

            <form className='container-buscador' onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    className='input-buscar'
                    placeholder='Encuentralo aquí'
                    onChange={onInputChange}
                    value={pokemon}

                />
                <button type='submit' className="search-button">🔍</button>
            </form>
           
        </>
    )
}
