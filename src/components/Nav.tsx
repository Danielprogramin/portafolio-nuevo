import Link from "next/link";
import React from "react";

interface NavProps {
  // Aquí puedes definir las props que necesites
}

const Nav: React.FC<NavProps> = (props) => {
  return (
    <nav className="text-black flex justify-center space-x-4 p-4">
      <Link href="/">Inicio</Link>
      <Link href="/habilidades">Habilidades</Link>
      <Link href="/about">About me</Link>
      <Link href="/portafolio">Portafolio</Link>
    </nav>
  );
};

export default Nav;
