import { useEffect, useState } from "react"
import { Project } from "../../types"
import { useTranslation } from "react-i18next"
import ProjectsGrid from "./ProjectsGrid"

const Projects = () => {
    const { t, i18n } = useTranslation()
    const [mainProjects, setMainProjects] = useState<Project[]>([])
    const [secondaryProjects, setSecondaryProjects] = useState<Project[]>([])

    useEffect(() => {
        setMainProjects([
            {
                name: t('subYourVideoTitle'),
                image: './images/subtitulatuvideo.png',
                description: t('subYourVideoDescription'),
                link: "https:\\subtitulatuvideo.es"
            }
        ])
        setSecondaryProjects([
            {
                name: t('caloriesTrackerTitle'),
                image: './images/calories_tracker.png',
                description: t('caloriesTrackerDescription')
            },
            {
                name: t('expensesControlTitle'),
                image: './images/expenses_control.png',
                description: t('expensesControlDescription')
            },
            {
                name: t('patientsTitle'),
                image: './images/patient_tracker.png',
                description: t('patientsDescription')
            },
        ])
    }, [i18n.language])

    return (
        <div className="flex justify-center">
            <div className="flex flex-col justify-between mb-5 gap-8 lg:min-w-5xl max-w-5xl p-4">
                <ProjectsGrid subtitle={t('mainProjects')} projects={mainProjects} />
                <ProjectsGrid subtitle={t('secondaryProjects')} projects={secondaryProjects} />
            </div>
        </div>
    )
}

export default Projects