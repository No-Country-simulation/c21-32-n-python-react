import NavigationBar from "../ui/shared/navigation-bar";
import Banner from "./pet/banner";
import CardList from "./cardList";

export default function AdoptionPage() {
    return (
        <div>
            <div className="container mx-auto">
                <NavigationBar />
                <Banner />
            </div>
            <div className="container mx-auto p-6">
                <CardList />
            </div>
        </div>
    );
}
