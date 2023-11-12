import { useState, useEffect } from "react";

  const urlDefault = "https://pokeapi.co/api/v2/pokemon?limit=15&offset=0";


export const useHTTP = () => {
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [nextPage, setNextPage] = useState(urlDefault);

  const getPokemon = async (url = urlDefault) => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }

      const listaPokemon = await response.json();
      const { next, results } = listaPokemon;

      const infoPokemon = results.map(async (pokemon) => {
        const response = await fetch(pokemon.url);
        const poke = await response.json();

        const abilities = poke.abilities.map((a) => a.ability.name);
        const stats = poke.stats.map((s) => {
          return { name: s.stat.name, base: s.base_stat };
        });
        const types = poke.types.map((t) => t.type.name);

        return {
          id: poke.id,
          name: poke.name,
          img:
            poke.sprites.other.dream_world.front_default ||
            poke.sprites.other["official-artwork"].front_default ||
            poke.sprites.from_default,
          types,
          stats,
          abilities,
          order:poke.order
        };
      });

      setData(await Promise.all(infoPokemon));

      return { next, data };
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const mostrarSiguientePag = async () => {
    const { next } = await getPokemon();
    setNextPage(next);
  };

  const mostrarSiguientesPoke = async () => {
    const { next, data } = await getPokemon(nextPage);
    setData((prev) => [...data, ...prev]);
    setNextPage(next);
  };

  useEffect(() => {
    mostrarSiguientePag();
  }, []);

  return { error, data, isLoading, mostrarSiguientesPoke };
};
