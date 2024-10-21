import Image from "next/image";
import React from "react";

export default function Testimonials() {
  return (
    <section className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <img
          alt=""
          src="/images/logo.jpg"
          className="mx-auto h-24"
        />
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>
              “Adoptar un perro es una decisión que debe ser tomada con responsabilidad y preparación. Aquí te ofrecemos algunos consejos esenciales para asegurar una adopción exitosa.
Los perros adoptados pueden haber enfrentado situaciones difíciles. No te enfoques en su pasado, sino en ofrecerles un presente y un futuro mejor.”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              alt=""
              src="/images/holder.png"
              className="mx-auto h-10 w-10 rounded-full"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">Judith Black</div>
            </div>
          </figcaption>
        </figure>
        
      </div>
    </section>
  );
}
