import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HelpUs() {
  return (
    <section id="help-us" className="h-[670px] w-full relative">
      <div className="flex justify-between h-full">
        <Image
          className="m-auto max-h-[395px] hidden md:block rounded-lg border border-black"
          alt="Welcome image"
          src="/images/help.jpg"
          width={519}
          height={355}
        />
        <div className="m-auto w-[730px] text-center">
          <h1 className="font-bold text-5xl mb-10">
            ¡Necesitamos de tu ayuda!
          </h1>
          <p className="font-normal mb-36 text-[#545454]">
          <span className="font-bold text-black">Gracias por apoyar nuestra causa</span> y apoyar Nuestro Refugio. Juntos, podemos cambiar vidas y crear un futuro mejor para todos nuestros amigos de cuatro patas.
          </p>
          <Link href="/donations">
            <button className="rounded-md w-28 h-10 bg-bgButton bg-gradient-to-l from-red-500 to-orange-500 text-white font-semibold text-lg">
              Donar
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
