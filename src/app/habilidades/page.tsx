import Image from 'next/image'
export default function Habilidades() {
    return (
    
        <div className="container px-5 py-24 mx-auto h-screen">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
              Habilidades
            </h1>
            <p className="text-black leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Con los conocimientos en diferentes lenguajes de programación y
              hablididades en el desarrollo web, puedo crear aplicaciones web de
              alta calidad y rendimiento.
            </p>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
                <Image
                src="/images/react.png" 
                alt="hero" 
                width={100}
                height={100}
                 />
              </div>
              <div className="flex-grow">
                <h2 className="text-black text-lg title-font font-medium mb-3">
                  React
                </h2>
                <p className="leading-relaxed text-black">
                  Amplio conocimiento y experiencia en la creación de interfaces
                  de usuario interactivas y dinámicas con React.js.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
                <Image 
                src="/images/next.png" 
                alt="hero" 
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
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-black text-lg title-font font-medium mb-3">
                  Javascript
                </h2>
                <p className="leading-relaxed text-black">
                  Sólida comprensión de los fundamentos de JavaScript, incluyendo
                  variables, funciones, objetos, DOM, eventos y programación
                  asincrónica.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
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
                  Habilidad para escribir código HTML y CSS limpio y eficiente
                  para crear interfaces de usuario atractivas.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
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
                  Amplio conocimiento y experiencia en el desarrollo de
                  aplicaciones web con PHP.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
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
                  Dominio del framework Laravel para crear aplicaciones web
                  robustas y escalables.
                </p>
              </div>
            </div>
          </div>
        </div>
   
    );
  }
  