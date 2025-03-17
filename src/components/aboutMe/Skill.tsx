import type { Skill } from "../../types"

type SkillProps = {
    skill: Skill
}

const Skill = ({ skill }: SkillProps) => {
    return (
        <div className="flex flex-col w-28 h-28 justify-around items-center transition-transform transform hover:scale-110 ">
            <p className="text-xl">{skill.name}</p>
            <div className="text-6xl">
                {skill.icon}
            </div>
        </div>
    )
}

export default Skill