import { useTranslation } from "react-i18next";
import SkillsGrid from "./SkillsGrid";
import { useEffect, useState } from "react";
import { Skill } from "../../types";
import { FaReact, FaJs, FaHtml5, FaCss3, FaPhp, FaWordpress, FaJava, FaGithub } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";


const AboutMe = () => {
    const { t } = useTranslation();

    const [skills, setSkills] = useState<Skill[]>([])

    useEffect(() => {
        setSkills([
            {
                name: 'React',
                icon: <FaReact />,
                level: 4
            },
            {
                name: 'Javascript',
                icon: <FaJs />,
                level: 5
            },
            {
                name: 'HTML5',
                icon: <FaHtml5 />,
                level: 5
            },
            {
                name: 'CSS3',
                icon: <FaCss3 />,
                level: 5
            },
            {
                name: 'PHP',
                icon: <FaPhp />,
                level: 4
            },
            {
                name: 'Wordpress',
                icon: <FaWordpress />,
                level: 5
            },
            {
                name: 'NextJs',
                icon: <RiNextjsFill />,
                level: 3
            },
            {
                name: 'Java',
                icon: <FaJava />,
                level: 2
            },
            {
                name: 'Git',
                icon: <FaGithub />,
                level: 5
            },
        ])
    }, [])

    return (
        <div className=" flex justify-center">
            <article className="flex flex-col lg:flex-row justify-between mb-5 gap-8 lg:min-w-5xl max-w-5xl p-4">
                <aside className="flex flex-col max-w-lg">
                    <h2 className="text-5xl pb-4">
                        {t('aboutMe')}
                    </h2>
                    <h4 className="text-lg">
                        {t('resumeAboutMe')}
                    </h4>
                    <a
                        href="./cv_jose_maria_romero_ruiz.pdf"
                        download="CV_Jose_Maria.pdf"
                        className="mt-4 px-4 py-2 bg-primary text-white font-semibold rounded-lg shadow-md transition duration-300 text-center w-max 
               hover:shadow-[0_0_15px_rgba(255,255,255,0.8)] hover:scale-105"
                    >
                        {t('downloadCV')}
                    </a>

                </aside>
                <main className="flex flex-col max-w-lg flex-1">
                    <h3 className="text-5xl pb-4">
                        {t('skills')}
                    </h3>
                    <SkillsGrid skills={skills} />
                </main>
            </article>
        </div>

    )
}

export default AboutMe