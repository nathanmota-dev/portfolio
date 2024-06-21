import { ProjectCard } from "./project-card";
import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact, } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import CoffeeLP from "../../../../public/projects/Coffee-LP.jpg"
import InsoveLP from "../../../../public/projects/Insove-LP.jpg"
import Buscador from "../../../../public/projects/Buscador.jpg"
import Dash from "../../../../public/projects/Dash.jpg"
import ListaDePaises from "../../../../public/projects/ListaDePaises.jpg"
import GoogleKeep from "../../../../public/projects/GoogleKeep.jpg"
import NodeFastify from "../../../../public/projects/NodeFastify.jpg"

const techIcons = {
    "React": FaReact,
    "Next": TbBrandNextjs,
    "Node": FaNodeJs,
    "JavaScript": RiJavascriptFill,
    "TypeScript": BiLogoTypescript,
    "CSS": FaCss3Alt,
    "HTML": FaHtml5,
    "Express": SiExpress,
};

const projectsList = [    
    {
        image: CoffeeLP,
        title: "Landing Page Meow Café",
        description: "Projeto proposto pela Codante onde o objetivo foi dar a vida ao design do Meow Café transformando-o em uma página funcional e responsiva sem o uso de frameworks.",
        technologies: ["HTML", "CSS", "JavaScript"]
    },
    {
        image: InsoveLP,
        title: "Landing Page Insove Medical Healthcare",
        description: "Landing Page feita utilizando TailwindCSS projetada para consultórios médicos onde o objetivo foi proporcionar uma boa experiência para médicos e pacientes.",
        technologies: ["HTML", "TailwindCSS", "Remix Icons", "SwiperJS", "Scroll Reveal"]
    },
    {
        image: ListaDePaises,
        title: "Lista de Países",
        description: "Projeto proposto pela Codante onde o objetivo foi utilizar uma API para objter os dados fazendo uma aplicação reponsiva que use Server Components, Data fetching, Nested layouts, Routes e Loading",
        technologies: ["Next", "TypeScript", "TailwindCSS"]
    },
    {
        image: Buscador,
        title: "Buscador de Nomes",
        description: "Projeto Final de Programação para Internet onde o objetivo foi criar um buscador de nomes consumindo uma API no backend, tratando os dados e exibindo no frontend com um histórico de consultas.",
        technologies: ["React", "Node", "Express", "MySQL"]
    },
    {
        image: Dash,
        title: "Dashboard",
        description: "Dashboard com página de Login, Cadastro, autenticação, criptografia e um DashBoard",
        technologies: ["React", "Vite", "Node", "Express", "MySQL", "SCSS", "ReactHookForm", "React Icons", "Yup.js"]
    },
    {
        image: GoogleKeep,
        title: "Google Keep Clone",
        description: "Clone do Google Keep proposto a ser realizado sem frameworks onde permite que você faça anotações, fixe notas, duplique notas e exporte as notas para um arquivo CSV.",
        technologies: ["HTML", "CSS", "JavaScript"]
    },
    {
        image: NodeFastify,
        title: "Node Fastify",
        description: "API feita com o objetivo de realizar um CRUD utilizando um banco de dados relacional",
        technologies: ["Node", "Fastify", "PostgreSQL"]
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
                />
            ))}
        </section>
    );
}
