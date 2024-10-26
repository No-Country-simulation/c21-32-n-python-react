import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HelpUs() {
  return (
    <section id="help-us" className="h-[670px] w-full relative">
      <div className="flex justify-between h-full">
        <Image
          className="m-auto max-h-[295px]"
          alt="Welcome image"
          src="/images/rectangle.png"
          width={469}
          height={295}
        />
        <div className="m-auto w-[730px] text-center">
          <h1 className="font-bold text-5xl mb-10">
            ¡Necesitamos de tu ayuda!
          </h1>
          <p className="font-normal mb-36 text-[#545454]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit
          </p>
          <Link href="/donations">
            <button className="rounded-md w-28 h-10 bg-bgButton text-white font-semibold text-lg">
              Donar
            </button>
          </Link>
        </div>
      </div>
      <Image
        className="absolute bottom-0 left-1/2 -translate-x-1/2 "
        alt="Logo de Perrito"
        src={"/images/dog.png"}
        height={372}
        width={348}
      />
    </section>
  );
}
