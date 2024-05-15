"use client";
import Image from "next/image";
import Nav from "../components/Nav";
import About from "./about/page";
import Habilidades from "./habilidades/page";
import Portafolio from "./portafolio/page";
import Lottie from "lottie-react";
import Conta from "./animaciones/conta.json";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <main className="flex min-h-screen flex-col p-6">
        <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
          <div className="flex flex-col justify-center gap-6 rounded-lg px-6 py-10 md:w-2/5 md:px-20">
            <h1 className="text-black text-2xl sm:text-2xl md:text-2xl lg:text-2xl">
              Hola, Soy Daniel Ortiz
            </h1>
            <p className="sm:text-3xl text-2xl mb-8 text-black">
              Amante de la programación, apasionado por el desarrollo web,
              poseedor de muchas habilidades a la hora de desarrollar como lo
              son el manejo de distintos lenguajes de programación.
            </p>
            <div className="flex justify-center sm:justify-start">
              <button className="text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-400 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-orange-500 dark:hover:bg-orange-600 dark:focus:ring-orange-400 dark:border-gray-700">
                Conoceme
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
            <Lottie animationData={Conta} />
          </div>
        </div>
      </main>
    </motion.div>
  );
}
