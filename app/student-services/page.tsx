import { RiMentalHealthFill } from "react-icons/ri";
import { PiFlowerLotusFill } from "react-icons/pi";
import { MdContactPage } from "react-icons/md";
import { TbBuildingBank } from "react-icons/tb";
import { MdRoomPreferences } from "react-icons/md";
import { Cpu } from 'lucide-react';
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";


export default function studentServices(){
    return(

        <div className="flex flex-col gap-10 mb-10">
            <div className="w-full h-[85vh] bg-[#BDE7E5] flex max-md:flex-wrap max-md:justify-center justify-between items-center sm:p-12 p-8 md:gap-8 gap-6 ">
                <div className="flex flex-col md:gap-12 sm:gap-5 gap-3 ">
                    <h1 className="text-4xl font-bold">Student Support</h1>
                    <p className="text-2xl font-semibold text-[#000AA0] ">Empowering Students for a Brighter Future</p>
                </div>
                <div className="flex gap-2 lg:pr-12 md:pr-6 p-2">
                    <div className="relative min-w-[100px] w-[270px] h-[300px] max-lg:w-[200px] max-lg:h-[250px] ">
                        <img src="/ssbannerimg1.png" alt="student support banner image 1" className="absolute object-cover rounded-tr-[30px] rounded-bl-[30px] w-full h-full" />
                    </div>
                    <div className="relative min-w-[100px] w-[160px] h-[200px] max-lg:w-[110px] max-lg:h-[150px] self-center">
                        <img src="/ssbannerimg2.png" alt="student support banner image 2" className="absolute object-cover rounded-tr-[30px] rounded-bl-[30px] w-full h-full" />
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-10">

                <div className="flex flex-col gap-6 md:px-12 px-6 ">
                    <h2 className="text-3xl font-bold">Academic Support</h2>
                    <p className="text-lg font-medium text-center self-center ">Struggling with your studies? 
                        Our tutoring services are here to help! 
                        Access a wide range of study resources and attend workshops 
                        designed to enhance your learning experience.
                    </p>
                    <div className="flex max-sm:flex-wrap md:gap-10 gap-6 max-sm:gap-4 justify-center items-center">
                        <div className="flex flex-col gap-5 items-center ">
                            <div className="relative min-w-[100px] w-[250px] h-[200px] max-lg:w-[200px] max-lg:h-[150px] max-md:w-[180px] max-md:h-[150px] max-sm:w-[150px] max-sm:h-[130px] ">
                                <img src="/ssacademicimg1.png" alt="academic support image 1" className="absolute w-full h-full object-cover rounded-xl border-[1px] border-black shadow-xl" />
                            </div>
                            <h3 className="text-lg font-bold text-center max-sm:text-base ">Tutoring Services</h3>
                        </div>
                        <div className="flex flex-col gap-5 items-center ">
                            <div className="relative min-w-[100px] w-[250px] h-[200px] max-lg:w-[200px] max-lg:h-[150px] max-md:w-[180px] max-md:h-[150px] max-sm:w-[150px] max-sm:h-[130px] ">
                                <img src="/ssacademicimg2.png" alt="academic support image 2" className="absolute w-full h-full object-cover rounded-xl border-[1px] border-black shadow-xl" />
                            </div>
                            <h3 className="text-lg font-bold text-center max-sm:text-base ">Study Resources</h3>
                        </div>
                        <div className="flex flex-col gap-5 items-center ">
                            <div className="relative min-w-[100px] w-[250px] h-[200px] max-lg:w-[200px] max-lg:h-[150px] max-md:w-[180px] max-md:h-[150px] max-sm:w-[150px] max-sm:h-[130px] ">
                                <img src="/ssacademicimg3.png" alt="academic support image 3" className="absolute w-full h-full object-cover rounded-xl border-[1px] border-black shadow-xl" />
                            </div>
                            <h3 className="text-lg font-bold text-center max-sm:text-base ">Workshops and Seminars</h3>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-10 py-6 bg-[#BDE7E5] ">
                    <div className="flex flex-col gap-4 md:px-12 px-6 ">
                        <h2 className="text-3xl font-bold">Counselling Services</h2>
                        <p className="text-lg font-medium">Your mental health is important to us. 
                            Our counseling services offer confidential support to 
                            help you navigate personal and academic challenges. 
                            Book an appointment with our professional counselors today.
                        </p>
                    </div>
                    <div className="flex md:gap-12 gap-6 justify-center items-center max-md:px-6 ">
                        <div className="flex flex-col gap-5 items-center ">
                            <RiMentalHealthFill size={60} className="max-sm:w-[45px] max-sm:h-[45px] " />
                            <h3 className="text-lg font-bold text-center max-sm:text-base ">Mental Health Support</h3>
                        </div>
                        <div className="flex flex-col gap-5 items-center ">
                            <PiFlowerLotusFill size={60} className="max-sm:w-[45px] max-sm:h-[45px] " />
                            <h3 className="text-lg font-bold text-center max-sm:text-base ">Wellness Program</h3>
                        </div>
                        <div className="flex flex-col gap-5 items-center ">
                            <MdContactPage size={60} className="max-sm:w-[45px] max-sm:h-[45px] " />
                            <h3 className="text-lg font-bold text-center max-sm:text-base ">Emergency Contracts</h3>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-10 py-6 ">
                    <div className="flex flex-col gap-4 md:px-12 px-6 ">
                        <h2 className="text-3xl font-bold">Extracurricular Activities</h2>
                        <p className="text-lg font-medium">Get involved and make the most of your time at JNV. 
                            Join a club, participate in events, 
                            and explore volunteer opportunities to enrich your student life.
                        </p>
                    </div>
                    <div className="flex max-sm:flex-wrap md:gap-10 gap-6 max-sm:gap-4 justify-center items-center max-md:px-6">
                        <div className="flex flex-col gap-5 items-center  ">
                            <div className="relative min-w-[100px] w-[250px] h-[200px] max-lg:w-[200px] max-lg:h-[150px] max-md:w-[180px] max-md:h-[150px] max-sm:w-[150px] max-sm:h-[130px] ">
                                <img src="/ssactivityimg1.png" alt="activity image 1" className="absolute w-full h-full object-cover rounded-xl border-[1px] border-black shadow-xl" />
                            </div>
                            <h3 className="text-lg font-bold text-center max-sm:text-sm ">Clubs and Organizations</h3>
                        </div>
                        <div className="flex flex-col gap-5 items-center ">
                            <div className="relative min-w-[100px] w-[250px] h-[200px] max-lg:w-[200px] max-lg:h-[150px] max-md:w-[180px] max-md:h-[150px] max-sm:w-[150px] max-sm:h-[130px] ">
                                <img src="/ssactivityimg2.png" alt="activity image 2" className="absolute w-full h-full object-cover rounded-xl border-[1px] border-black shadow-xl" />
                            </div>
                            <h3 className="text-lg font-bold text-center max-sm:text-sm ">Events and Activities</h3>
                        </div>
                        <div className="flex flex-col gap-5 items-center ">
                            <div className="relative min-w-[100px] w-[250px] h-[200px] max-lg:w-[200px] max-lg:h-[150px] max-md:w-[180px] max-md:h-[150px] max-sm:w-[150px] max-sm:h-[130px] ">
                                <img src="/ssactivityimg3.png" alt="activity image 3" className="absolute w-full h-full object-cover rounded-xl border-[1px] border-black shadow-xl" />
                            </div>
                            <h3 className="text-lg font-bold text-center max-sm:text-sm ">Volunteer Opportunities</h3>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-10 py-6 bg-[#BDE7E5] ">
                    <div className="flex flex-col gap-4 md:px-12 px-6 ">
                        <h2 className="text-3xl font-bold"> Support Resources</h2>
                        <p className="text-lg font-medium">Find the support you need with our comprehensive resources. 
                            Learn about financial aid options, accommodation services, 
                            and IT support to ensure your needs are met.
                        </p>
                    </div>
                    <div className="flex md:gap-12 gap-6 justify-center items-center max-md:px-6 ">
                        <div className="flex flex-col gap-3 items-center ">
                            <TbBuildingBank size={60} className="max-sm:w-[45px] max-sm:h-[45px] " />
                            <h3 className="text-lg font-bold text-center max-sm:text-base ">Financial Aid</h3>
                        </div>
                        <div className="flex flex-col gap-3 items-center ">
                            <MdRoomPreferences size={60} className="max-sm:w-[45px] max-sm:h-[45px] " />
                            <h3 className="text-lg font-bold text-center max-sm:text-base ">Accommodation Services</h3>
                        </div>
                        <div className="flex flex-col gap-3 items-center ">
                            <Cpu size={60} className="max-sm:w-[45px] max-sm:h-[45px] " />
                            <h3 className="text-lg font-bold text-center max-sm:text-base ">IT Support</h3>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-10 py-6 ">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-3xl font-bold text-center ">  Contact Information</h2>
                        <p className="text-lg font-medium md:px-12 px-6 text-left ">Have questions or need assistance? 
                            Reach out to us through the following contacts:
                        </p>
                    </div>
                    <div className="flex flex-col gap-5 md:px-12 px-6 ">
                        <div className="flex gap-2 items-center ">
                            <MdOutlineMailOutline size={30} className="max-sm:w-[25px] max-sm:h-[25px] flex-shrink-0 " />
                            <h3 className="text-lg font-bold max-md:text-base max-sm:text-sm ">Email:</h3>
                            <p className="text-lg font-bold text-[#1c1299] max-md:text-base max-sm:text-sm ">support@jnvchalakurthy.org</p>
                        </div>
                        <div className="flex gap-2 items-center ">
                            <MdOutlinePhone size={30} className="max-sm:w-[25px] max-sm:h-[25px] flex-shrink-0 " />
                            <h3 className="text-lg font-bold max-md:text-base max-sm:text-sm ">Phone:</h3>
                            <p className="text-lg font-bold text-[#1c1299] max-md:text-base max-sm:text-sm ">+91 (123) 456-7890</p>
                        </div>
                        <div className="flex gap-2 items-center ">
                            <MdOutlineLocationOn size={30} className="self-start max-sm:w-[25px] max-sm:h-[25px] flex-shrink-0 " />
                            <h3 className="text-lg font-bold self-start max-md:text-base max-sm:text-sm ">Address:</h3>
                            <p className="text-lg font-semibold max-md:text-base max-sm:text-sm ">Jawahar Navodaya Vidyalaya, Chalakurthy Camp, Nalgonda, Telangana, India</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}