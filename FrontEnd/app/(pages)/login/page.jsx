import Image from "next/image";
import LoginForm from "@/app/ui/login/login-form";

export default function LoginPage() {
  return (
<div className="w-full h-screen flex">
  <div className="w-1/2 h-screen relative shadow-2xl">
    <Image
      src="/images/cat-login.png"
      alt="Cat"
      fill
      className="object-cover" // Ajusta la imagen al contenedor
    />
  </div>
  <div className="w-full md:w-1/2 flex flex-col h-full flex-grow">
    <div className="flex justify-center md:justify-start md:-mb-10 mx-auto">
      <Image
        src="/images/p-login.png"
        height={800}
        width={500}
      />
    </div>
    <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
      <h2 className="mt-5 text-left text-2xl font-bold leading-9 tracking-tight text-[#0e4a67]">
        Login
      </h2>
      <p className="mb-5 text-left text-sm text-gray-500">
        ¿No tienes cuenta?{" "}
        <a
          href="register"
          className="font-semibold leading-6 text-[#fd8d53] hover:text-[#faa16e]"
        >
          Crea una ahora
        </a>
      </p>
      <LoginForm />
      {/* <form
            action={async () => {
              "use server";
              await signIn("google");
            }}
          >
            <button type="submit">Signin with Google</button>
          </form> */}
      <div>
        <Image
          alt="cat"
          src="/images/cat.png"
          width={400}
          height={300}
          style={{
            position: "absolute",
            bottom: "0",
            right: "0",
          }}
          className="lg:h-80 lg:w-60 md:h-50 md:w-40"
        />
      </div>
    </div>
  </div>
</div>


  );
}
