import { JSX } from "react"

export type Skill = {
    name: string,
    icon: JSX.Element,
    level: number
}

export type Job = {
    company: string,
    dateStart: Date,
    dateEnd: Date,
    tecnologies: string[]
}
