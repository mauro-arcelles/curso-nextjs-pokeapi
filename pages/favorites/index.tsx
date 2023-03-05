import { Layout } from "@/components/layout";
import FavoritesPokemons from "@/components/ui/FavoritesPokemons";
import NoFavorites from "@/components/ui/NoFavorites";
import { localFavorites } from "@/utils";
import { useState, useEffect } from 'react';

const FavoritesPage = () => {

  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons());

  }, []);


  return (
    <Layout title="Pokemons - Favoritos">
      {
        favoritePokemons.length === 0
          ? <NoFavorites />
          : <FavoritesPokemons favoritePokemons={favoritePokemons} />
      }
    </Layout>
  );
};

export default FavoritesPage;