import banner from '../../assets/banner/banner2.jpg'
import FadeIn from '../../animation/FadeIn';
const Banner = () => {

    return (
        <div className="h-screen relative flex flex-col items-center"
            style={{
                background: `url(${banner})`,
                backgroundPosition: 'bottom',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}>

            <FadeIn delay={0.2} direction='down' padding fullWidth>

                <h1 className='mt-[90px] text-center text-5xl leading-tight xs:text-[64px] text-white max-w-[1050px]'>One Step Closer To Your <br /> <span className='text-[#9873FF]'> Dream Job</span></h1>
            </FadeIn>

            <FadeIn delay={0.4} direction='down' padding fullWidth>

                <h1 className='mt-6 text-center text-lg xs:text-xl text-white max-w-[500px]'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</h1>
            </FadeIn>


            <div className='absolute h-[50px] xs:h-[150px] bottom-0 w-full bg-[linear-gradient(180deg,_#ffffff00_0%,_#FFF_100%)]'>

            </div>

        </div>
    );
};

export default Banner;