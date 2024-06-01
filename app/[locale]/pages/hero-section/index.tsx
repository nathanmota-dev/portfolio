import Image from "next/image";
import { TechBadge } from "../../components/tech-badge";
import { Button } from "../../components/button";
import { HiArrowNarrowRight } from "react-icons/hi";
import { TbBrandGithub, TbBrandGmail, TbBrandLinkedin, TbBrandWhatsapp } from "react-icons/tb";

const contacts = [
    {
        url: "https://github.com/nathanmota-dev",
        icon: <TbBrandGithub />
    },
    {
        url: "https://www.linkedin.com/in/nathansmota/",
        icon: <TbBrandLinkedin />
    },
    {
        url: "mailto:nathansmota@gmail.com",
        icon: <TbBrandGmail />
    },
    {
        url: "https://wa.me/5516999936596",
        icon: <TbBrandWhatsapp />
    },
]

export default function HeroSection() {
    return (
        <section className="bg-white dark:bg-black w-full h-[91vh] flex flex-col justify-center items-center">
            <div className="container flex items-center justify-between flex-col-reverse lg:flex-row mx-auto px-4">
                <div className="w-full lg:max-w-[530px] text-center lg:text-left">
                    <p className="font-mono text-emerald-600 dark:text-emerald-400">Olá, meu nome é</p>
                    <h2 className="text-4xl font-medium mt-2">Nathan Mota</h2>
                    <p className="text-gray-800 dark:text-gray-400 my-6 text-sm sm:text-base">Olá, meu nome é Nathan Mota e sou desenvolvedor Full-stack com foco em Front-end.</p>

                    <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px] justify-center lg:justify-start">
                        <TechBadge name="JavaScript" />
                        <TechBadge name="TypeScript" />
                        <TechBadge name="ReactJs" />
                        <TechBadge name="NodeJs" />
                        <TechBadge name="Express" />
                        <TechBadge name="Next.js" />
                    </div>

                    <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row justify-center lg:justify-start">
                        <Button className="w-max shadow-button flex items-center gap-2">
                            Entre em contato
                            <HiArrowNarrowRight size={18} />
                        </Button>

                        <div className="text-2xl flex items-center gap-3">
                            {contacts.map((contact, index) => (
                                <a
                                    href={contact.url}
                                    target="_blank"
                                    key={`contact-${index}`}
                                    className="text-gray-800 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                                >
                                    {contact.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <Image
                    width={420}
                    height={404}
                    src="/images/profile.jpg"
                    alt="Foto de perfil de Nathan Mota"
                    className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 rounded-lg shadow-2xl object-cover"
                />
            </div>
        </section>
    )
}
