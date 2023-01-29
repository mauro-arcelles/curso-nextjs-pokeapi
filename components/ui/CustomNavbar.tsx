'use client';
import { Button, Navbar, Spacer, Text } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export const CustomNavbar = () => {
  return (
    <Navbar isBordered>
      <Navbar.Brand>
        <Link href="/" passHref>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Image
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/132.png"
              alt="icono de la app"
              width={70}
              height={70}
            />
            <Text color="white" h2>P</Text>
            <Text color="white" h3>okémon</Text>
          </div>
        </Link>

      </Navbar.Brand>

      <Spacer css={{ flex: 1 }} />

      <Link href="#" style={{ color: 'white' }}>
        Favoritos
      </Link>

    </Navbar>
  );
};
