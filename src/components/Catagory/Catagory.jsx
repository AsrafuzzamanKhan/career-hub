import PropTypes from 'prop-types';
import FadeIn from '../../animation/FadeIn';
const Catagory = ({ job }) => {
    const { logo, category_name, availability } = job;

    return (

        <FadeIn delay={.4} direction='down' >
            <div className="card shadow-lg bg-gray-200 w-full">
                <div className="card-body ">
                    <img src={logo} alt="" className="w-[40px] h-[40px]" />
                    <h2 className="card-title">{category_name}</h2>
                    <p className=" flex items-start">{availability}</p>

                </div>
            </div>
        </FadeIn>

    );
};
Catagory.propTypes = {
    job: PropTypes.object
}
export default Catagory;