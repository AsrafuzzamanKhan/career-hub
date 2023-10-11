import { useEffect, useState } from "react";
import Catagory from "../Catagory/Catagory";
import FadeIn from "../../animation/FadeIn";


const CategoryList = () => {
    const [jobList, setJObList] = useState([])
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => { setJObList(data) })
    }, [])
    return (
        <div className="max-w-6xl mx-auto">
            <div className="text-center my-12 ">
                <FadeIn delay={.4} direction="up">
                    <div>
                        <h2 className="text-5xl my-5">Job Category List</h2>
                        <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                    </div>
                </FadeIn>


            </div>
            <div className="grid md:grid-cols-4 grid-cols-2 gap-4 my-12">
                {
                    jobList.map(job => <Catagory key={job.id} job={job}></Catagory>)
                }
            </div>
        </div>
    );
};

export default CategoryList;