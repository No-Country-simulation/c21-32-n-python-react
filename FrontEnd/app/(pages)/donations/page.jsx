import NavigationBar from "@/app/ui/shared/navigation-bar";
import Image from "next/image";

export default function DonationsPage() {
  return (
    <div >
      <NavigationBar />
      <div className="flex bg-slate-100 rounded-3xl h-2/3 w-2/3 mx-auto justify-center items-center p-8 mt-5 mb-5">
          <section id="donations" className="w-full">
            <form className="h-4/5 flex flex-col gap-8">
              <div className="flex gap-16 h-full">
                <div className="w-[516px] flex flex-col gap-4">
                  <p className="mb-8 text-center">Donaciones</p>
                  <label htmlFor="name" className="text-[#413E3E]">
                    Nombre y Apellido
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Juan Perez"
                    className="block w-full rounded-lg h-12 border-2 px-2 focus:outline-none focus:border-[#0F0AF5] focus:border mb-4"
                  />
                  <label htmlFor="card" className="text-[#413E3E]">
                    Número de Tarjeta
                  </label>
                  <input
                    id="card"
                    type="text"
                    placeholder="xxxx xxxx xxx xxx"
                    className="block w-full rounded-lg h-12 border-2 px-2 focus:outline-none focus:border-[#0F0AF5] focus:border mb-4"
                  />
                  <label htmlFor="date" className="text-[#413E3E]">
                    Fecha de Vencimiento
                  </label>
                  <input
                    id="date"
                    type="text"
                    placeholder="mm/yy"
                    className="block w-full rounded-lg h-12 border-2 px-2 focus:outline-none focus:border-[#0F0AF5] focus:border mb-4"
                  />
                  <label htmlFor="name" className="text-[#413E3E]">
                    CVV
                  </label>
                  <input
                    id="cvv"
                    type="password"
                    placeholder="000"
                    className="block w-full rounded-lg h-12 border-2 px-2 focus:outline-none focus:border-[#0F0AF5] focus:border mb-4"
                  />
                </div>
                <div className="flex flex-col gap-y-4 h-full justify-center items-center">
                  <Image
                    src={"/images/donations_dog.png"}
                    width={300}
                    height={320}
                    alt="Dog"
                  />
                  <button className="rounded-md w-28 h-10 bg-bgButton text-white font-semibold text-lg">
                    Donar
                  </button>
                  <Image
                    src={"/images/donations_cards.png"}
                    width={300}
                    height={20}
                    alt="Acepted cards"
                  />
                </div>
              </div>
            </form>
          </section>
        </div>


    </div>
  );
}
