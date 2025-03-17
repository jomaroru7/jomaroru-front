import { useEffect, useState } from "react";
import JobsGrid from "./JobsGrid";
import { Job } from "../../types";
import { useTranslation } from "react-i18next";


const Experience = () => {
    const {t} = useTranslation()
    const [jobs, setJobs] = useState<Job[]>([])

    useEffect(()=>{
        setJobs([
            {
                company: 'Sngular',
                dateStart: new Date(2019,8,1),
                dateEnd: new Date(2024,9,1),
                tecnologies: ['React', 'Javascript', 'HTML5', 'Wordpress']
            },
            {
                company: 'MRG Software',
                dateStart: new Date(2019,4,1),
                dateEnd: new Date(2019,7,1),
                tecnologies: ['Wordpress', 'Prestashop', 'PHP', 'Javascript']
            },
            {
                company: 'Iconos Software',
                dateStart: new Date(2017, 6,1),
                dateEnd: new Date(2017,11,1),
                tecnologies: ['C#', '.NET', 'Wordpress', 'Prestashop']
            }
        ])
    },[])
    return (
        <div className="flex flex-col justify-center lg:w-5xl w-full m-auto">
            <h1 className="text-5xl p-4">
              {t('experience')}
            </h1>
            <JobsGrid jobs={jobs}/>
        </div>
    );
};

export default Experience;