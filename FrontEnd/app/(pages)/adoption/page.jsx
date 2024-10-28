import Banner from "@/app/ui/adoption/banner";
import CardList from "@/app/ui/adoption/cardList";
import Filter from "@/app/ui/adoption/Filter";
import Pagination from "@/app/ui/adoption/Pagination";
import SearchBar from "@/app/ui/adoption/SearchBar";
import NavigationBar from "@/app/ui/shared/navigation-bar";

const CARDS_TO_SHOW = 8;

export default async function AdoptionPage({ searchParams }) {
  const { page = "1", search = "" } = await searchParams;
  const data = await fetch(
    `http://127.0.0.1:8000/api/v1/pets/mascotas/?search=${search}&page=${page}`
  );
  const pets = await data.json();
  const totalPages = Math.ceil(pets.length / CARDS_TO_SHOW);

  return (
    <div>
      <div className="container mx-auto">
        <NavigationBar />
        <Banner />
      </div>
      <div className="flex justify-around pt-12">
        <SearchBar />
        <Filter />
      </div>
      <div className="container mx-auto p-6 pt-20">
        <CardList dataList={pets} />
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
