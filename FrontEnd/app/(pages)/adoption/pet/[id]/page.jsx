import CardDetailContainer from "@/app/ui/adoption/pet/card-detail-container";
import NavigationBar from "@/app/ui/shared/navigation-bar";

export default function CardDetailPage({ params }) {
  return (
    <div>
      <div className="container mx-auto">
        <NavigationBar />
      </div>
      <CardDetailContainer params={params} />
    </div>
  );
}
