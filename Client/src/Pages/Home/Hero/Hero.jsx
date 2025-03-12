import { IoIosArrowRoundForward } from "react-icons/io";
import docktor1 from '../../../assets/images/docktor1.png';

const Hero = () => {
  return (
    <div className='bg-blue-200 container mx-auto lg:px-24 px-2 flex items-center '>
<div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={docktor1}
      className=" w-full max-w-full h-auto object-cover rounded-lg " />
    <div className="space-y-5">
    <h1 className="text-2xl lg:text-5xl font-bold leading-12 space-y-4 ">Get Doctor's Appointments and  <br /><span>Health Advice Easily</span></h1>
            <p className="text-[15px] leading-6 font-medium">Get Doctor's Appointments and Health Advice Easily" highlights convenient ways to book medical appointments and access professional health guidance online. It emphasizes user-friendly platforms and apps that streamline the process, saving time and effort. The focus is on making healthcare more accessible and efficient for everyone.</p>

            <button className="flex items-center bg-white text-blue-500 px-6 py-2 rounded-full font-semibold hover:bg-blue-100 transition duration-300">
              Appointments <span className="ml-2"><IoIosArrowRoundForward /></span>
            </button>
    </div>
  </div>
</div>
      
    </div>
  );
};

export default Hero;