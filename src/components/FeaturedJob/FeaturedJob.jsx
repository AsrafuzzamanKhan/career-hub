import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJob = () => {
    const [jobs, setJob] = useState([]);

    const [dataLength, setDataLength] = useState(4)
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJob(data))
    }, [])
    return (
        <div>
            <div className="text-center">

                <h2 className="text-5xl">Featured Jobs</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 my-3">
                {
                    jobs.slice(0, dataLength).map(job =>
                        <Job
                            key={job.id}
                            job={job}></Job>
                    )
                }
            </div>
            <div className={dataLength === jobs.length && 'hidden'}>
                <button onClick={
                    () => setDataLength(jobs.length)
                } className="btn btn-primary">See All jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJob;