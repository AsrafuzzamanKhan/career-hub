import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredJobApplicaton } from "../../utility/localStore";
import location from '../../assets/icons/location2.png'
import money from '../../assets/icons/money.png'
import FadeIn from "../../animation/FadeIn";


const AppliedJobs = () => {
    const jobs = useLoaderData()
    const [appliedJobs, setAppliedJobs] = useState([])
    const [displayJobs, setDisplayjobs] = useState([])

    const handleJobsFilter = filter => {
        if (filter === 'all') {
            setDisplayjobs(appliedJobs)
        }
        else if (filter === 'remote') {
            const remoteJobs = appliedJobs.filter(remoteJob => remoteJob.remote_or_onsite === 'Remote');
            setDisplayjobs(remoteJobs)
        } else if (filter === 'onsite') {
            const onsiteJobs = appliedJobs.filter(onsiteJob => onsiteJob.remote_or_onsite === 'Onsite')

            setDisplayjobs(onsiteJobs)
        }

    }
    useEffect(() => {
        const storedJobIDs = getStoredJobApplicaton();
        if (jobs.length > 0) {
            // const jobsApplied = jobs.filter(job => storedJobIDs.includes(job.id))

            // find job id 
            const jobsApplied = [];
            for (const id of storedJobIDs) {
                const job = jobs.find(jobId => jobId.id === id);
                if (job) {
                    jobsApplied.push(job)
                }
            }
            setAppliedJobs(jobsApplied);
            setDisplayjobs(jobsApplied)

        }
    }, [jobs])
    return (
        <div className="max-w-6xl mx-auto min-h-screen px-2 md:px-0">
            <div className="my-6">
                <details className="dropdown mb-5">
                    <summary className="m-1 btn ">Filter</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 ">
                        <li onClick={() => handleJobsFilter('all')}><a>ALL</a></li>
                        <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
                        <li onClick={() => handleJobsFilter('onsite')}><a>Onsite</a></li>
                    </ul>
                </details>
                {
                    displayJobs.length === 0 ? <div className="">
                        <h1 className="text-5xl text-center font-bold text-green-600 mb-5"> Not Applied Yet</h1>
                        <p className="text-center">Please apply one job view applied details</p>
                    </div> : <div>
                        {
                            displayJobs.map(job => <div key={job.id}>

                                <FadeIn delaay={.4} direction="down" >

                                    <div className="card lg:card-side bg-base-100 shadow-xl w-full mb-4">
                                        <figure className="bg-gray-200">
                                            <img src={job.logo} alt="Movie" className="w-40 p-2" />
                                        </figure>
                                        <div className="card-body">
                                            <h2 className="card-title">{job.job_title}</h2>
                                            <p>{job.company_name}</p>
                                            <div className="card-actions justify-start my-3 ">
                                                <div className="badge badge-outline px-4 py-4">{job.remote_or_onsite}</div>
                                                <div className="badge badge-outline px-4 py-4 ">{job.job_type}</div>
                                            </div>

                                            <div className="flex flex-wrap">
                                                <div className="flex me-4 mb-4">
                                                    <img src={location} alt="" className="me-1 w-[25px] h-[25px]" />
                                                    <p>{job.contact_information
                                                        .address}</p>

                                                </div>
                                                <div className="flex">
                                                    <img src={money} alt="" className="me-1 w-[25px] h-[25px]" />
                                                    <p>{job.salary}</p></div>
                                            </div>


                                        </div>
                                        <div className="card-actions justify-center items-center me-6 p-4">
                                            <Link to={`/jobDetails/${job.id}`} ><button className="btn bg-[linear-gradient(90deg,_#7E90FE_0%,_#9873FF_100%)] font-medium text-white ">Show Details</button></Link>
                                        </div>
                                    </div>
                                </FadeIn>


                            </div>)
                        }

                    </div>}

            </div>
        </div>
    );
};

export default AppliedJobs;