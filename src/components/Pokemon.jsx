export function Pokemon({ id, name, img, verPokemon }) {
    return (
      <div key={id} className="card" onClick={verPokemon}>
        <div className="card-body">
          <img src={img} alt="" />
          <div className="info">
            <h4 className="card-title">{name}</h4>
            
          </div>
        </div>
      </div>
    );
}