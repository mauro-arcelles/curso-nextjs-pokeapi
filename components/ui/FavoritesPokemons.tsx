import { Grid } from "@nextui-org/react";
import { FC } from "react";
import FavoriteCardPokemon from "../pokemon/FavoriteCardPokemon";

interface Props {
  favoritePokemons: number[];
}

const FavoritesPokemons: FC<Props> = ({ favoritePokemons }) => {
  return (
    <Grid.Container gap={2} direction='row' justify="flex-start">
      {
        favoritePokemons.map((pokemonId) => (
          <FavoriteCardPokemon pokemonId={pokemonId} />
        ))
      }
    </Grid.Container>
  );
};

export default FavoritesPokemons;