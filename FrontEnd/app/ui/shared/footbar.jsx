import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footbar() {
  return (
    <section
      id="footbar"
      className="w-full h-[160px] bg-[#024873] flex justify-center items-center" // Aquí se centra el contenido horizontal y verticalmente
    >
      <div className="flex items-center gap-16"> {/* Espacio entre elementos */}
        <div className="flex items-center mr-16">
          <Link href="/">
            <Image
              className="ml-28 md:ml-12 sm:ml-4 h-full object-cover"
              alt="Logo del refugio"
              src="/images/log.png"
              width={100}
              height={60}
            />
          </Link>
        </div>

        <div className="flex flex-col items-center"> {/* Centrado verticalmente */}
          <FootbarLinks />
          <p className="font-normal text-sm text-slate-300 text-center">
            © Copyright 2024 Derechos Reservados
          </p>
        </div>
        <SocialLinks />
      </div>
    </section>
  );
}

const FootbarLinks = () => {
  return (
    <div className="flex items-center gap-6 mb-4 text-white">
      <Link href={"/register"}>Registro</Link>
      <Link href={"/register"}>Adopción</Link>
      <Link href={"/donations"}>Donaciones</Link>
      <Link href={"#about-us"}>Nosotros</Link>
      <Link href={"#contact"}>Contacto</Link>
    </div>
  );
};

const SocialLinks = () => {
  return (
    <div className="flex gap-2">
      <Link href="https://www.facebook.com/">
        <Image
          alt="Facebook icon"
          src="/icons/facebook-icon00.png"
          width={32}
          height={32}
        />
      </Link>
      <Link href="https://www.instagram.com/" width={24} height={24}>
        <Image
          alt="Facebook icon"
          src="/icons/instagram-icon00.png"
          width={32}
          height={32}
        />
      </Link>
      <Link href="https://www.x.com/" width={24} height={24}>
        <Image
          alt="Facebook icon"
          src="/icons/twitter-icon00.png"
          width={32}
          height={32}
        />
      </Link>
      <Link href="https://www.youtube.com/" width={24} height={24}>
        <Image
          alt="Facebook icon"
          src="/icons/youtube-icon00.png"
          width={32}
          height={32}
        />
      </Link>
    </div>
  );
};
