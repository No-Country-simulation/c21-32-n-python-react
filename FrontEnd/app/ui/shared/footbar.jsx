import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footbar() {
  return (
    <section
      id="footbar"
      className="w-full h-[223px] bg-[#024873] flex justify-between items-center"
    >
      <div className="flex items-center mr-auto mx-8">
        <Link href="/">
          <Image
            className="ml-28 md:ml-12 sm:ml-4 h-full object-cover object-center"
            alt="Logo del refugio"
            src="/images/log.png"
            width={100}
            height={60}
          />
        </Link>
        
      </div>
      <div>
        <FootbarLinks />
        <p className="font-normal text-sm text-slate-300 text-center">
          © Copyright 2024 xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        </p>
      </div>
      <SocialLinks />
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
          src="/icons/facebook-icon.png"
          width={24}
          height={24}
        />
      </Link>
      <Link href="https://www.instagram.com/" width={24} height={24}>
        <Image
          alt="Facebook icon"
          src="/icons/instagram-icon.png"
          width={24}
          height={24}
        />
      </Link>
      <Link href="https://www.x.com/" width={24} height={24}>
        <Image
          alt="Facebook icon"
          src="/icons/twitter-icon.png"
          width={24}
          height={24}
        />
      </Link>
      <Link href="https://www.youtube.com/" width={24} height={24}>
        <Image
          alt="Facebook icon"
          src="/icons/youtube-icon.png"
          width={24}
          height={24}
        />
      </Link>
    </div>
  );
};
