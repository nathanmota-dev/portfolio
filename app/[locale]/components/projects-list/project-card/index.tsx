import Image from "next/image";
import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact, } from "react-icons/fa";
import { TechBadge } from "../../tech-badge";
import { RiJavascriptFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { useTranslations } from "next-intl";

export const ProjectCard = () => {

    const t = useTranslations("Card");

    return (
        <div className="rounded-lg h-[550px] flex flex-col bg-white dark:bg-zinc-800  overflow-hidden border-2 border-gray-200 dark:border-gray-800 hover:border-emerald-500 opacity-70 hover:opacity-100 transition-all group">
            <div className="w-full h-60 overflow-hidden">
                <Image
                    width={380}
                    height={200}
                    src="https://hermes.dio.me/articles/cover/7c856878-99cc-488b-9409-0cbc92cf7b66.png"
                    alt="Projeto 1"
                    unoptimized
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 ease-in-out"
                />
            </div>

            <div className="flex flex-1 flex-col p-8">
                <strong className="font-medim text-gray-600 text-gray-400/80 dark:text-gray-400 dark:text-gray-50/90 group-hover:text-emerald-500 transition-all">
                    {t("name")}
                </strong>
                <p className="mt-2 text-gray-500 dark:text-gray-400 line-clamp-4">
                    {t("description")}
                </p>
                <span className="mx-auto py-3 gap-x-2 gap-y-2 flex flex-wrap justify-center max-w-max">
                    <TechBadge name="JavaScript" Icon={RiJavascriptFill} />
                    <TechBadge name="TypeScript" Icon={BiLogoTypescript} />
                    <TechBadge name="ReactJs" Icon={FaReact} />
                    <TechBadge name="NodeJs" Icon={FaNodeJs} />
                    <TechBadge name="Express" Icon={SiExpress} />
                    <TechBadge name="Next.js" Icon={TbBrandNextjs} />
                    <TechBadge name="HTML" Icon={FaHtml5} />
                    <TechBadge name="CSS" Icon={FaCss3Alt} />
                </span>
            </div>
        </div>
    );
}
