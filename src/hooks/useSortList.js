import { useSort } from "../helpers/useSort";
import {
  orden_A_Z,
  orden_por_tipo,
  orden_Z_A,
  numerico_ascendente,
  numerico_descendente,
} from "../helpers/costantes";

export const useSortList = ({ data, seleccionOrden, busqueda }) => {
  
  const sortedPokemonFunctions = useSort({ data });
  let sortedPokemonList = [...data];

  const sortOptions = {
    [orden_A_Z]: sortedPokemonFunctions.sortedPokemonName,
    [orden_Z_A]: sortedPokemonFunctions.sortedPokemonInverseName,
    [numerico_ascendente]: sortedPokemonFunctions.sortedPokemonOrder,
    [numerico_descendente]: sortedPokemonFunctions.sortedPokemonInverseOrder,
    [orden_por_tipo]: sortedPokemonFunctions.sortedPokemonType,
  };

  sortedPokemonList = sortOptions[seleccionOrden] || sortedPokemonList;

   if (busqueda.length > 0) {
       sortedPokemonList = sortedPokemonList.filter((item) =>
           item.name.toLowerCase().includes(busqueda.toLowerCase())
       );
   }

  return sortedPokemonList;
};
