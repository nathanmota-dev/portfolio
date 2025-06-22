"use client";

import { useState, useEffect } from "react";
import { ProjectCard } from "./project-card";
import { useLocale } from "next-intl";
import { loadProjectData } from "./loadData";
import { FaAws, FaCss3Alt, FaDocker, FaHtml5, FaJava, FaNodeJs, FaPhp, FaPython, FaReact } from "react-icons/fa";
import { RiJavascriptFill, RiRemixiconLine } from "react-icons/ri";
import { TbBrandNextjs, TbBrandThreejs, TbBrandVite } from "react-icons/tb";
import { SiAmazonaws, SiAuth0, SiBootstrap, SiExpress, SiFastapi, SiFastify, SiHibernate, SiMdx, SiMysql, SiPostgresql, SiRabbitmq, SiReacthookform, SiSass, SiScrollreveal, SiShadcnui, SiSpringboot, SiStyledcomponents, SiSwiper, SiTailwindcss, SiZod } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { DiRedis } from "react-icons/di";

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
    "PostgreSQL": SiPostgresql,
    "Java": FaJava,
    "Hibernate": SiHibernate,
    "Docker": FaDocker,
    "Spring Boot": SiSpringboot,
    "Redis": DiRedis,
    "NextAuth": SiAuth0,
    "Auth0": SiAuth0,
    "@next/mdx": SiMdx,
    "Shadcn.ui": SiShadcnui,
    "AWS": FaAws,
    "Amazon EC2": SiAmazonaws,
    "Amazon S3": SiAmazonaws,
    "RabbitMQ": SiRabbitmq,
    "Three.js": TbBrandThreejs,
};

interface ProjectListProps {
    filter: string;
}

export const ProjectList = ({ filter }: ProjectListProps) => {
    const locale = useLocale();
    const [projectsList, setProjectsList] = useState<any[]>([]);

    useEffect(() => {
        async function loadData() {
            if (locale) {
                try {
                    const projectData = await loadProjectData(locale);
                    setProjectsList(projectData);
                } catch (error) {
                    console.error("Failed to load data:", error);
                }
            }
        }
        loadData();
    }, [locale]);

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
                    developing={project.developing}
                />
            ))}
        </section>
    );
};
