
export const useSort = ({ data }) => {
  const sortedPokemonFunctions = {

     sortedPokemonInverseName : [...data].sort((a, b) =>
      b.name.localeCompare(a.name)
    ),
     sortedPokemonName : [...data].sort((a, b) =>
      a.name.localeCompare(b.name)
    ),
     sortedPokemonInverseOrder : [...data].sort(
      (a, b) => b.order - a.order
    ),
     sortedPokemonOrder : [...data].sort((a, b) => a.order - b.order),
    
     sortedPokemonType : [...data].sort((a, b) =>
      a.types.join().localeCompare(b.types.join())
    ),
  
  }
  return sortedPokemonFunctions
    
  
  
}


