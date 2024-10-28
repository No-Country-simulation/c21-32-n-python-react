import AdoptionContainer from "@/app/ui/adoption/adoption-container";
import Banner from "@/app/ui/adoption/banner";
import NavigationBar from "@/app/ui/shared/navigation-bar";

export default async function AdoptionPage({ queryparams }) {
  const currentPage = queryparams.get["page"] || 1;
  const data = await fetch(
    `http://127.0.0.1:8000/api/v1/pets/mascotas/?search=page=${currentPage}`
  );
  const pets = await data.json();

  return (
    <div>
      <div className="container mx-auto">
        <NavigationBar />
        <Banner />
      </div>
      <AdoptionContainer pets={pets} />
    </div>
  );
}
