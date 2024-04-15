import Image from "next/image";
import Nav from "./components/Nav";
import About from "./about/page";
import Habilidades from "./habilidades/page";
import Portafolio from "./portafolio/page";

export default function Home() {
  return (
    <main>
      <div>
        <Nav />
      </div>

      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center h-screen">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="text-black">Hola, Soy Daniel Ortiz</h1>
          <p className="sm:text-3xl text-2xl mb-8 text-gray-900 ">
            Amante de la programación , apasionado por el desarrollo web ,
            poseedor de muchas hablididades a la hora de desarrollar como lo son
            el manejo de distintos lenguajes programación.
          </p>
          <div className="flex justify-center ">
            <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
              Conoceme
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded"
            alt="hero"
            src="/images/perfil.png"
            width={720}
            height={600}
          />
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
