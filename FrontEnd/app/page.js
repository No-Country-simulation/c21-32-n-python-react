import Welcome from "./ui/home/welcome";
import Testimonials from "./ui/home/testimonials";
import Highlighted from "./ui/home/highlighted";
import LatestRescues from "./ui/home/latest-rescues";
import About from "./ui/home/about";
import Contact from "./ui/home/contact";
import NavigationBar from "./ui/shared/navigation-bar";
import Footbar from "./ui/shared/footbar";
import HelpUs from "./ui/home/help-us";

export default function Home() {
  return (
    <div>
      <NavigationBar/>
      <div className="divide-y divide-solid divide-grayText/20">
        <Welcome />
        <Testimonials />
        <Highlighted />
        <LatestRescues />
        <About />
        <HelpUs />
        <Contact />
        <Footbar />
      </div>
    </div>
  );
}
