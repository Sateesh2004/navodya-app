import HomeHeroSection from '../components/HomeHeroSection';
import HomeMiddleSection from '../components/HomeMiddleSection';
import HomeCarousel from '../components/HomeCarousel';
import HomeMembers from '../components/HomeMembers';
import HomeAlumniNetwork from '../components/HomeAlumniNetwork';
import EventsData from './events/Data/data.json';
import Image from 'next/image';


export default function Home() {
  return (
    <>
      <main className='flex flex-col bg-[#E7EDFD] gap-10'>
        <HomeHeroSection />
        <HomeMiddleSection />
        <div className='mx-6 bg-white flex flex-col items-center py-5 gap-3'>
          <h1 className='uppercase text-3xl font-semibold'>Events</h1>
          <div className="container mx-auto px-4 py-2 items-center justify-center">
           {(EventsData.events.length!==0) ? (EventsData.events.slice(0, 3).map((event, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row bg-[#e7edfd] shadow-md border-l-8 border-yellow-400 overflow-hidden mb-6"
                >
                  {/* Date Section (Desktop View) */}
                  <div
                    className="hidden md:flex flex-col items-center justify-center w-1/5 p-4"
                    style={{ backgroundColor: "#e7edfd", color: "#7a0019" }}
                  >
                    <div className="text-5xl font-bold">{event.date}</div>
                    <div className="text-sm text-gray-500">{event.month}</div>
                    <div className="w-11 h-1 bg-yellow-500 mt-1"></div>
                  </div>

                  {/* Content Section */}
                  <div className="p-4 w-full md:w-2/3">
                    <div
                      className="font-bold text-base mb-2 md:mb-4"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {event.heading}
                    </div>
                    <div
                      className="text-lg md:text-3xl mb-2 md:mb-4"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {event.title}
                    </div>
                    <div
                      className="flex items-center mb-2"
                      style={{ color: "#7a0019", fontFamily: "Poppins, sans-serif" }}
                    >
                      <img
                        src="/location.svg"
                        alt="Location"
                        className="w-4 h-4 mr-2"
                      />
                      <div className="text-sm md:text-base font-semibold">
                        {event.location}
                      </div>
                    </div>
                    <p
                      className="text-base md:text-lg mb-4"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {event.description}
                    </p>
                    <button className="text-base" style={{ color: "#7a0019" }}>
                      Read more
                    </button>
                  </div>

                  {/* Image Section (Desktop View) */}
                  <div className="hidden md:block w-1/3 p-4">
                    <img
                      src={event.image}
                      alt="Event"
                      className="w-full h-auto object-cover"
                    />
                  </div>

                  {/* Mobile View adjustments */}
                  <div className="md:hidden flex w-full justify-end p-4">
                    <div className="text-xl font-bold mr-2">{event.date}</div>
                    <div className="text-sm text-gray-500">{event.month}</div>
                  </div>
                </div>
                
              ))) :
              (<div className='text-center font-medium text-xl '>No Events found</div>)
            }
          </div>
          {(EventsData.events.length!==0) ? <button className='bg-violet-200 px-6 cursor-pointer rounded-xl py-2 my-2 font-medium '><a href="/events">View all</a></button> : ""}
        </div>
        <HomeCarousel />
        <HomeMembers />
        <HomeAlumniNetwork />
      </main>
    </>
  );

}
