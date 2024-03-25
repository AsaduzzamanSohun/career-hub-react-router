import { useLoaderData } from "react-router-dom";


import { useEffect, useState } from "react";
import { getStoredJobApplication } from "../../utils/utils";
import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {

    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);



    useEffect(() => {

        const storedJobIds = getStoredJobApplication();

        if (jobs.length > 0) {

            // const jobsApplied = jobs.filter(job => storedJobIds.include(job.id));

            const jobsApplied = [];
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id === id);

                if (job) {
                    jobsApplied.push(job);
                }
            }

            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied);


        }

    }, [jobs])


    console.log("Job: ", jobs)

    return (
        <div>


            <h2>Jobs I applied: {appliedJobs.length}</h2>




            {
                displayJobs.map(job => <li key={job.id}>

                    <span> : {job.job_title} : {job.salary}</span>



                </li>)
            }

            {
                displayJobs.map(job => <AppliedJob 
                    key={job.id}
                    job={job}></AppliedJob>)
            }

            {
                 displayJobs.map(job => console.log(job))
            }

        </div>
    );
};

export default AppliedJobs;