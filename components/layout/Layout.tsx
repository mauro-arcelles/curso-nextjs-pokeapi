'use client';
import Head from "next/head";
import { PropsWithChildren } from "react";
import { CustomNavbar } from '../ui/CustomNavbar';

interface Props extends PropsWithChildren {
  title?: string;
}

const origin = typeof window === 'undefined' ? '' : window.location.origin;

export const Layout = ({ children, title = 'PokemonApp' }: Props) => {

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="Adrian Arcelles" />
        <meta name="description" content={`Informacion sobre el pokemon ${title}`} />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />

        <meta property="og:title" content={`Información sobre ${title}`} />
        <meta property="og:description" content={`Esta es la página sobre ${title}`} />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
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
