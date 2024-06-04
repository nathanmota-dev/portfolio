import { ProjectCard } from "./project-card";


export const ProjectList = () => {

    return (
        <section className="container py-20 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-6 gap-y-6">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </section>
    );
}
