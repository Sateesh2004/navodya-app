import { IconType } from "react-icons";
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaWhatsapp, FaMailBulk } from "react-icons/fa";

const HomeMembers = () => {
    return (
        <div className="">
            <div className="flex flex-col justify-center items-center md:px-12 px-6 gap-8">
                <div className="flex flex-col items-center gap-5">
                    <h1 className="font-bold text-2xl uppercase">
                        Latest Association Members
                    </h1>
                    <div className="flex flex-wrap items-center gap-8 max-[480px]:gap-5 max-lg:justify-center ">
                        {associationMembers.map((member, index) => {
                            return (
                                <div key={index} className="flex flex-col bg-white items-center px-2 py-1 gap-2 border-[#979393] border-[1px] rounded-xl shadow-xl min-w-36 lg:w-48 w-44 max-[420px]:w-40 cursor-pointer transition duration-200 ease-in-out hover:scale-105 hover:shadow-[0_4px_16px_-1px_rgb(0,0,0,0.1),0_2px_4px_-2px_rgb(0,0,0,0.1)] ">
                                    <div className='rounded-full border-[#6512B7] border-2 relative min-w-[100px] w-[150px] h-[150px] max-[420px]:w-[130px] max-[420px]:h-[130px]  '>
                                        <img src={member.img} alt="jnvmember" className='w-full h-full rounded-full bg-white absolute' />
                                    </div>
                                    <div className="flex flex-col gap-1 items-center">
                                        <h2 className="text-lg max-[420px]:text-base font-semibold text-center">
                                            {member.name}
                                        </h2>
                                        <h2 className="text-lg max-[420px]:text-base font-semibold text-center">
                                            {member.role}
                                        </h2>
                                        <div className="flex items-center gap-4">
                                            {member.icons.map((Icon, iconIndex) => {
                                                return (
                                                    <a key={iconIndex} href={member.socialMediaLinks[iconIndex]} target="_blank" rel="noopener noreferrer">
                                                        <Icon size={20} />
                                                    </a>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

interface Members {
    img: string;
    name: string;
    role: string;
    icons: IconType[];
    socialMediaLinks: string[];
}

const associationMembers: Members[] = [
    {
        img: '/jnvmember.png',
        name: "Koushik Vardhan",
        role: "Managing Director",
        icons: [FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaWhatsapp, FaMailBulk],
        socialMediaLinks: [
            "https://www.facebook.com/example",
            "https://www.instagram.com/example",
            "https://www.linkedin.com/in/example",
            "https://wa.me/1234567890"  // Replace with actual WhatsApp link
        ],
    },
    {
        img: '/chandar.jpg',
        name: "Koushik Vardhan",
        role: "Managing Director",
        icons: [FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaWhatsapp, FaMailBulk],
        socialMediaLinks: [
            "https://www.facebook.com/example",
            "https://www.instagram.com/example",
            "https://www.linkedin.com/in/example",
            "https://wa.me/1234567890"  // Replace with actual WhatsApp link
        ],
    },
    {
        img: '/jnvmember.png',
        name: "Koushik Vardhan",
        role: "Managing Director",
        icons: [FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaWhatsapp, FaMailBulk],
        socialMediaLinks: [
            "https://www.facebook.com/example",
            "https://www.instagram.com/example",
            "https://www.linkedin.com/in/example",
            "https://wa.me/1234567890"  // Replace with actual WhatsApp link
        ],
    },
    {
        img: '/jnvmember.png',
        name: "Koushik Vardhan",
        role: "Managing Director",
        icons: [FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaWhatsapp, FaMailBulk],
        socialMediaLinks: [
            "https://www.facebook.com/example",
            "https://www.instagram.com/example",
            "https://www.linkedin.com/in/example",
            "https://wa.me/1234567890"  // Replace with actual WhatsApp link
        ],
    },
    {
        img: '/jnvmember.png',
        name: "Koushik Vardhan",
        role: "Managing Director",
        icons: [FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaWhatsapp, FaMailBulk],
        socialMediaLinks: [
            "https://www.facebook.com/example",
            "https://www.instagram.com/example",
            "https://www.linkedin.com/in/example",
            "https://wa.me/1234567890"  // Replace with actual WhatsApp link
        ],
    },
    
];

export default HomeMembers;
