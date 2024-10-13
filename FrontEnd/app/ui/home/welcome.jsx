import Image from "next/image";
import React from "react";

export default function Welcome() {
  return (
    <section id="welcome" className="w-full h-[660px]">
      <div className="flex justify-between h-full">
        <div className="m-auto">
          <h1 className="font-bold text-5xl h-28 w-[445px] mb-10">
            ¿Buscas un perro o un gato?
          </h1>
          <div className="flex justify-around">
            <button className="rounded-md w-28 h-10 bg-bgButton text-white font-semibold text-lg">
              Adoptar
            </button>
            <button className="rounded-md w-28 h-10 bg-bgButton text-white font-semibold text-lg">
              Registrar
            </button>
          </div>
        </div>
        <Image
          className="m-auto max-h-[538px]"
          alt="Welcome image"
          src="/images/rectangle.png"
          width={614}
          height={538}
        />
      </div>
    </section>
  );
}
