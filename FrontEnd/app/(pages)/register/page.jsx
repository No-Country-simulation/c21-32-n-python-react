import Image from "next/image";
import RegisterForm from "@/app/ui/register/register-form";

export default function register() {
  return (
    <div className="w-full h-screen">
      <div className="flex justify-between h-full ">
        <div className="w-1/2 hidden lg:block">
          <Image
            alt="Cat"
            src="/images/cat.jpg"
            className="rounded-e-2xl w-screen h-full"
            height={89}
            width={400}
          />
        </div>
        <div className="mt-20 sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-5 text-left text-2xl font-bold leading-9 tracking-tight text-[#0e4a67]">
            Crea tu cuenta
          </h2>
          <p className="mb-5 text-left text-sm text-gray-500">
            ¿Ya tienes cuenta?{" "}
            <a
              href="/login"
              className="font-semibold leading-6 text-[#fd8d53] hover:text-[#faa16e]"
            >
              Inicia Sesión
            </a>
          </p>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}
