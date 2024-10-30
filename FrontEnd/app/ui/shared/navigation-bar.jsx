import Image from "next/image";
import Link from "next/link";
import { auth } from "@/auth";
import signOutNav from "./signOutNav";

export default async function NavigationBar() {
  //const { data: session } = useSession();
  const session = await auth();
  const isAdmin = session?.user?.isAdmin;

  return (
    <div className="relative flex items-center justify-between bg-[#024873] w-screen h-24">
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
     

      <div className="md:flex ml-8 gap-10 hidden md:max-sm:block">
        <Image
            className="absolute top-[2.2rem] z-10 md:left-4 lg:left-[18%] xl:left-[28%] lg:max-2xl:left[38] hidden md:block"
            alt="pets"
            src="/images/banner1.png"
            width={300}
            height={200}
          />
        <Link href="/adoption">
            <p className="font-semibold text-gray-50">Adopción</p>
          </Link>
        {/*!isAdmin && (
          
        )*/}
        <Link href="/donations">
          <p className="font-semibold text-gray-50">Donaciones</p>
        </Link>
        <Link href="/#about-us">
          <p className="font-semibold text-gray-50">Nosotros</p>
        </Link>
        <Link href="/#contact">
          <p className="font-semibold text-gray-50">Contacto</p>
        </Link>
        <Link href="/admin/dashboard">
            <p className="font-semibold text-gray-50">Solicitudes</p>
          </Link>
        {/*isAdmin && (
          
        )*/}
        {/* <Link href="/users/pets">
          <p className="font-semibold text-base">Mascotas</p>
        </Link> */}
      </div>
      {session?.user ? (
        <form action={signOutNav}>
          <button className="mr-4">Sign Out</button>
        </form>
      ) : (
        <Link href="/login">
          <button className="rounded-md w-28 h-10 bg-gradient-to-r from-red-500 to-orange-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#faa16e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24AFB5] mr-10 ml-10">
            Ingresar
          </button>
        </Link>
      )}
    </div>
    
  );
}
