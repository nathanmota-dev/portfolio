import Navbar from "../[locale]/components/navbar";
import { AboutSection } from "./pages/about";
import { EducationExperience } from "./pages/education-experience";
import HeroSection from "./pages/hero-section";
import { ProjectsSection } from "./pages/projects";
import { SkillsSection } from "./pages/skills-section";

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
            <div id="education-section">
                <EducationExperience />
            </div>
            <div id="projects-section">
                <ProjectsSection />
            </div>
            <div id="skills-section">
                <SkillsSection />
            </div>
        </div >
    );
}

