import type { Project } from "../../types"

type ProjectProps = {
    project: Project
}
const Project = ({ project }: ProjectProps) => {
    return (
        <article className="relative flex flex-col group transform duration-300 hover:scale-105 border border-color-primary rounded-4xl p-4 justify-between items-center h-100 w-72">
            <h3 className="text-2xl">{project.name}</h3>
            <div className="w-60 lg:perspective-800">
                <img
                    src={project.image}
                    className="w-full lg:transform lg:rotate-x-20 lg:-rotate-y-20 shadow-lg transition-transform duration-300 group-hover:rotate-x-0 group-hover:rotate-y-0 group-hover:scale-105"
                    alt={project.name}
                />
            </div>
            <p>{project.description}</p>
            { project.link && <a className="absolute w-full h-full" href={project.link} target="blank"></a> }
        </article>
    )
}

export default Project