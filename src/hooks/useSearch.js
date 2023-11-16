import { useState, useEffect } from "react";



export const useSearch = (busqueda) => {
  const [errorSearch, setError] = useState(null);
  const [dataSearch, setData] = useState(null);
  const [isLoadingSearch, setIsLoading] = useState(true);

 useEffect(() => {
   
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${busqueda}`);
         if (response.ok) {
           const data = await response.json();
           
           setData({
             id: data.id,
             name: data.name,
             sprites: data.sprites.other.dream_world.front_default,
             types: data.types,
             stats: data.stats.map((stat) => ({
              name: stat.stat.name,
              base_stat: stat.base_stat,
              
             })),
           });
          
           setError(null)
         } else {
           setData(null);
           setError(
             new Error('No existe dicho pokemon')
           );
         }
        
      } catch (error) {
        setError(error);
        console.error('Error fetching data:', error);

      } finally {
        setIsLoading(false)
        
      }
    };

     if (busqueda.trim() !== "") {
       fetchData();
     } else {
       // Si la búsqueda está vacía, resetear los estados
       setData(null);
       setError(null);
       setIsLoading(false);
     }
  
 }, [busqueda])
 
 
 

  
  return { dataSearch, errorSearch, isLoadingSearch };
};
