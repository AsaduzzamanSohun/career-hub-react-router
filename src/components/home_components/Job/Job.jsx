import { NavLink } from 'react-router-dom';
import locationIcon from '../../../assets/icons/Location.png';
import money from '../../../assets/icons/money.png'

import PropTypes from 'prop-types'

const Job = ({ job }) => {

    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job

    return (
        <div className='border p-10 rounded-xl'>

            <img className='mb-6' src={logo} alt="" />
            <h4 className='font-bold text-xl'>{job_title}</h4>
            <p className='font-semibold'>{company_name}</p>

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

            <NavLink to={`/jobs/${id}`}>
                <button className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white font-semibold text-lg px-5 w-36">View Details</button>
            </NavLink>

        </div>
    );
};

Job.propTypes = {
    job: PropTypes.object
}


export default Job;