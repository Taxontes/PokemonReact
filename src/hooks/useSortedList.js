import { useSort,useState } from "../helpers/useSort";

export const useSortedList = ({ data, }) => {
  

const [seleccionOrden, setSeleccionOrden] = useState("A_Z");
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
      return <h2 className="">No hay resultados tras la búsqueda</h2>;
    }

    return sortedPokemonList.map((item) => (
      <Pokemon {...item} key={item.id} verPokemon={() => verPokemon(item)} />
    ));
  };
};
