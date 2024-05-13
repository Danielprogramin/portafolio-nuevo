"use client";
import Image from "next/image";
import { motion } from "framer-motion";
export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="flex min-h-screen flex-col p-6">
        <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
          <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
            <Image
              className="object-cover object-center rounded ml-10"
              alt="hero"
              src="/images/perfil.png"
              width={720}
              height={600}
            />
          </div>

          <div className="flex flex-col justify-center gap-6 rounded-lg px-6 py-10 md:w-2/5 md:px-20">
            <h1 className="text-black text-2xl sm:text-2xl md:text-2xl lg:text-2xl">
              Daniel Ortiz
            </h1>
            <p className="sm:text-1xl text-1xl mb-8 text-black">
              Como desarrollador de software poseo un amplio conocimiento
              técnico y habilidades blandas como la resolución de problemas, la
              comunicación efectiva, el trabajo en equipo, la capacidad de
              aprendizaje continuo. Con experiencia que me permite desarrollar
              interfaces de usuario atractivas, optimizar el rendimiento de las
              aplicaciones y trabajar con diferentes frameworks y lenguajes de
              programación.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
