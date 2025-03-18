import type { Project as ProjectType } from "../../types"
import Project from "./Project"

type ProjectsGridProps = {
    subtitle?: string,
    projects: ProjectType[]
}

const ProjectsGrid = ({ subtitle, projects }: ProjectsGridProps) => {
    return (
        <section>
            {subtitle && <h1 className="text-5xl p-4">{subtitle}</h1>}
            <div className="flex flex-row flex-wrap gap-1.5 justify-center lg:justify-normal p-4">
                {projects.map((project) => (
                    <Project project={project} />
                ))}
            </div>
        </section>
    )
}

export default ProjectsGrid