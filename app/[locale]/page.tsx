import Navbar from "../[locale]/components/navbar";
import { AboutSection } from "./pages/about";
import HeroSection from "./pages/hero-section";
import { ProjectsSection } from "./pages/projects";

export default function Home() {
    return (
        <div >
            <Navbar />
            <div id="hero-section">
            <HeroSection />
            </div>
            <div id="about-section">
            <AboutSection />
            </div>
            <div id="projects-section">
            <ProjectsSection />
            </div>      
        </div>
    );
}

