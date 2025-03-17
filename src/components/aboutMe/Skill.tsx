import { FaRegStar, FaStar } from "react-icons/fa";
import type { Skill } from "../../types";
import { useTranslation } from "react-i18next";

type SkillProps = {
    skill: Skill
}

const Skill = ({ skill }: SkillProps) => {
    const { t } = useTranslation();
    const renderStars = (level: number) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= level) {
                stars.push(<FaStar key={i} className="text-primary" />);
            } else {
                stars.push(<FaRegStar key={i} className="text-primary" />);
            }
        }
        return stars;
    }
    return (
        <div className="relative group flex flex-col justify-center items-center">
            <div className="flex flex-col w-28 h-28 justify-around items-center transition-transform transform group-hover:blur-2xl group-hover:scale-110 duration-300">
                <p className="text-xl">{skill.name}</p>
                <div className="text-6xl">
                    {skill.icon}
                </div>
            </div>
            <div className="flex flex-col text-xl lg:hidden lg:absolute lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 group-hover:flex items-center justify-center transition-opacity duration-300 lg:opacity-0 group-hover:opacity-100">
                <p className="hidden lg:flex">
                    {t('level')}:
                </p>
                <div className="flex">
                    {renderStars(skill.level)}
                </div>
            </div>
        </div>
    );
}

export default Skill;