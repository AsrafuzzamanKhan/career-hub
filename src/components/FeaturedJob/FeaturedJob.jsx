import { useEffect, useState } from "react";
import Job from "../Job/Job";
import FadeIn from "../../animation/FadeIn";


const FeaturedJob = () => {
    const [jobs, setJob] = useState([]);

    const [dataLength, setDataLength] = useState(4)
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJob(data))
    }, [])
    return (
        <div className="max-w-6xl mx-auto ">
            <FadeIn delay={0.4} direction='down'>
                <div className="text-center my-8">
                    <h2 className="text-5xl my-4">Featured Jobs</h2>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-4 my-6">
                {
                    jobs.slice(0, dataLength).map(job =>
                        <Job
                            key={job.id}
                            job={job}></Job>
                    )
                }
            </div>
            <div className=" text-center my-5">
                <div className={dataLength === jobs.length && 'hidden'}>
                    <button onClick={
                        () => setDataLength(jobs.length)
                    } className=" btn bg-[linear-gradient(90deg,_#7E90FE_0%,_#9873FF_100%)] font-medium text-white  ">See All jobs</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJob;