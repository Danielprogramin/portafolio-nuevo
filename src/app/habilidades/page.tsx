import Image from "next/image";

import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Habilidades() {
  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16">
      <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 pt-10">
          Habilidades
        </h1>
        <p className="text-black leading-relaxed xl:w-2/4 lg:w-3/4 md:w-4/5 sm:w-full mx-auto">
          Con los conocimientos en diferentes lenguajes de programación y
          habilidades en el desarrollo web, puedo crear aplicaciones web de alta
          calidad y rendimiento.
        </p>
      </div>

      <div className="flex justify-center">
        <Carousel className="w-full max-w-xs ">
          <CarouselContent>
            <CarouselItem>
              <Card>
                <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                  <Image
                    src="/images/react.png"
                    alt="React"
                    width={100}
                    height={100}
                  />
                  <h2 className="text-black text-lg title-font font-medium mb-3">
                    React
                  </h2>
                  <p className="leading-relaxed  text-black">
                    Amplio conocimiento y experiencia en la creación de
                    interfaces de usuario interactivas y dinámicas con React.js.
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card>
                <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                  <Image
                    src="/images/next.png"
                    alt="Next JS"
                    width={100}
                    height={100}
                  />
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                    Next JS
                  </h2>
                  <p className="leading-relaxed text-black">
                    Dominio de Next.js para el desarrollo de aplicaciones web
                    estáticas y pre-renderizadas con React.
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card>
                <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
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
                  <h2 className="text-black text-lg title-font font-medium mb-3">
                    JavaScript
                  </h2>
                  <p className="leading-relaxed text-black">
                    Sólida comprensión de los fundamentos de JavaScript,
                    incluyendo variables, funciones, objetos, DOM, eventos y
                    programación asincrónica.
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card>
                <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
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
                  <h2 className="text-black text-lg title-font font-medium mb-3">
                    Tailwind
                  </h2>
                  <p className="leading-relaxed text-black">
                    Habilidad para escribir código HTML y CSS limpio y eficiente
                    para crear interfaces de usuario atractivas.
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card>
                <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
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
                  <h2 className="text-black text-lg title-font font-medium mb-3">
                    PHP
                  </h2>
                  <p className="leading-relaxed text-black">
                    Amplio conocimiento y experiencia en el desarrollo de
                    aplicaciones web con PHP.
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card>
                <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
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
                  <h2 className="text-black text-lg title-font font-medium mb-3">
                    Laravel
                  </h2>
                  <p className="leading-relaxed text-black">
                    Dominio del framework Laravel para crear aplicaciones web
                    robustas y escalables.
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
