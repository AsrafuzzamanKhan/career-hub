import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localStore";

const JobDetails = () => {
    const jobs = useLoaderData()
    const { id } = useParams()
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt)
    console.log('job', job)
    console.log(id, jobs)
    const handleApplyJob = () => {
        saveJobApplication(idInt)
        toast("Wow so easy!");
    }
    return (
        <div>
            <h2>Job details:{id}</h2>
            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3">
                    <p><span className="font-medium">Job Description: </span> {job.job_description}</p>
                    <p><span className="font-medium">Job Responsibility: </span> {job.job_responsibility
                    }</p>
                    <div>
                        <p className="font-medium">Education Requirements:</p>
                        <p>{job.educational_requirements}</p>
                    </div>
                    <div>
                        <p className="font-medium">Experience:</p>
                        <p>{job.experiences}</p>
                    </div>
                </div>
                <div className="border">


                    <div className="bg-gray-200 p-2 ">
                        <div>
                            <h3>Job Details</h3>
                            <p><span>Salary:</span>{job.salary} (Per Month)</p>
                            <p><span>Job Title:</span>{job.job_title
                            } </p>
                        </div>
                        <div>
                            <h3>Contact Information</h3>
                            <p><span>Phone:</span>{job.contact_information
                                .phone} </p>
                            <p><span>Email:</span>{job.contact_information
                                .email
                            }</p>
                            <p><span>Address:</span>{job.contact_information
                                .address
                            }</p>
                        </div>
                    </div>
                    <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;