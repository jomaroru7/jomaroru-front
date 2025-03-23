import { useEffect, useState } from "react"
import { Project } from "../../types"
import { useTranslation } from "react-i18next"
import ProjectsGrid from "./ProjectsGrid"

const Projects = () => {
    const {t, i18n} = useTranslation()
    const [mainProjects, setMainProjects] = useState<Project[]>([])
    const [secondaryProjects, setSecondaryProjects] = useState<Project[]>([])

    useEffect(()=>{
        setMainProjects([
            {
                name: t('subYourVideoTitle'),
                image: './images/subtitulatuvideo.png',
                description: t('subYourVideoDescription'),
                link:"https:\\subtitulatuvideo.es"
            }
        ])
    }, [i18n.language])

    return (
        <div className="flex justify-center">
            <div className="flex flex-col lg:flex-row justify-between mb-5 gap-8 lg:min-w-5xl max-w-5xl p-4">
                <ProjectsGrid subtitle={t('mainProjects')} projects={mainProjects}/>
            </div>
        </div>
    )
}

export default Projects