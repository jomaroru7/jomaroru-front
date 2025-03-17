import { Job } from "../../types"

type JobCardProps = {
    job: Job
}

const JobCard = ({ job }: JobCardProps) => {
    return (
        <article className="lg:w-1/2 w-full p-4 bg-secondary">
            <h3 className="text-2xl pb-4">
                {job.company}
            </h3>
            <p className="pb-4">{job.dateStart.toLocaleDateString()} - {job.dateEnd.toLocaleDateString()}</p>
            <div className="flex flex-row flex-wrap gap-4">
                {job.tecnologies.map((tecnology, key) =>(
                    <div key={key} className="bg-tertiary rounded-2xl p-1.5 min-w-24 flex justify-center">{tecnology}</div>
                ))}
            </div>
        </article>
    )
}

export default JobCard