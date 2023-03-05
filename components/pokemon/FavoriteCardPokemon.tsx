import { Card, Grid } from '@nextui-org/react';
import React, { FC } from 'react';
import { useRouter } from 'next/router';

interface Props {
  pokemonId: number;
}

const FavoriteCardPokemon: FC<Props> = ({ pokemonId }) => {

  const router = useRouter();

  const onFavoriteClicked = () => {
    router.push(`/pokemon/${pokemonId}`);
  }

  return (
    <Grid key={pokemonId} xs={6} sm={3} md={2} lg={1} onClick={onFavoriteClicked}>
      <Card isHoverable isPressable css={{ padding: 10 }}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
          width="100%"
          height="140px"
        />
      </Card>
    </Grid>
  );
};

export default FavoriteCardPokemon;
