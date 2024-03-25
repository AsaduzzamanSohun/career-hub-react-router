import { useEffect, useState } from "react";
import Job from "../Job/Job";

const Jobs = () => {

    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        fetch("jobs.json")
        .then(res => res.json())
        .then(data => setJobs(data));
    } , [])

    return (
        <div className="pb-36">

            <div className="text-center space-y-4">
                <h2 className="text-4xl font-bold">Featured Jobs</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className="grid grid-cols-2 gap-10 mt-6">

                {

                    jobs.slice(0, dataLength).map(job => <Job 
                        key={job.id}
                        job={job}></Job>)

                }

            </div>

            <div className={dataLength === jobs.length ? "hidden" : "my-6 text-center"}>
                <button  onClick={() => setDataLength(jobs.length)} className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white font-semibold text-lg px-5 w-36">Show more</button>
            </div>

        </div>
    );
};

export default Jobs;