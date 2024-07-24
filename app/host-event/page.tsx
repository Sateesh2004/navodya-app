"use client"
import React from 'react';

const HostingEvents: React.FC = () => {
  return (
    <div className=" w-full bg-blue-200 flex items-center justify-center">
      <div className=" bg-white flex flex-col gap-8 rounded-lg w-full shadow-md">

        <div className='relative w-full h-[200px]'>
          <img src="/eventHost.png" alt="" className='relative w-full h-[200px] md:h-full' />
          <div className='absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white p-1 md:p-0'>
            <h1 className="md:text-4xl text-2xl font-bold text-center text-wrap md:w-3/5 mb-6">
              HOSTING EVENTS
            </h1>
          </div>
        </div>


        <h2 className="text-center text-3xl font-semibold text-red-400">Organize an Event
          Please Fill Complete details</h2>

        <div className='flex justify-center items-centter w-full h-full gap-8 p-8 md:flex-row flex-col'>


          <div className='md:w-1/2 h-full flex flex-col justify-center rounded  gap-8 border border-black p-6'>

            <div>
              <h1 className='text-lg font-bold '>Booking Process</h1>
              <p className='p-2'>Booking your event at JNV Chalakurthy Camp is easy. Follow these steps:</p>

              <ul className='list-disc'>

                <li><span className='font-semibold'>Inquiry:</span> Contact our event coordinator to check availability and discuss your requirements.</li>
                <li><span className='font-semibold'>Proposal:</span> We will provide a detailed proposal including costs and available facilities.</li>
                <li><span className='font-semibold'>Reservation:</span> Confirm your booking by completing the reservation form and paying the deposit.</li>
                <li><span className='font-semibold'>Planning:</span> Work with our team to finalize details such as seating arrangements, catering, and audio-visual needs.</li>
                <li><span className='font-semibold'>Execution:</span> Our staff will be on hand to assist with the setup and execution of your event.</li>
              </ul>
            </div>

            <div>
              <h1 className='text-lg font-bold '>Types of Events</h1>
              <p className='p-2'>We accommodate a wide range of events, including:</p>
              <ul className='list-disc'>
                <li><span className='font-semibold'>Conferences and Seminars:</span> Equipped with state-of-the-art audio-visual facilities.</li>
                <li><span className='font-semibold'>Workshops and Training Sessions:</span> Spacious halls and classrooms for interactive sessions.</li>
                <li><span className='font-semibold'>Cultural Programs:</span> Stage and auditorium for performances and shows.</li>
                <li><span className='font-semibold'>Reunions and Alumni Meets:</span> Outdoor and indoor spaces for gatherings and celebrations.</li>
                <li><span className='font-semibold'>Sports Events:</span> Well-maintained sports fields and courts for various sports activities.</li>
              </ul>
            </div>

            <div>
              <h1 className='text-lg font-bold '>Facilities Available</h1>
              <p className='p-2'>Our campus is equipped with a variety of facilities to support your event:</p>
              <ul className='list-disc'>
                <li><span className='font-semibold'>Auditorium:</span> Seats up to 500 guests, equipped with modern sound and lighting systems.</li>
                <li><span className='font-semibold'>Conference Rooms:</span> Multiple rooms with capacities ranging from 50 to 200 people.</li>
                <li><span className='font-semibold'>Classrooms:</span> Available for smaller workshops and breakout sessions.</li>
                <li><span className='font-semibold'>Outdoor Spaces:</span> Green lawns and open areas for informal gatherings and activities.</li>
                <li><span className='font-semibold'>Dining Hall:</span> Catering services available for meals and refreshments.</li>
                <li><span className='font-semibold'>Accommodation:</span> On-campus hostel facilities for overnight stays.</li>
              </ul>

            </div>
            <div>
              <h1 className='text-lg font-bold '>Hosting Guidelines</h1>
              <p className='p-2'>Content Example: "To ensure a smooth and successful event, please adhere to the following guidelines:</p>
              <ul className='list-disc'>
                <li><span className='font-semibold'>Booking:</span> Reservations should be made at least two months in advance.</li>
                <li><span className='font-semibold'>Payment:</span> A deposit is required upon booking, with the balance due one week before the event.</li>
                <li><span className='font-semibold'>Cancellations:</span> Cancellations must be made at least two weeks before the event date to receive a refund.</li>
                <li><span className='font-semibold'>Conduct:</span> All attendees are expected to follow campus rules and maintain decorum.</li>
                <li><span className='font-semibold'>Clean-Up:</span> Event organizers are responsible for ensuring that the venue is left clean and tidy.</li>
              </ul>
            </div>
          </div>

          <form className=" space-y-6 w-full md:w-fit flex md:p-10 justify-center p-4 rounded-[10px] flex-col items-center bg-black border md:rounded-tl-[100px] md:rounded-br-[100px]" action="#" method="POST">
            <div className="rounded-md shadow-sm -space-y-px flex  flex-col justify-center items-center text-white gap-4 w-full ">
              <div className='flex justify-center items-center text-white gap-4 w-full '>
                <svg className='w-6 h-7 fill-white hidden md:block' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" /></svg>
                <input id="event-name" name="event-name" type="text" required className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Event Name" />
              </div>
              <div className='flex justify-center items-center text-white gap-4 w-full '>
                <svg className='w-6 h-7 fill-white hidden md:block' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" /></svg>
                <input id="your-name" name="your-name" type="text" required className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Your Name" />
              </div>
              <div className='flex justify-center items-center text-white gap-4 w-full'>
                <svg className='w-6 h-7 fill-white hidden md:block' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>
                <input id="email-id" name="email-id" type="email" required className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email Id" />
              </div>
              <div className='flex justify-center items-center text-white gap-4 w-full'>
                <svg className='w-6 h-7 fill-white hidden md:block' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>
                <input id="contact-no" name="contact-no" type="text" required className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Contact No." />
              </div>

              <div className='flex justify-center items-center text-white gap-4 w-full'>
                <svg className='w-6 h-7 fill-white hidden md:block' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M408 120c0 54.6-73.1 151.9-105.2 192c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6c.5-1.2 1-2.5 1.5-3.7l116-46.4C558.9 123.4 576 135 576 152V422.8c0 9.8-6 18.6-15.1 22.3L416 503V200.4zM137.6 138.3c2.4 14.1 7.2 28.3 12.8 41.5c2.9 6.8 6.1 13.7 9.6 20.6V451.8L32.9 502.7C17.1 509 0 497.4 0 480.4V209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77V504.3L192 449.4V255c20.5 31.3 42.3 59.6 56.2 77c20.5 25.6 59.1 25.6 79.6 0zM288 152a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" /></svg>
                <input id="event-address" name="event-address" type="text" required className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Event address" />
              </div>
              <div className='flex justify-center items-center text-white gap-4 w-full'>
                <svg className='w-6 h-7 fill-white hidden md:block' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z" /></svg>
                <input id="virtual-online" name="virtual-online" type="text" required className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Virtual-(Online)" />
              </div>
              <div className='flex justify-center items-center text-white gap-4 w-full'>
                <svg className='w-6 h-7 fill-white hidden md:block' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z" /></svg>
                <input id="event-category" name="event-category" type="text" required className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Event Category" />
              </div>
            </div>

            <div className="rounded-md shadow-sm -space-y-px flex flex-col  gap-6 w-full">
              <div className='flex justify-center items-center text-white gap-4 w-full'>
                <svg className='w-6 h-7 fill-white hidden md:block' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z" />
                </svg>

                <input 
                id="event-date"
                 name="event-date"
                  type="date" 
                  required className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                   />
              </div>
              <div className='flex justify-center flex-col md:flex-row items-center text-white gap-4 w-full'>
                <svg className='w-16 h-8 fill-white hidden md:block' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                </svg>
                <input id="event-time" name="event-time" type="text" required className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="time" /> 

                <span className='text-xl'>to </span>  
                 <input id="event-time" name="event-time" type="text" required className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="time" />
              </div>
            </div>

            <div className='flex justify-center items-center text-white gap-4 w-full'>
              <svg className='w-6 h-7 fill-white hidden md:block' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H288V352c0-17.7 14.3-32 32-32h80V96c0-8.8-7.2-16-16-16H64zM288 480H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V320v5.5c0 17-6.7 33.3-18.7 45.3l-90.5 90.5c-12 12-28.3 18.7-45.3 18.7H288z" /></svg>
              <textarea id="event-description" name="event-description" required className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Event Descriptions">

              </textarea>
            </div>

            <div>
              <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-[8px] text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                Submit
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}

export default HostingEvents;
