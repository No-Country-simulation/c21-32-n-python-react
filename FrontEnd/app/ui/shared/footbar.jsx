import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footbar() {
  return (
    <section
      id="footbar"
      className="w-full h-[223px] flex justify-between items-center"
    >
      <Image
        alt="Logo del refugio"
        src={"/images/rectangle.png"}
        width={122}
        height={86}
      />
      <div>
        <FootbarLinks />
        <p className="font-normal text-sm text-grayText text-center">
          © Copyright 2024 xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        </p>
      </div>
      <SocialLinks />
    </section>
  );
}

const FootbarLinks = () => {
  return (
    <div className="flex gap-6 mb-4">
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
