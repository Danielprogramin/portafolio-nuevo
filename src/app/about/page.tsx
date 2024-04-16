import Image from "next/image";

export default function About() {
  return (
    <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-12 md:py-16 lg:py-20 flex flex-col md:flex-row items-center lg:h-screen">
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <Image
          className="object-cover object-center rounded"
          alt="hero"
          src="/images/perfil.png"
          width={720}
          height={600}
        />
      </div>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          Daniel Andres <br /> Ortiz Vertel
        </h1>
        <p className="mb-8 leading-relaxed text-black">
          Como desarrollador de software poseo un amplio conocimiento técnico y
          habilidades blandas como la resolución de problemas, la comunicación
          efectiva, el trabajo en equipo, la capacidad de aprendizaje continuo.
          Con experiencia que me permite desarrollar interfaces de usuario
          atractivas, optimizar el rendimiento de las aplicaciones y trabajar
          con diferentes frameworks y lenguajes de programación.
        </p>
      </div>
    </div>
  );
}
