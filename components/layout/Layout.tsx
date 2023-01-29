'use client';
import { PropsWithChildren } from "react";
import Head from "next/head";
import { CustomNavbar } from '../ui/CustomNavbar';

interface Props extends PropsWithChildren {
  title?: string;
}

export const Layout = ({ children, title = 'PokemonApp' }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="Adrian Arcelles" />
        <meta name="description" content={`Informacion sobre el pokemon ${title}`} />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
      </Head>

      <CustomNavbar />

      <main style={{
        padding: '0 20px'
      }}>
        {children}
      </main>
    </>
  );
};
