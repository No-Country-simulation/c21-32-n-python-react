import Image from "next/image";
import NavigationBar from "../ui/shared/navigation-bar";

export default function DonationsPage() {
  return (
    <div className="container mx-auto">
      <NavigationBar />
      <section id="donations" className="h-[600px]">
        <form className="h-full">
          <div className="flex gap-16 pt-6 h-full">
            <div className="w-[516px]">
              <p className="mb-12">Donaciones</p>
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
            <div className="flex flex-col gap-y-4 h-full justify-end">
              <Image
                src={"/images/donations_cards.png"}
                width={300}
                height={20}
                alt="Acepted cards"
              />
              <button className="rounded-md w-28 h-10 bg-bgButton text-white font-semibold text-lg">
                Donar
              </button>
              <Image
                src={"/images/donations_dog.png"}
                width={300}
                height={320}
                alt="Dog"
              />
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}
