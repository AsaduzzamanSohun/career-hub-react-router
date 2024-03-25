import PropTypes from 'prop-types';

import locationIcon from '../../assets/icons/Location.png';
import money from '../../assets/icons/money.png';


const AppliedJob = ({ job }) => {

    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job

    return (
        <div>

            <div>
                <img src={logo} alt="" />

                <div>
                    <h4>{job_title}</h4>
                    <p>{company_name}</p>
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
            </div>
        </div>
    );
};

AppliedJob.propTypes = {
    job: PropTypes.object
}

export default AppliedJob;