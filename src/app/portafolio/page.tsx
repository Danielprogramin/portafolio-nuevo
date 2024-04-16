import Image from "next/image";

export default function Portafolio() {
  return (
    <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-12 md:py-16 lg:py-20 lg:h-screen">
      <div className="flex flex-wrap w-full mb-8 sm:mb-12 md:mb-16 lg:mb-20">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            Portafolio
          </h1>
        </div>
      </div>
      <div className="flex flex-wrap -mx-4">
        <div className="xl:w-1/3 md:w-1/2 p-4">
          <div className="bg-orange-200 p-6 rounded-lg">
            <Image
              className="h-40 rounded w-full object-cover object-center mb-6"
              src=""
              alt="content"
              width={720}
              height={400}
            />
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
              Rick and Morty
            </h2>
            <p className="leading-relaxed text-black">
              Pequeño proyecto para extraer los personajes que se encuentran con
              vida en la serie.
            </p>
          </div>
        </div>
        <div className="xl:w-1/3 md:w-1/2 p-4">
          <div className="bg-orange-200 p-6 rounded-lg">
            <Image
              className="h-40 rounded w-full object-cover object-center mb-6"
              src=""
              alt="content"
              width={721}
              height={401}
            />
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
              Por definir
            </h2>
            <p className="leading-relaxed text-black">no se sabe.</p>
          </div>
        </div>
        <div className="xl:w-1/3 md:w-1/2 p-4">
          <div className="bg-orange-200 p-6 rounded-lg">
            <Image
              className="h-40 rounded w-full object-cover object-center mb-6"
              src=""
              alt="content"
              width={722}
              height={402}
            />
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
              Por definir
            </h2>
            <p className="leading-relaxed text-black">Tampoco de se sabe.</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center p-6">
        <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
          Portafolio
        </button>
      </div>
    </div>
  );
}
