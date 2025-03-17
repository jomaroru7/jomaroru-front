import type { Skill as SkillType } from "../../types"
import Skill from "./Skill"

type SkillsGridProps = {
    skills: SkillType[]
}

const SkillsGrid = ({ skills }: SkillsGridProps) => {
    return (
        <div className="flex flex-row flex-wrap w-full gap-5.5">
            {
                skills.map(skill => (
                    <Skill key={skill.name} skill={skill} />
                ))
            }
        </div>
    )
}

export default SkillsGrid