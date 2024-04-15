import Link from "next/link";
import React from "react";

interface NavProps {
  // Aquí puedes definir las props que necesites
}

const Nav: React.FC<NavProps> = (props) => {
  return (
    <nav className="text-black flex justify-center space-x-4 p-4">
      <Link href="/">Inicio</Link>
      <Link href="/acerca">Acerca de</Link>
      <Link href="/contacto">Contacto</Link>
    </nav>
  );
};

export default Nav;
