
"use client"

import { useState } from "react";
import { EducationItem } from "./education-item";
import { ExperienceItem } from "./experience-item";
import { FaGraduationCap } from "react-icons/fa";
import { MdOutlineWorkHistory } from "react-icons/md";
import logoUFU from "../../../../public/education/logoUFU.png";
import logoUnesp from "../../../../public/education/logounesp.png";
import logoReact from "../../../../public/education/react.svg";
import logoWorkana from "../../../../public/education/logoWorkana.png";
import logoCorreios from "../../../../public/education/logoCorreios.png";
import logoTecMob from "../../../../public/education/logoTecMob.png";

const educationItems = [
    {
        logo: logoUFU,
        institution: "Universidade Federal de Uberlândia - Monte Carmelo",
        course: "Sistemas de Informação",
        date: "ago 2019 - presente",
        description: "Aprendizado no desenvolvimento de software em todas as etapas, banco de dados, modelagem e engenharia de software, inteligência artificial, entre outros.",
        link: "https://facom.ufu.br/graduacao/sistemas-de-informacao-campus-monte-carmelo",
        technologies: ["C", "Java", "PHP", "Python", "JavaScript", "Node", "HTML", "CSS", "Boostrap", "PosgreSQL", "Mysql", "MongoDB"]
    },
    {
        logo: logoReact,
        institution: "Luiz Otávio Miranda e Matheus Fraga",
        course: "React.Js e Next.js",
        date: "ago 2023 - fev 2024",
        description: "Desenvolvimento de interfaces com React, Next e Node no Backend",
        link: "https://facom.ufu.br/graduacao/sistemas-de-informacao-campus-monte-carmelo",
        technologies: ["React", "Next", "Node", "JavaScript", "TypeScript"]
    },
    {
        logo: logoUnesp,
        institution: "Universidade Estadual Paulista Júlio de Mesquita Filho",
        course: "Técnico em Informática",
        date: "jan 2015 - dez 2016",
        description: "Desenvolvimento de sistemas Desktop E Web, Redes de Computadores",
        link: "https://facom.ufu.br/graduacao/sistemas-de-informacao-campus-monte-carmelo",
        technologies: ["Java", "HTML", "CSS"]
    }
];

const experienceItems = [
    {
        logo: logoWorkana,
        institution: "Freelancer Front-End",
        course: "Workana",
        date: "out 2023 - presente",
        description: "Implementação de novas features e realização de interfaces do zero.",
        link: "https://www.linkedin.com/company/workana/",
        technologies: ["React", "Node", "Express", "Tailwind", "StyledComponents", "MySQL", "MongoDB", "PostgreSQL", "Prisma"]
    },
    {
        logo: logoUFU,
        institution: "Monitor de Programação Web",
        course: "UFU",
        date: "jun 2023 - dez 2023",
        description: "Monitoria da disciplina de Programação para Internet, auxiliando os alunos com dúvidas e correção de exercícios.",
        link: "",
        technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"]
    },
    {
        logo: logoTecMob,
        institution: "Gestor de Tráfego - E-commerce",
        course: "TecMob",
        date: "dez 2020 - maio 2022",
        description: "Gerenciamento de campanhas de publicidade de alto impacto em plataformas como Facebook Ads e Google Ads, além de estratégias de venda e rotina administrativa.",
        link: "",
        technologies: []
    },
    {
        logo: logoCorreios,
        institution: "Auxiliar administrativo - Jovem Aprendiz",
        course: "Correios",
        date: "nov 2015 - nov 2016",
        description: "Rotina administrativa como organização de documentos, atendimento ao cliente, gerenciamento de correspondências e criação de planilhas e atendimento ao público.",
        link: "https://www.linkedin.com/company/correios/",
        technologies: []
    }
];


export const EducationExperience = () => {
    const [activeTab, setActiveTab] = useState("education");

    return (
        <div className="w-full bg-white dark:bg-black pt-16 pb-8">
            <div className=" text-center pb-10">
                <h1 className="text-2xl md:text-3xl font-bold">Qualificações</h1>
            </div>
            <div className="container md:py-4 flex justify-center gap-4">
                <button
                    onClick={() => setActiveTab("education")}
                    className={`flex text-xl gap-x-2 bg-white dark:bg-black py-2 px-4 ${activeTab === "education" ? "text-emerald-700 dark:text-emerald-400" : "text-black dark:text-white"} rounded-md`}
                >
                    <FaGraduationCap className="text-xl md:text-2xl" />
                    Educação
                </button>
                <button
                    onClick={() => setActiveTab("experience")}
                    className={`flex text-xl gap-x-2 bg-white dark:bg-black py-2 px-4 ${activeTab === "experience" ? "text-emerald-700 dark:text-emerald-400" : "text-black dark:text-white"} rounded-md p-3`}
                >
                    <MdOutlineWorkHistory className="text-xl md:text-2xl" />
                    Experiência
                </button>
            </div>

            {activeTab === "education" && (
                <section className="container py-6 md:py-16 flex gap-16 md:gap-4 lg:gap-16 flex-col md:flex-row">
                    <div className="max-w-[420px]">
                        <h1 className="text-3xl font-medium text-center md:text-left">Experiências Educacional</h1>
                        <p className="text-gray-500 dark:text-gray-400 mt-6">
                            Aqui estão algumas das minhas experiências educacionais, onde adquiri conhecimento e habilidades.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        {educationItems.map((item, index) => (
                            <EducationItem
                                key={index}
                                logo={item.logo}
                                institution={item.institution}
                                course={item.course}
                                date={item.date}
                                description={item.description}
                                link={item.link}
                                technologies={item.technologies}
                            />
                        ))}
                    </div>
                </section>
            )}

            {activeTab === "experience" && (
                <section className="container py-6 md:py-16 flex gap-16 md:gap-4 lg:gap-16 flex-col md:flex-row">
                    <div className="max-w-[420px]">
                        <h1 className="text-3xl font-medium text-center md:text-left">Experiências Profissionais</h1>
                        <p className="text-gray-500 dark:text-gray-400 mt-6">
                            Aqui estão algumas das minhas experiências profissionais. Estou sempre aberto a novos desafios e projetos. Vamos trabalhar juntos para criar soluções incríveis!
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        {experienceItems.map((item, index) => (
                            <EducationItem
                                key={index}
                                logo={item.logo}
                                institution={item.institution}
                                course={item.course}
                                date={item.date}
                                description={item.description}
                                link={item.link}
                                technologies={item.technologies}
                            />
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
};
