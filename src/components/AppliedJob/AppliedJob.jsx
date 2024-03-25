import PropTypes from 'prop-types';

import locationIcon from '../../assets/icons/Location.png';
import money from '../../assets/icons/money.png';
import { Link } from 'react-router-dom';


const AppliedJob = ({ job }) => {

    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job

    return (
        <div>

            <div className='grid grid-cols-5 gap-8 p-4 border rounded-lg'>
                <div className='col-span-1 flex justify-center items-center border h-full bg-stone-100 rounded-lg'>
                    <img className='w-36 h-10' src={logo} alt="" />
                </div>


                <div className='col-span-3'>
                    <h4 className='font-bold'>{job_title}</h4>
                    <p className='text-[17px]'>{company_name}</p>
                    <div className='space-x-4 my-4'>
                        <button className='btn bg-transparent border border-[#7E90FE] text-[#9873FF]'>{remote_or_onsite}</button>
                        <button className='btn bg-transparent border border-[#7E90FE] text-[#9873FF]'>{job_type}</button>
                    </div>

                    <div className='flex gap-4 mb-4'>
                        <div className='flex items-center'>
                            <img src={locationIcon} alt="" />
                            <p>{location}</p>
                        </div>
                        <div className='flex items-center'>
                            <img src={money} alt="" />
                            <p>{salary}</p>
                        </div>
                    </div>
                </div>

                <Link  to={`/job/${id}`} className='col-span-1 flex justify-center items-center'>
                    <button className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white font-semibold text-lg px-5 w-36">View Details</button>
                </Link>

            </div>
        </div>
    );
};

AppliedJob.propTypes = {
    job: PropTypes.object
}

export default AppliedJob;