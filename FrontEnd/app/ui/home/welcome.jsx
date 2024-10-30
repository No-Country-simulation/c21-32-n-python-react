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
              <button className="rounded-md w-28 h-10 bg-bgButton text-white font-semibold text-lg">
                Adoptar
              </button>
            </Link>
            <Link href="/register">
              <button className="rounded-md w-28 h-10 bg-bgButton text-white font-semibold text-lg">
                Registrar
              </button>
            </Link>
          </div>
        </div>
        <Image
          className="m-auto max-h-[538px] rounded-lg"
          alt="Welcome image"
          src="/images/refugio01.jpg"
          width={410}
          height={300}
        />
      </div>
    </section>
  );
}
