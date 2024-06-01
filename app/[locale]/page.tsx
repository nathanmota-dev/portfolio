import Navbar from "../[locale]/components/navbar";
import { AboutSection } from "./pages/about";
import HeroSection from "./pages/hero-section";

export default function Home() {
  return (
    <div >
      <Navbar />
      <HeroSection />
      <AboutSection />
    </div>
  );
}

