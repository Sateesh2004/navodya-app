import React from 'react';

type Props = {};

const Donate: React.FC<Props> = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className=" bg-white rounded-lg shadow-md">
        <div className='relative w-full h-[200px]'>
          <img src="/DonateBanner.png" alt="" className='relative w-full h-[200px] md:h-full' />
          <div className='absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white p-1 md:p-0'>
            <h1 className="md:text-4xl text-2xl font-bold text-center text-wrap md:w-3/5 mb-6">
              Empower Change With Your Contribution
            </h1>
            <p className="text-center mb-6">
              Your Donation Has The Power To Transform Lives.
            </p>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center mt-8'>
          <p className='w-4/5 text-center'>
            Support the Jawahar Navodaya Vidyalaya Alumni Association! Your generous contributions help us fund scholarships, improve school infrastructure, and support community service projects. Together, we can make a significant impact on the lives of current and future students.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center mt-8">
            <div className="md:w-1/3 h-[400px] md:h-fit w-3/4 p-4">
              <img
                src="/donate.png"
                alt="Donate"
                className="rounded-lg object-fit w-full h-[400px] md:h-fit md:w-fit"
              />
            </div>

            <div className="md:w-1/2 p-4 flex flex-col  gap-6 justify-center items-center  mt-8 md:mt-0">
              <h2 className="text-3xl md:text-6xl text-[#292D66] font-semibold mb-4">Donate now</h2>
              <form className="space-y-4 w-full h-full">
             <div className='flex flex-col justify-center md:gap-10 gap-2 md:flex-row'>
             <div className='flex flex-col  gap-3 md:gap-6  w-full'>
                  <div className="flex space-x-4">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full p-2 border rounded"
                    />

                  </div>
                  <input
                    type="email"
                    placeholder="Email ID"
                    className="w-full p-2 border rounded"
                  />
                  <input
                    type="tel"
                    placeholder="Phone no."
                    className="w-full p-2 border rounded"
                  />
                  <div className="flex space-x-4">
                    <input
                      type="text"
                      placeholder="Profession"
                      className="w-full p-2 border rounded"
                    />

                  </div>
                
                </div>
                <div className='flex flex-col gap-3 md:gap-6 w-full'>

                <select className="w-full p-2 border rounded">
                    <option>USD$</option>
                    <option>USD$</option>
                    <option>USD$</option>
                    <option>USD$</option>

                  </select>
                  <select className="w-full p-2 border rounded">
                    <option>Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                  <select className="w-full p-2 border rounded">
                    <option>Batch</option>
                    <option>Batch1</option>
                    <option>Batch2</option>

                  </select>
                  <div className="flex space-x-4">
                    <input
                      type="number"
                      placeholder="Age"
                      className="w-full p-2 border rounded"
                    />

                  </div>
                 
                </div>
             </div>
             <div className='flex justify-center items-center'>
                    <input
                      type="number"
                      placeholder="$ Enter the amount"
                      className="w-full md:w-[300px] p-2 border rounded"
                    />
                  </div>
                <div className="mt-4">
                  <label className="block text-md  font-semibold mb-2 flex gap-10">
                    Choose Payment <span className='flex text-slate-400 items-center gap-2 text-sm font-normal'><svg className='w-4 h-4 fill-gray-600' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M384 480c0 11.7 3.1 22.6 8.6 32H392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L490.7 166.3C447.2 181.7 416 223.2 416 272v24.6c-19.1 11.1-32 31.7-32 55.4V480zM528 240c-17.7 0-32 14.3-32 32v48h64V272c0-17.7-14.3-32-32-32zm-80 32c0-44.2 35.8-80 80-80s80 35.8 80 80v48c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V352c0-17.7 14.3-32 32-32V272z" /></svg>SECURE</span>
                  </label>
                  <div className="flex flex-col md:flex-row gap-4">
                    <button className="flex items-center justify-center space-x-2 px-4 py-2 bg-indigo-600   text-white rounded w-full">

                      <span className='flex justify-center items-center gap-20'>
                        <img src="/mastercard.png" alt="mastercard img" />
                        <svg className='w-12 h-10 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M470.1 231.3s7.6 37.2 9.3 45H446c3.3-8.9 16-43.5 16-43.5-.2 .3 3.3-9.1 5.3-14.9l2.8 13.4zM576 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM152.5 331.2L215.7 176h-42.5l-39.3 106-4.3-21.5-14-71.4c-2.3-9.9-9.4-12.7-18.2-13.1H32.7l-.7 3.1c15.8 4 29.9 9.8 42.2 17.1l35.8 135h42.5zm94.4 .2L272.1 176h-40.2l-25.1 155.4h40.1zm139.9-50.8c.2-17.7-10.6-31.2-33.7-42.3-14.1-7.1-22.7-11.9-22.7-19.2 .2-6.6 7.3-13.4 23.1-13.4 13.1-.3 22.7 2.8 29.9 5.9l3.6 1.7 5.5-33.6c-7.9-3.1-20.5-6.6-36-6.6-39.7 0-67.6 21.2-67.8 51.4-.3 22.3 20 34.7 35.2 42.2 15.5 7.6 20.8 12.6 20.8 19.3-.2 10.4-12.6 15.2-24.1 15.2-16 0-24.6-2.5-37.7-8.3l-5.3-2.5-5.6 34.9c9.4 4.3 26.8 8.1 44.8 8.3 42.2 .1 69.7-20.8 70-53zM528 331.4L495.6 176h-31.1c-9.6 0-16.9 2.8-21 12.9l-59.7 142.5H426s6.9-19.2 8.4-23.3H486c1.2 5.5 4.8 23.3 4.8 23.3H528z" /></svg></span>
                    </button>
                    <button className="flex items-center justify-center space-x-2 px-4 py-2 bg-sky-500 text-white font-semibold rounded w-full">
                      <svg className='w-6 h-6 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4 .7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9 .7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z" /></svg>
                      <span>PayPal</span>
                    </button>
                  </div>
                </div>
              </form>
              <p className="mt-4 text-xs text-gray-600">
                We are committed to protecting your privacy. Your personal and financial information is confidential and will not be shared with any third parties without your explicit consent. Our privacy policy details how we handle and protect your data.
              </p>
              <p className="mt-4 text-xs text-gray-600">
                Our payment processing systems are fully compliant with the Payment Card Industry Data Security Standard (PCI DSS). This standard ensures that we handle, process, and store credit card information in a secure environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
