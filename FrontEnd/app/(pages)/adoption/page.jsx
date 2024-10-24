import AdoptionContainer from "@/app/ui/adoption/adoption-container";
import Banner from "@/app/ui/adoption/banner";
import NavigationBar from "@/app/ui/shared/navigation-bar";

export default function AdoptionPage() {
  return (
    <div>
      <div className="container mx-auto">
        <NavigationBar />
        <Banner />
      </div>
      <AdoptionContainer />
    </div>
  );
}
