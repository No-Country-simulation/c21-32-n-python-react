"use client";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import signOutNav from "./signOutNav";

export default function NavigationBar() {
  const { status } = useSession();

  return (
    <div className="flex items-center justify-between h-20 max-w-full bg-[#2684FF47]">
      <Link href="/">
        <Image
          className="max-h-15 min-w-[60px] ml-20"
          alt="Logo del refugio"
          src="/images/logo.jpg"
          width={60}
          height={50}
        />
      </Link>
      <div className="flex gap-10 mr-2">
        <Link href="/register">
          <p className="font-semibold text-base">Registro</p>
        </Link>
        <Link href="/adoption">
          <p className="font-semibold text-base">Adopción</p>
        </Link>
        <Link href="/donations">
          <p className="font-semibold text-base">Donaciones</p>
        </Link>
        <Link href="/#about-us">
          <p className="font-semibold text-base">Nosotros</p>
        </Link>
        <Link href="/#contact">
          <p className="font-semibold text-base">Contacto</p>
        </Link>
      </div>
      {status === "authenticated" ? (
        <button className="mr-4" onClick={() => signOutNav()}>
          Sign Out
        </button>
      ) : (
        <Link href="/login">
          <button className="rounded-md w-28 h-10 bg-bgButton text-white font-semibold text-lg mr-4">
            Ingresar
          </button>
        </Link>
      )}
    </div>
  );
}
