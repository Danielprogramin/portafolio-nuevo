import Image from "next/image";
import Nav from "./components/Nav";
import About from "./about/page";
import Habilidades from "./habilidades/page";
import Portafolio from "./portafolio/page";

export default function Home() {
  return (
    <main>
      <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-12 md:py-16 lg:py-20 lg:h-screen ">
        <div className="lg:flex lg:flex-row md:flex md:flex-row sm:flex sm:flex-col items-center justify-center w-full pt-24">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="text-black text-2xl sm:text-2xl md:text-2xl lg:text-2xl">
              Hola, Soy Daniel Ortiz
            </h1>
            <p className="sm:text-3xl text-2xl mb-8 text-black">
              Amante de la programación, apasionado por el desarrollo web,
              poseedor de muchas habilidades a la hora de desarrollar como lo
              son el manejo de distintos lenguajes de programación.
            </p>
            <div className="flex justify-center sm:justify-start">
              <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                Conoceme
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded ml-10"
              alt="hero"
              src="/images/perfil.png"
              width={720}
              height={600}
            />
          </div>
        </div>
      </div>

      <div>
        <Habilidades />
      </div>

      <div>
        <About />
      </div>

      <div>
        <Portafolio />
      </div>
    </main>
  );
}
