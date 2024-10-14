import Welcome from "./ui/home/welcome";
import Testimonials from "./ui/home/testimonials";
import Highlighted from "./ui/home/highlighted";
import LatestRescues from "./ui/home/latest-rescues";
import About from "./ui/home/about";
import Help from "./ui/home/help";
import Contact from "./ui/home/contact";
import NavigationBar from "./ui/shared/navigation-bar";
import Footbar from "./ui/shared/footbar";

export default function Home() {
  return (
    <div className="container mx-auto ">
      <NavigationBar />
      <div className="divide-y divide-solid divide-grayText/20">
        <Welcome />
        <Testimonials />
        <Highlighted />
        <LatestRescues />
        <About />
        <Help />
      </div>
      {/*   
     
      
      <Contact />
      <Footbar /> */}
    </div>
  );
}
