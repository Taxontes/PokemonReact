import './detallesPokemon.css'

export const DetallesPokemon = ({ pokemonSeleccionado, onClose }) => {

    
    if (!pokemonSeleccionado) {
        return null; // Si no se ha seleccionado un Pokémon, no se muestra el componente
    }

    const { id,name, img, abilities, stats, types } = pokemonSeleccionado;

    return (
        <div className='modal-container'>
            <section className='modal-body'>
               
                <div className="imagen-container">
                    <img src={img} alt="{name}" className="imagen-detalle" />
                    <section>
                        {types?.map(type => <span className='tag'>{type}</span>)}
                    </section>
                </div>
                <div className="data">
                    <h2 className="titulo">{name}  #{id}</h2>

                    <h3 className="titulo-seccion">Habilidades</h3>
                    
                    <ul>
                        {abilities.map(ability =>
                        (<li className='habilidad-pokemon'>
                           {ability}
                        </li>))}
                    </ul>
                   

                    <h3 className="titulo-seccion">Estadísticas</h3>
                    <div className='stats'>
                        {stats?.map(stat =>
                            <section>
                                <span className='puntos'>{stat.base}</span>
                                <span>{stat.name}</span>
                            </section>
                        )}
                    </div>
                <button onClick={onClose} className='cerrar-button'>
                    Cerrar
                </button>
                    
                </div>
            </section>
        </div>
    );
};
