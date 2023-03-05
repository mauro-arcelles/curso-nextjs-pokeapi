import { pokeApi } from "@/api";
import { Layout } from "@/components/layout";
import { PokemonCard } from "@/components/pokemon";
import { PokemonListResponse, SmallPokemon } from '@/interfaces';
import { Grid, Image } from "@nextui-org/react";
import { GetStaticProps } from 'next';

interface Props {
  pokemons: SmallPokemon[];
}

export default function Home({ pokemons }: Props) {

  return (
    <>
      <Layout title="Listado de Pokemons">

        <Grid.Container gap={2} justify="flex-start">
          {
            pokemons.map(pokemon => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))
          }
        </Grid.Container>

      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {

  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

  const pokemons: SmallPokemon[] = data.results.map((pokemon, index) => {

    const pokemonId = index + 1;
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;

    return {
      ...pokemon,
      img: image,
      id: pokemonId
    };
  });

  return {
    props: {
      pokemons
    }
  };
};