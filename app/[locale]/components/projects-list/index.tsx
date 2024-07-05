import { ProjectCard } from "./project-card";
import { FaCss3Alt, FaHtml5, FaNodeJs, FaPhp, FaPython, FaReact, } from "react-icons/fa";
import { RiJavascriptFill, RiRemixiconLine } from "react-icons/ri";
import { TbBrandNextjs, TbBrandVite } from "react-icons/tb";
import { SiBootstrap, SiExpress, SiFastapi, SiFastify, SiMysql, SiPostgresql, SiReacthookform, SiSass, SiScrollreveal, SiShadcnui, SiStyledcomponents, SiSwiper, SiTailwindcss, SiZod } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import projectsList from "../projects-list/projects.json";

const techIcons = {
    "React": FaReact,
    "Next": TbBrandNextjs,
    "Node": FaNodeJs,
    "JavaScript": RiJavascriptFill,
    "TypeScript": BiLogoTypescript,
    "CSS": FaCss3Alt,
    "HTML": FaHtml5,
    "Express": SiExpress,
    "StyledComponents": SiStyledcomponents,
    "SASS": SiSass,
    "Shadcn/ui": SiShadcnui,
    "Bootstrap": SiBootstrap,
    "MySQL": SiMysql,
    "PHP": FaPhp,
    "TailwindCSS": SiTailwindcss,
    "Fastify": SiFastify,
    "FastAPI": SiFastapi,
    "Vite": TbBrandVite,
    "ReactHookForm": SiReacthookform,
    "ScrollReveal": SiScrollreveal,
    "SwiperJS": SiSwiper,
    "Zod": SiZod,
    "RemixIcon": RiRemixiconLine,
    "React-Icons": FaReact,
    "Python": FaPython,
    "PostgreSQL": SiPostgresql
};

interface ProjectListProps {
    filter: string;
}

export const ProjectList = ({ filter }: ProjectListProps) => {
    const filteredProjects = filter ? projectsList.filter(project => project.type === filter) : projectsList;

    return (
        <section className="container py-20 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-6 gap-y-6">
            {filteredProjects.map((project, index) => (
                <ProjectCard
                    key={index}
                    image={project.image}
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                    techIcons={techIcons}
                    githubUrl={project.githubUrl}
                    deployUrl={project.deployUrl}
                />
            ))}
        </section>
    );
}
