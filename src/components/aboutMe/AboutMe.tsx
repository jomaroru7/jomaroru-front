import { useTranslation } from "react-i18next";

const AboutMe = () => {
    const { t } = useTranslation();

    return (
        <div className="flex justify-center">
            <article className="flex flex-col items-center lg:flex-row justify-center mb-5 gap-8 max-w-5xl p-4">
                <aside className="flex flex-col max-w-lg">
                    <h2 className="text-5xl pb-4">
                        {t('aboutMe')}
                    </h2>
                    <h4 className="text-lg">
                        {t('resumeAboutMe')}
                    </h4>
                </aside>
                <main className="flex flex-col max-w-lg">
                    <h3 className="text-3xl">
                        {t('Skills')}
                    </h3>
                    <h4 className="text-lg">
                        {t('resumeAboutMe')}
                    </h4>
                </main>
            </article>
        </div>

    )
}

export default AboutMe