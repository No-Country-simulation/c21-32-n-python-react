import Image from "next/image";
import Link from "next/link";
import { auth } from "@/auth";
import signOutNav from "./signOutNav";

export default async function NavigationBar() {
  //const { data: session } = useSession();
  const session = await auth();
  const isAdmin = session?.user?.isAdmin;

  return (
    <div className="flex items-center justify-between h-20 max-w-full bg-[#2684FF47]">
      <div className="h-full ml-2">
        <Link href="/">
          <Image
            className="h-full"
            alt="Logo del refugio"
            src="/images/logo.png"
            width={207}
            height={50}
          />
        </Link>
        
      </div>
      <div className="flex gap-10">
        <Link href="/">
        <p className="font-semibold text-base">
        <Image
          alt="pets"
          src="/images/banner1.png"
          width={200}
          height={200}/>
        </p>
          
        </Link>
        <Link href="/register">
          <p className="font-semibold text-base">Registro</p>
        </Link>
        <Link href="/adoption">
            <p className="font-semibold text-base">Adopción</p>
          </Link>
        {/*!isAdmin && (
          
        )*/}
        <Link href="/donations">
          <p className="font-semibold text-base">Donaciones</p>
        </Link>
        <Link href="/#about-us">
          <p className="font-semibold text-base">Nosotros</p>
        </Link>
        <Link href="/#contact">
          <p className="font-semibold text-base">Contacto</p>
        </Link>
        <Link href="/admin/dashboard">
            <p className="font-semibold text-base">Solicitudes</p>
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
          <button className="rounded-md w-28 h-10 bg-bgButton text-white font-semibold text-lg mr-4">
            Ingresar
          </button>
        </Link>
      )}
    </div>
  );
}
