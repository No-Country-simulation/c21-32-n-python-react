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
    <div className="container mx-auto">
      <NavigationBar />
      <Welcome />
      <Testimonials />
      <Highlighted />
      {/*
      <LatestRescues />
      <About />
      <Help />
      <Contact />
      <Footbar /> */}
    </div>
  );
}
