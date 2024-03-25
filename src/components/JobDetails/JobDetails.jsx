import { Link, useLoaderData, useParams } from "react-router-dom";

import sal_ic from '../../assets/icons/money.png';
import job_ic from '../../assets/icons/calendar.png';
import phone_ic from '../../assets/icons/phone.png';
import email_ic from '../../assets/icons/email.png';
import loc_ic from '../../assets/icons/location2.png';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utils/utils";

const JobDetails = () => {

    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);

    const job = jobs.find(job => job.id === idInt);

    const { job_title, salary, job_description, job_responsibility, educational_requirements, experiences, contact_information } = job;

    console.log(jobs, idInt);

    const handleApplyJob = () => {

        saveJobApplication(idInt)
        toast('You have applied successfully');

    }

    return (
        <div className="max-w-7xl mx-auto grid grid-cols-3 my-36 gap-20">

            <div className="col-span-2 space-y-6 leading-normal">
                <p><span className="font-bold">Job Description: </span>{job_description}</p>
                <p><span className="font-bold">Job Responsibility: </span>{job_responsibility}</p>
                <p><span className="font-bold">Educational Requirements: </span><br /> {educational_requirements}</p>
                <p><span className="font-bold">Experience: </span><br /> {experiences}</p>

            </div>
            <div className="col-span-1 space-y-4">
                <div className="bg-[#e7eaff] p-8 rounded-lg">

                    <h3 className="font-bold text-lg border-b-2 border-gray-300 pb-4 mb-4">Job Details</h3>
                    <div className="flex gap-2 my-2">
                        <img src={sal_ic} alt="" />
                        <p><span className="font-bold">Salary: </span>{salary}</p>
                    </div>
                    <div className="flex gap-2 my-2">
                        <img src={job_ic} alt="" />
                        <p><span className="font-bold">Job Title: </span>{job_title}</p>
                    </div>

                    <h3 className="font-bold text-lg border-b-2 border-gray-300 py-4 my-4">Contact Information</h3>
                    <div className="flex gap-2 my-2">
                        <img src={phone_ic} alt="" />
                        <p><span className="font-bold">Phone: </span>{contact_information.phone}</p>
                    </div>
                    <div className="flex gap-2 my-2">
                        <img src={email_ic} alt="" />
                        <p><span className="font-bold">Email: </span>{contact_information.email}</p>
                    </div>
                    <div className="flex gap-2 my-2">
                        <img className="h-min" src={loc_ic} alt="" />
                        <p><span className="font-bold">Address: </span>{contact_information.address}</p>
                    </div>

                </div>

                <div>
                    <Link>
                        <button onClick={handleApplyJob} className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white font-semibold text-lg px-5 w-full">Apply Now</button>
                    </Link>

                </div>
            </div>

            <ToastContainer />

        </div>
    );
};

export default JobDetails;