import Image, { StaticImageData } from "next/image";
import { TechBadge } from "../../tech-badge";
import { IconType } from "react-icons";

type ProjectCardProps = {
    image: StaticImageData;
    title: string;
    description: string;
    technologies: string[];
    techIcons: { [key: string]: IconType };
}

export const ProjectCard = ({ image, title, description, technologies, techIcons }: ProjectCardProps) => {

    return (
        <div className="rounded-lg h-[550px] flex flex-col bg-white dark:bg-zinc-800  overflow-hidden border-2 border-gray-200 dark:border-gray-800 hover:border-emerald-500 opacity-70 hover:opacity-100 transition-all group">
            <div className="w-full h-60 overflow-hidden">
                <Image
                    width={380}
                    height={200}
                    src={image}
                    alt={title}
                    unoptimized
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 ease-in-out"
                />
            </div>

            <div className="flex flex-1 flex-col p-8">
                <strong className="font-medim text-gray-600 text-gray-400/80 dark:text-gray-400 dark:text-gray-50/90 group-hover:text-emerald-500 transition-all">
                    {title}
                </strong>
                <p className="mt-2 text-gray-500 dark:text-gray-400 line-clamp-5">
                    {description}
                </p>
                <span className="mx-auto py-3 gap-x-2 gap-y-2 flex flex-wrap justify-center max-w-max">
                    {technologies.map((tech, index) => {
                        const IconComponent = techIcons[tech];
                        return (
                            <TechBadge key={index} name={tech} Icon={IconComponent} />
                        );
                    })}
                </span>
            </div>
        </div>
    );
}
