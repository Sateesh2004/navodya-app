import '../app/globals.css'

const HomeAlumniNetwork = () => {
    return (
        <div className='md:px-12 px-6 mb-10'>
            <div className='flex items-center max-md:flex-col max-md:justify-center max-md:gap-4 '>
                <div className="flex items-center bg-[#DEB91E] p-4">
                    <div className='relative w-28 h-16'>
                        <img src="/jnvlogo.png" alt="JNV Logo" className="w-full h-full absolute" />
                    </div>
                    <span className='w-[2px] bg-black h-12 mr-2'></span>
                    <span className="text-[#F90000] font-bold">Jawahar Navodaya Vidyalaya Nalgonda Alumni Network</span>
                </div>
                <div className='home__arrow'></div>
                <div className="relative min-w-[400px] w-[600px] h-[300px] lg:h-[300px] md:h-[200px] max-sm:w-[400px] max-sm:h-[200px] ">
                    <img
                        src="/jnvimg6.png"
                        alt="JNV Building"
                        className="w-full h-full border-[#AC9B9B] border-2 rounded-xl"
                    />
                </div>
            </div>
        </div>
    )
}

export default HomeAlumniNetwork;