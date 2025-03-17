import { Job } from "../../types";
import JobCard from "./JobCard";

type JobsGridProps = {
    jobs: Job[]
}

const JobsGrid = ({ jobs }: JobsGridProps) => {

    return (
        <div className="flex justify-center">
            <div className="relative flex flex-col lg:w-5xl px-8 w-full">
                {jobs.map((job, index) => (
                    <div key={index} className={`flex ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center my-4`}>
                        <JobCard job={job} />
                    </div>
                ))}
                <div className="hidden lg:absolute left-1/2 h-full border-l border-color-primary"></div>
            </div>
        </div>
    );
};

export default JobsGrid;