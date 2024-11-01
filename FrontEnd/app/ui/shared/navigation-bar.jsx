import Image from "next/image";
import Link from "next/link";
import { auth } from "@/auth";
import signOutNav from "./signOutNav";

export default async function NavigationBar() {
  //const { data: session } = useSession();
  const session = await auth();
  const isAdmin = session?.user?.isAdmin;

  return (
    <div className="relative flex items-center justify-between bg-[#024873] w-auto h-24">
      <div className="z-10 flex items-center mr-auto mx-8">
        <Link href="/">
          <Image
            className=" ml-28 md:ml-12 sm:ml-2 h-full object-cover object-center mr-4"
            alt="Logo del refugio"
            src="/images/log.png"
            width={100}
            height={60}
          />
        </Link>
      </div>
      <Image
        className="absolute top-[2.2rem] z-0 lg:left-[18%] xl:left-[28%] lg:max-2xl:left[38] hidden md:block"
        alt="pets"
        src="/images/banner1.png"
        width={300}
        height={200}
      />

      <div className="z-10 md:flex ml-8 gap-10 hidden md:max-sm:block">
        <Link href="/adoption">
          <p className="font-semibold text-gray-50 hover:text-[#FFF79F]">Adopción</p>
        </Link>
        {!isAdmin && (
          <Link href="/donations">
            <p className="font-semibold text-gray-50 hover:text-[#FFF79F]">Donaciones</p>
          </Link>
        )}
        <Link href="/#about-us">
          <p className="font-semibold text-gray-50 hover:text-[#FFF79F]">Nosotros</p>
        </Link>
        <Link href="/#contact">
          <p className="font-semibold text-gray-50 hover:text-[#FFF79F]">Contacto</p>
        </Link>
        {isAdmin && (
          <Link href="/admin/dashboard">
            <p className="font-semibold text-gray-50 hover:text-[#FFF79F]">Solicitudes</p>
          </Link>
        )}
      </div>
      {session?.user ? (
        <form action={signOutNav}>
          <button className="rounded-md w-28 h-10 bg-gradient-to-r from-red-500 to-orange-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:outline hover:outline-offset-1 hover:outline-[#f1f7fa] mr-10 ml-10 ">
            Sign Out
          </button>
        </form>
      ) : (
        <Link href="/login">
          <button className="rounded-md w-28 h-10 bg-gradient-to-r from-red-500 to-orange-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:outline hover:outline-offset-1 hover:outline-[#fcfcfc] mr-10 ml-10 ">
            Ingresar
          </button>
        </Link>
      )}
    </div>
  );
}
