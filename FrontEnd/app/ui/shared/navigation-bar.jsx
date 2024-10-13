import Image from "next/image";
import Link from "next/link";

export default function NavigationBar() {
  return (
    <div className="flex items-center justify-between h-20 max-w-full">
      <Image
        className="max-h-14 min-w-[207px] ml-20"
        alt="Logo del refugio"
        src="/images/rectangle.png"
        width={207}
        height={50}
      />
      <div className="flex gap-10 mr-40">
        <Link href="/register">
          <p className="font-semibold text-base">Registro</p>
        </Link>
        <Link href="/adoption">
          <p className="font-semibold text-base">Adopción</p>
        </Link>
        <Link href="/donations">
          <p className="font-semibold text-base">Donaciones</p>
        </Link>
        <Link href="/about">
          <p className="font-semibold text-base">Nosotros</p>
        </Link>
        <Link href="/contact">
          <p className="font-semibold text-base">Contacto</p>
        </Link>
      </div>
    </div>
  );
}
