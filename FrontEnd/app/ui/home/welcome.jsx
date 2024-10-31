import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Welcome() {
  return (
    <section id="welcome" className="w-full h-[560px]">
      <div className="flex justify-between h-full">
        <div className="m-auto">
          <h1 className="font-bold text-5xl h-28 w-[445px] mb-10">
            ¿Buscas un perro o un gato?
          </h1>
          <div className="flex justify-around">
            <Link href="adoption">
              <button className="rounded-md w-28 h-10 bg-gradient-to-r bg-bgButton px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#faa16e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24AFB5]">
                Adoptar
              </button>
            </Link>
            <Link href="/register">
              <button className="rounded-md w-28 h-10 bg-gradient-to-r bg-bgButton px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#faa16e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24AFB5]">
                Registrar
              </button>
            </Link>
          </div>
        </div>
        <div className="hidden md:block">
          <Image
            className="mt-12 mr-8 h-[450px] w-11/12 rounded-lg"
            alt="Welcome image"
            src="/images/refugio01.jpg"
            width={410}
            height={300}
          />
        </div>  
      </div>
    </section>
  );
}
