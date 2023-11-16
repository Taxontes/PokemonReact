export function PokemonIndividual({id, name, img, types, stats}) {
    return (
        <div  className="card">
            <div className="card-body">
                <img src={img} alt={name} />
                    <h4 className="card-title">{id}</h4>
                <div className="info">
                    <h4 className="card-title">{name}</h4>
                </div>
                <p>Types: {types.map((type) => type.type.name).join(", ")}</p>
                <p>Stats:</p>
                <ul>
                    {stats.map((item) => (
                        <li key={item.name}>
                            {item.name}: {item.base_stat}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}