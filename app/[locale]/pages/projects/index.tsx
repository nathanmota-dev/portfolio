import { useTranslations } from "next-intl";
import { ProjectList } from "../../components/projects-list";

export const ProjectsSection = () => {

    const t = useTranslations("Projects");

    return (
        <div className="bg-white dark:bg-black h-auto pb-10 sm:pb-0 justify-center bg-center text-center ">
            <h1 className="sm:text-3xl text-2xl pt-10 font-bold">{t("title")}</h1>
            <p className="pt-6">{t("description")}</p>
            <div className="sm:text-lg text-sm mt-8 space-x-0.5">
                <button className="bg-emerald-400 text-white cursor-pointer border-none p-2 hover:bg-emerald-600 transition-all rounded-l-3xl ">TODOS</button>
                <button className="bg-emerald-400 text-white cursor-pointer border-none p-2 hover:bg-emerald-600 transition-all">FRONT</button>
                <button className="bg-emerald-400 text-white cursor-pointer border-none p-2 hover:bg-emerald-600 transition-all">BACK</button>
                <button className="bg-emerald-400 text-white cursor-pointer border-none p-2 hover:bg-emerald-600 transition-all rounded-e-3xl">OUTROS</button>
            </div>
            
            <ProjectList />

        </div>
    );
}