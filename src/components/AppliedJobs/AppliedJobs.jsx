import { useLoaderData } from "react-router-dom";


import { useEffect, useState } from "react";
import { getStoredJobApplication } from "../../utils/utils";
import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {

    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);


    const handleJobsFilter = filter => {

        if (filter === 'all') {
            setDisplayJobs(appliedJobs)
        }
        else if (filter === 'remote') {
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);
        }
        else if (filter === 'onsite') {
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsiteJobs);
        }

    }


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



    // console.log("applied jobs: ", appliedJobs)

    return (
        <div>

            <div className="bg-[#f1f3ff] h-52 flex items-center justify-center">
                <h4 className="font-bold text-2xl">Applied Jobs</h4>
            </div>


            <div className="max-w-7xl mx-auto space-y-6 my-36">
                <div className="text-end">
                    <details className="dropdown w-24">
                        <summary className="m-1 btn">Filter By</summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                            <li onClick={() => handleJobsFilter('all')}><a>All</a></li>
                            <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
                            <li onClick={() => handleJobsFilter('onsite')}><a>Onsite</a></li>
                        </ul>
                    </details>
                </div>


                {
                    displayJobs.map(job => <AppliedJob
                        key={job.id}
                        job={job}></AppliedJob>)
                }

                {
                    displayJobs.map(job => console.log(job))
                }

            </div>



        </div>
    );
};

export default AppliedJobs;