// components/ContactUs.tsx

import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-white">
      {/* Banner Section 
         <div   className="relative w-full  bg-cover bg-center h-80 sm:bg-cover sm:bg-center  sm:h-96 xs:bg-cover xs:bg-center xs:h-90"
      */}
      {/* <div className="relative bg-cover bg-center h-[500px] sm:bg-cover sm:bg-center xs:bg-cover xs:bg-center"  */}
      <div className="relative   bg-cover bg-center lg:h-[500px] sm:bg-cover sm:bg-center  sm:h-96 xs:bg-cover xs:bg-center xs:h-90"
        style={{
          backgroundImage: "url(/contactbg.png)",
          backgroundPosition: "center 60%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}>


        <div className="absolute inset-0  opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 sm:p-8 ">
          <h1 className="text-3xl sm:text-5xl font-bold text-center md:mb-16">Contact Us</h1>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none hidden sm:block">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160"><path fill="white" fillOpacity="1" d="M0,80L60,85.4C120,91,240,102,360,93.3C480,85,600,58.5,720,45.4C840,32,960,32,1080,40C1200,48,1320,64,1380,72L1440,80L1440,160L1380,160C1320,160,1200,160,1080,160C960,160,840,160,720,160C600,160,480,160,360,160C240,160,120,160,60,160L0,160Z"></path></svg>

        </div>


      </div>
      {/* Text Paragraph */}


      <p className="hidden md:block   mx-40 mb-8 text-xl font-poppins text-center mt-10">
        Thank you for visiting the Jawahar Navodaya Vidyalaya Alumni Association! We value your feedback, questions, and suggestions. Please use the information below to get in touch with us, and we will respond as soon as possible.
      </p>

      {/* Main Content Section */}
      <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 sm:py-12 ">
        <div className="flex flex-col items-center md:flex-row md:justify-center md:gap-4 ">
          {/* Left Side */}
          <div className="left-container sm:ml-10 md:h-auto md:-ml-44 md:my-4 ">
            <h2 className="text-3xl font-bold mb-4 font-pt-sans-caption">
              WE ARE ALWAYS HERE TO HELP YOU.
            </h2>
            <p className="mb-4 font-poppins text-lg sm:mx-4">
              Please fill out the form and send us a message.
              We will get back to
              you as soon as possible.
            </p>
            <div className="flex items-center mb-4 space-x-4">
              {/* SVG icon */}
              <div className="relative">
                {/* Blue background SVG */}
                <img
                  src="/bluebg.svg"
                  alt="bg"
                  className="w-16 h-12 mr-2 "
                  style={{ zIndex: -1 }}
                />

                {/* Icon SVG */}
                <div className="absolute inset-0 flex items-center justify-center ">
                  <img
                    src="/visitus.svg"
                    alt="visitus"
                    className="w-6 h-5 md:justify-center"
                  />
                </div>
              </div>
              <div>
                <h3 className="font-semibold">VISIT US</h3>
                <p className="font-poppins text-sm ">
                  Jawahar Navodaya Vidyalaya, Chalakurthy Camp, Nalgonda, Telangana,
                  India
                </p>
              </div>
            </div>
            <div className="flex items-center mb-4 space-x-4">
              {/* SVG icon */}
              <div className="relative">
                {/* Blue background SVG */}
                <img
                  src="/bluebg.svg"
                  alt="bg"
                  className="w-16 h-12 mr-2"
                  style={{ zIndex: -1 }}
                />

                {/* Icon SVG */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="/mail.svg"
                    alt="mail"
                    className="w-6 h-4 mr-2"
                  />
                </div>
              </div>
              <div>
                <h3 className="font-semibold">EMAIL ID</h3>
                <p className="font-poppins text-sm">info@jnvccnalumni.org</p>
              </div>
            </div>
            <div className="flex items-center mb-4 space-x-4">
              {/* SVG icon */}
              <div className="relative">
                {/* Blue background SVG */}
                <img
                  src="/bluebg.svg"
                  alt="bg"
                  className="w-16 h-12 mr-2"
                  style={{ zIndex: -1 }}
                />

                {/* Icon SVG */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="/call.svg"
                    alt="call"
                    className="w-6 h-4 mr-2"
                  />
                </div>
              </div>
              <div>
                <h3 className="font-semibold">CALL NOW</h3>
                <p className="font-poppins text-sm">+1 (123) 456-7890</p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="right container md:h-auto     sm:mr-10  md:-mr-44 md:my-4">
            <form className="bg-white rounded-lg p-6 space-y-4 ">
              <div className="flex space-x-4 mb-8">
                <div className="w-1/2">

                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name*"
                    className="w-full md:h-12  rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 px-5 py-2 mt-1  bg-slate-300 text-black placeholder-black"
                    required
                  />          </div>
                <div className="w-1/2">

                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder=" Email Address *"
                    className="w-full md:h-12 rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 px-3 py-2 mt-1  bg-slate-300 text-black placeholder-black"
                    required
                  />          </div>
              </div>


              <div className="flex space-x-4 md:mb-20">

                <div className="w-1/2">

                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder=" Phone Number *"
                    className="w-full md:h-12  rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 px-3 py-2 mt-1  bg-slate-300 text-black placeholder-black"
                    required
                  />
                </div>

                <div className="w-1/2">

                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Subject *"
                    className="w-full  md:h-12 rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 px-3 py-2 mt-1  bg-slate-300 text-black placeholder-black"
                    required
                  />
                </div>
              </div>

              <div >

                <textarea
                  id="message"
                  name="message"
                  placeholder="Write  Message *"
                  className="w-full h-52 rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 px-3 py-2 mt-1  bg-slate-300 text-black placeholder-black md:mt-10"
                  rows={4}
                  maxLength={2000}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-800 text-white rounded-md px-4 py-2 mt-4 hover:bg-blue-600 transition-colors"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>



    </div>
  );
};

export default ContactUs;
