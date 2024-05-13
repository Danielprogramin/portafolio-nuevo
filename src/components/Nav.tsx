"use client";
import { useState } from "react";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        
      >
        <div className="hidden md:block">
          <nav className="text-black flex justify-center space-x-4 p-4 shadow-lg rounded-lg">
            <Link href="/">Inicio</Link>
            <Link href="/habilidades">Habilidades</Link>
            <Link href="/about">About me</Link>
            <Link href="/portafolio">Portafolio</Link>
          </nav>
        </div>

        <div className="block md:hidden">
          <button className="text-black p-4" onClick={toggleMenu}>
            <AlignJustify />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <nav className="text-black flex flex-col justify-center space-y-4 p-4">
              <Link href="/">Inicio</Link>
              <Link href="/habilidades">Habilidades</Link>
              <Link href="/about">About me</Link>
              <Link href="/portafolio">Portafolio</Link>
            </nav>
          </div>
        )}
      </motion.div>
    </>
  );
}
