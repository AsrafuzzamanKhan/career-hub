
import PropTypes from 'prop-types';

import { FiMapPin } from 'react-icons/fi';
import { HiOutlineCurrencyDollar } from 'react-icons/hi';
import { Link } from 'react-router-dom';
const Job = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job
    return (
        <div className="card card-compact  bg-base-100 shadow-xl 	">
            <figure className=' flex justify-start aline-start'><img src={logo} className='w-100 h-20 ' alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div className="card-actions justify-start">
                    <div className="badge badge-outline p-4 rounded text-[#9873FF] font-medium">{remote_or_onsite}</div>
                    <div className="badge badge-outline p-4 rounded text-[#9873FF] font-medium">{job_type}</div>
                </div>
                <div className='flex'>
                    <span className='flex items-center me-6'><FiMapPin size={20} className='m-2' />{location}</span>
                    <span className='flex items-center'><HiOutlineCurrencyDollar size={20} className='m-2' />{salary}</span>


                </div>
                <div className="card-actions justify-start">
                    <Link to={`/jobDetails/${id}`} ><button className="btn bg-[linear-gradient(90deg,_#7E90FE_0%,_#9873FF_100%)] font-medium text-white ">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};
Job.propTypes = {
    job: PropTypes.object
}
export default Job;