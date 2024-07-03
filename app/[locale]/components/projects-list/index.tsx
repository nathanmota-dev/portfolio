import { ProjectCard } from "./project-card";
import { FaCss3Alt, FaHtml5, FaNodeJs, FaPhp, FaPython, FaReact, } from "react-icons/fa";
import { RiJavascriptFill, RiRemixiconLine } from "react-icons/ri";
import { TbBrandNextjs, TbBrandVite } from "react-icons/tb";
import { SiBootstrap, SiExpress, SiFastapi, SiFastify, SiMysql, SiPostgresql, SiReacthookform, SiSass, SiScrollreveal, SiShadcnui, SiStyledcomponents, SiSwiper, SiTailwindcss, SiZod } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import CoffeeLP from "/public/projects/Coffee-LP.jpg"
import InsoveLP from "/public/projects/Insove-LP.jpg"
import Buscador from "/public/projects/Buscador.jpg"
import Dash from "/public/projects/Dash.jpg"
import ListaDePaises from "/public/projects/ListaDePaises.jpg"
import GoogleKeep from "/public/projects/GoogleKeep.jpg"
import NodeFastify from "/public/projects/NodeFastify.jpg"
import TechVantage from "/public/projects/TechVantage.jpg"
import FastAPI from "/public/projects/FastAPI.jpg"

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

const projectsList = [
    {
        image: TechVantage,
        title: "Tech Vantage - Site Corporativo",
        description: "Projeto Final Programação para Internet desenvolvendo um sistema funcional com alguns requisitos como Cadastro de Formulário e Impressão de Dados",
        technologies: ["PHP", "HTML", "CSS", "JavaScript", "Bootstrap", "MySQL"],
        githubUrl: "https://github.com/nathanmota-dev/Programacao-para-Internet-1",
        deployUrl: "http://techvantage.infinityfreeapp.com/index.php"
    },
    {
        image: CoffeeLP,
        title: "Landing Page Meow Café",
        description: "Projeto proposto pela Codante onde o objetivo foi dar a vida ao design do Meow Café transformando-o em uma página funcional e responsiva sem o uso de frameworks.",
        technologies: ["HTML", "CSS", "JavaScript"],
        githubUrl: "https://github.com/nathanmota-dev/landing-page-meow-cafe",
        deployUrl: "https://nathanmota-dev.github.io/landing-page-meow-cafe/"
    },
    {
        image: InsoveLP,
        title: "Landing Page Insove Medical Healthcare",
        description: "Landing Page feita utilizando TailwindCSS projetada para consultórios médicos onde o objetivo foi proporcionar uma boa experiência para médicos e pacientes.",
        technologies: ["HTML", "TailwindCSS", "RemixIcon", "SwiperJS", "ScrollReveal"],
        githubUrl: "https://github.com/nathanmota-dev/landing-page-insove-medical-healthcare",
        deployUrl: "https://insove-medical-healthcare.netlify.app/"
    },
    {
        image: ListaDePaises,
        title: "Lista de Países",
        description: "Projeto proposto pela Codante onde o objetivo foi utilizar uma API para objter os dados fazendo uma aplicação reponsiva que use Server Components, Data fetching, Nested layouts, Routes e Loading",
        technologies: ["Next", "TypeScript", "TailwindCSS"],
        githubUrl: "https://github.com/nathanmota-dev/mp-lista-de-paises-next",
        deployUrl: "https://mp-lista-de-paises-next-delta.vercel.app/"
    },
    {
        image: Buscador,
        title: "Buscador de Nomes",
        description: "Projeto Final de Programação para Internet onde o objetivo foi criar um buscador de nomes consumindo uma API no backend, tratando os dados e exibindo no frontend com um histórico de consultas.",
        technologies: ["React", "Node", "Express", "MySQL"],
        githubUrl: "https://github.com/nathanmota-dev/programacao-para-internet-2",
        deployUrl: "https://programacao-para-internet-2.vercel.app/"
    },
    {
        image: Dash,
        title: "Dashboard",
        description: "Dashboard com página de Login, Cadastro, autenticação, criptografia e um DashBoard",
        technologies: ["React", "Vite", "Node", "Express", "MySQL", "SASS", "ReactHookForm", "React-Icons", "Yup.js"],
        githubUrl: "https://github.com/nathanmota-dev/fullstack-auth-dash-client",
        deployUrl: ""
    },
    {
        image: GoogleKeep,
        title: "Google Keep Clone",
        description: "Clone do Google Keep proposto a ser realizado sem frameworks onde permite que você faça anotações, fixe notas, duplique notas e exporte as notas para um arquivo CSV.",
        technologies: ["HTML", "CSS", "JavaScript"],
        githubUrl: "https://github.com/nathanmota-dev/Google-Keep-JS",
        deployUrl: "https://google-keep-js.vercel.app/"
    },
    {
        image: NodeFastify,
        title: "API - Node Fastify",
        description: "API feita com o objetivo de realizar um CRUD utilizando um banco de dados relacional",
        technologies: ["Node", "Fastify", "PostgreSQL"],
        githubUrl: "https://github.com/nathanmota-dev/node-com-fastify",
        deployUrl: ""
    },
    {
        image: FastAPI,
        title: "API - FastAPI",
        description: "API feita com FastApi com o objetivo de construir uma API roubusta e modularizada em Python onde utilizei foi reaproveitada na minha Iniciação Científica",
        technologies: ["Python", "FastAPI", "PostgreSQL"],
        githubUrl: "https://github.com/nathanmota-dev/node-com-fastify",
        deployUrl: ""
    }
]


export const ProjectList = () => {

    return (
        <section className="container py-20 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-6 gap-y-6">
            {projectsList.map((project, index) => (
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
