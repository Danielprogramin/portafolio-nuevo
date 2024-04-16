import Image from "next/image";
export default function Habilidades() {
  return (
    <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
          Habilidades
        </h1>
        <p className="text-black leading-relaxed xl:w-2/4 lg:w-3/4 md:w-4/5 sm:w-full mx-auto">
          Con los conocimientos en diferentes lenguajes de programación y
          habilidades en el desarrollo web, puedo crear aplicaciones web de alta
          calidad y rendimiento.
        </p>
      </div>
      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
        <div className="p-4 sm:w-1/2 md:w-1/3 lg:w-1/3 flex flex-col text-center items-center">
          <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
            <Image
              src="/images/react.png"
              alt="React"
              width={100}
              height={100}
            />
          </div>
          <div className="flex-grow">
            <h2 className="text-black text-lg title-font font-medium mb-3">
              React
            </h2>
            <p className="leading-relaxed text-black">
              Amplio conocimiento y experiencia en la creación de interfaces de
              usuario interactivas y dinámicas con React.js.
            </p>
          </div>
        </div>
        <div className="p-4 sm:w-1/2 md:w-1/3 lg:w-1/3 flex flex-col text-center items-center">
          <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
            <Image
              src="/images/next.png"
              alt="Next JS"
              width={100}
              height={100}
            />
          </div>
          <div className="flex-grow">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
              Next JS
            </h2>
            <p className="leading-relaxed text-black">
              Dominio de Next.js para el desarrollo de aplicaciones web
              estáticas y pre-renderizadas con React.
            </p>
          </div>
        </div>
        <div className="p-4 sm:w-1/2 md:w-1/3 lg:w-1/3 flex flex-col text-center items-center">
          <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10"
              viewBox="0 0 24 24"
            >
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div className="flex-grow">
            <h2 className="text-black text-lg title-font font-medium mb-3">
              JavaScript
            </h2>
            <p className="leading-relaxed text-black">
              Sólida comprensión de los fundamentos de JavaScript, incluyendo
              variables, funciones, objetos, DOM, eventos y programación
              asincrónica.
            </p>
          </div>
        </div>
        <div className="p-4 sm:w-1/2 md:w-1/3 lg:w-1/3 flex flex-col text-center items-center">
          <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10"
              viewBox="0 0 24 24"
            >
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div className="flex-grow">
            <h2 className="text-black text-lg title-font font-medium mb-3">
              Tailwind
            </h2>
            <p className="leading-relaxed text-black">
              Habilidad para escribir código HTML y CSS limpio y eficiente para
              crear interfaces de usuario atractivas.
            </p>
          </div>
        </div>
        <div className="p-4 sm:w-1/2 md:w-1/3 lg:w-1/3 flex flex-col text-center items-center">
          <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10"
              viewBox="0 0 24 24"
            >
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div className="flex-grow">
            <h2 className="text-black text-lg title-font font-medium mb-3">
              PHP
            </h2>
            <p className="leading-relaxed text-black">
              Amplio conocimiento y experiencia en el desarrollo de aplicaciones
              web con PHP.
            </p>
          </div>
        </div>
        <div className="p-4 sm:w-1/2 md:w-1/3 lg:w-1/3 flex flex-col text-center items-center">
          <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10"
              viewBox="0 0 24 24"
            >
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div className="flex-grow">
            <h2 className="text-black text-lg title-font font-medium mb-3">
              Laravel
            </h2>
            <p className="leading-relaxed text-black">
              Dominio del framework Laravel para crear aplicaciones web robustas
              y escalables.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
