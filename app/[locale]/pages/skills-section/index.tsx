"use client"

import SkillCard from "./skill-card"
import { FaJs, FaReact, FaNodeJs, FaDocker, FaAws, FaJava } from "react-icons/fa"
import {
    SiTypescript,
    SiNextdotjs,
    SiTailwindcss,
    SiBootstrap,
    SiShadcnui,
    SiExpress,
    SiFastify,
    SiMysql,
    SiPostgresql,
    SiMongodb,
    SiSpringboot,
} from "react-icons/si"


const frontEndSkills = [
    { name: "JAVASCRIPT", Icon: FaJs, bgColor: "bg-yellow-400" },
    { name: "TYPESCRIPT", Icon: SiTypescript, bgColor: "bg-blue-500" },
    { name: "REACT.JS", Icon: FaReact, bgColor: "bg-cyan-400" },
    { name: "NEXT.JS", Icon: SiNextdotjs, bgColor: "bg-black" },
    { name: "TAILWIND CSS", Icon: SiTailwindcss, bgColor: "bg-cyan-500" },
    { name: "BOOTSTRAP", Icon: SiBootstrap, bgColor: "bg-purple-700" },
]

const backEndSkills = [
    { name: "NODE.JS", Icon: FaNodeJs, bgColor: "bg-green-500" },
    { name: "JAVASCRIPT", Icon: FaJs, bgColor: "bg-yellow-400" },
    { name: "TYPESCRIPT", Icon: SiTypescript, bgColor: "bg-blue-500" },
    { name: "EXPRESS.JS", Icon: SiExpress, bgColor: "bg-gray-800" },
    { name: "FASTIFY", Icon: SiFastify, bgColor: "bg-gray-700" },
    { name: "JAVA", Icon: FaJava, bgColor: "bg-orange-500" },
    { name: "SPRING BOOT", Icon: SiSpringboot, bgColor: "bg-green-400" },
    { name: "MYSQL", Icon: SiMysql, bgColor: "bg-blue-600" },
    { name: "POSTGRESQL", Icon: SiPostgresql, bgColor: "bg-blue-700" },
    { name: "MONGODB", Icon: SiMongodb, bgColor: "bg-green-500" },
    { name: "DOCKER", Icon: FaDocker, bgColor: "bg-blue-500" },
    { name: "AWS", Icon: FaAws, bgColor: "bg-yellow-500" },
]

export default function SkillsSection() {
    return (
        <div className="bg-gray-100 dark:bg-[#141414] pt-10 pb-20">
            <section className="py-16 px-4 max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold ">Skills</h2>
                </div>

                <div className="space-y-12">
                    <div>
                        <h3 className="text-2xl font-semibold mb-6 text-center">Frontend</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                            {frontEndSkills.map((skill) => (
                                <SkillCard key={skill.name} name={skill.name} Icon={skill.Icon} bgColor={skill.bgColor} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold mb-6 text-center">Backend</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                            {backEndSkills.map((skill) => (
                                <SkillCard key={skill.name} name={skill.name} Icon={skill.Icon} bgColor={skill.bgColor} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
