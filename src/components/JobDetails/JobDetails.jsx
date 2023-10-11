import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localStore";
import money from '../../assets/icons/money.png'
import title from '../../assets/icons/calendar.png'
import phone from '../../assets/icons/phone.png'
import location from '../../assets/icons/location2.png'
import email from '../../assets/icons/email.png'
import FadeIn from "../../animation/FadeIn";

const JobDetails = () => {
    const jobs = useLoaderData()
    const { id } = useParams()
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt)
    console.log('job', job)
    console.log(id, jobs)
    const handleApplyJob = () => {
        saveJobApplication(idInt)

        toast("Application Submitted")

    }
    return (
        <div className="max-w-6xl mx-auto ">
            <FadeIn delay={.4} direction='up'>
                <div className="grid md:grid-cols-4 gap-4 my-12 ">

                    <div className="border rounded-md md:col-span-3 p-10 leading-relaxed ">
                        <p className="mb-3"><span className="font-bold me-1">Company Name: </span> {job.company_name}</p>
                        <p className="mb-3"><span className="font-bold me-1">Job Description: </span> {job.job_description}</p>
                        <p className="mb-3"><span className="font-bold me-1">Job Responsibility: </span> {job.job_responsibility
                        }</p>
                        <div className="mb-3">
                            <p className="font-bold me-1">Education Requirements:</p>
                            <p>{job.educational_requirements}</p>
                        </div>
                        <div className="mb-3">
                            <p className="font-bold me-1">Experience:</p>
                            <p>{job.experiences}</p>
                        </div>
                    </div>




                    <div className="">


                        <div className="bg-gray-200 rounded  p-2 mb-5">

                            <h3 className="mb-3 font-bold ">Job Details</h3>

                            <div className="mb-5">
                                <div className="flex">
                                    <img src={money} className="w-30 h-full object-contain me-2" alt="" />
                                    <p><span className="font-bold me-1">Salary:</span>{job.salary} (Per Month)</p>
                                </div>
                                <div className="flex">
                                    <img src={title} className="w-30 h-full object-contain me-2" alt="" />
                                    <p><span className="font-bold me-1">Job Title:</span>{job.job_title
                                    } </p>
                                </div>
                            </div>


                            <h3 className="font-bold">Contact Information</h3>

                            <div className="my-5">
                                <div className="flex mb-2">
                                    <img src={phone} className="w-30 h-full object-contain me-2" alt="" />
                                    <p><span className="font-bold me-1">Phone:</span>{job.contact_information
                                        .phone} </p>
                                </div>
                                <div className="flex  mb-2">
                                    <img src={email} className="w-30 h-full object-contain me-2" alt="" />
                                    <p><span className="font-bold me-1">Email:</span>{job.contact_information
                                        .email
                                    }</p>
                                </div>
                                <div className="flex  mb-2" >
                                    <img src={location} className="w-30 h-full object-contain me-2" alt="" />
                                    <p><span className="font-bold me-1">Address:</span>{job.contact_information
                                        .address
                                    }</p>
                                </div>

                            </div>
                        </div>
                        <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply Now</button>
                    </div>
                </div>
            </FadeIn>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;