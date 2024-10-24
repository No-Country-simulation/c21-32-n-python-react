import Image from "next/image";
import LoginForm from "@/app/ui/login/login-form";

export default function LoginPage() {
  return (
    <div className="w-full bg-[#d9d9d9] h-full divide-x divide-black">
      <div className="flex justify-between h-full ">
        <div className="relative h-40 w-40 sm:mx-auto ml-10 mt-[13em]">
          <Image
            alt="Dog"
            src="/images/logo.jpg"
            fill
            className="rounded-[100px] "
          />
        </div>
        <hr className="w-[2px] h-[100vh] bg-black border-[1px]" />
        <div className="mt-20 sm:mx-auto sm:w-full sm:max-w-sm">
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
          <div className="absolute bottom-0 left-[78%] h-[360px] w-80">
            <Image alt="Dog" src="/images/cat.png" fill />
          </div>
        </div>
      </div>
    </div>
  );
}
