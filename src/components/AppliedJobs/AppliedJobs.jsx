import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplicaton } from "../../utility/localStore";


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
        <div>
            <h1>Jobs i applied {jobs.length}</h1>
            <h1>Jobs i applied {appliedJobs.length}</h1>
            <details className="dropdown mb-32">
                <summary className="m-1 btn">open or close</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={() => handleJobsFilter('all')}><a>ALL</a></li>
                    <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
                    <li onClick={() => handleJobsFilter('onsite')}><a>Onsite</a></li>
                </ul>
            </details>
            <div>
                <ul>
                    {
                        displayJobs.map(job => <li key={job.id}><span>
                            {job.job_title} - {job.job_type} - {job.remote_or_onsite}
                        </span> <button className="btn btn-primary">Show details</button>
                        </li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default AppliedJobs;