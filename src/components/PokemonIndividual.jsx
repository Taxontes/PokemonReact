

export function PokemonIndividual({ id, name, img, types, stats }) {
    return (
        <div  className="card">
            <div className="card-body">
                <img src={img} alt={name} />
                    <h4 className="card-title">{id}</h4>
                <div className="info">
                    <h4 className="card-title">{name}</h4>
                </div>

                <div className='data'>
                    <h3 className="titulo-seccion">Types {types.map((type) => type.type.name).join(", ")} </h3>
                   


                    <h3 className="titulo-seccion">Estadísticas</h3>
                    <div className='stats'>
                        {stats?.map(stat =>
                            <section>
                                <span className='puntos'>{stat.base_stat}</span>
                                <span>{stat.name}</span>
                            </section>
                        )}
                    </div>
                    </div>

                </div>
            </div>
    
    );

   
}