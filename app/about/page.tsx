import React from 'react'



 const About = () => {
  return (
    
<section className='bg-[#96cace]'>
    <div className="container mx-auto p-4 bg-[#96cace]">
      {/* Overview Section */}
      <div className="flex flex-col md:flex-row mb-8 md:border-2 border-gray-500 md:rounded-xl bg-[#e7edfd]">
        <div className="md:w-1/2 p-4  ">
          <h1 className="text-2xl ml-2 mb-3 md:text-4xl font-bold text-left md:mt-6">Overview</h1>
          <p className="text-base md:text-xl font-normal leading-6 text-justify ml-2 mr-2">
            Welcome to the Jawahar Navodaya Vidyalaya Nalagoda Alumni Association! We are a vibrant community of former students dedicated to staying connected, supporting each other, and giving back to our alma mater. Our association fosters lifelong friendships, professional networking, and collaborative opportunities that benefit all members.
          </p>
        </div>
        <div className="md:w-1/2 p-4 flex justify-center">
          <img src="/boy.png" alt="Overview Image" className="max-w-full h-auto md:-mt-10" />
        </div>
      </div>

      {/* Vision, Mission, and Values Section */}
      <div className="mb-8 md:border-2 border-gray-500 md:rounded-xl md:px-5 bg-[#e7edfd]">
        <h2 className="mt-10 text-2xl ml-2 mb-3 md:text-4xl font-bold text-left md:mt-8">JNV Vision, Mission and Values</h2>
        <p className="text-base md:text-xl font-normal leading-6 text-justify mb-4 mx-4">
          Our mission is to cultivate a robust network of JNVCC alumni, provide mentorship and guidance to current students, and foster a spirit of giving back to the community. We aim to create a platform for alumni to share their experiences, support each other's endeavors, and contribute to the growth of Navodaya Vidyalayas.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:mb-10">
          {/* <div className="bg-white p-4 rounded-lg shadow-md w-1/2"> */}
          <div>
            <img src="/plate1.svg" alt="Card Image" className="w-full p-4  object-cover mb-4" />
            {/* <svg className="mx-auto mb-4">...</svg> */}
           
          </div>
          {/* plate2 */}
          <div>
            <img src="/plate2.svg" alt="Card Image" className="w-full p-4  object-cover mb-4" />
            {/* <svg className="mx-auto mb-4">...</svg> */}
           
          </div>
          {/* plate3 */}
          <div>
            <img src="/plate3.svg" alt="Card Image" className="w-full p-4  object-cover mb-4" />
            {/* <svg className="mx-auto mb-4">...</svg> */}
           
          </div>
        </div>
      </div>

      {/* Objectives & Activities Section */}
      <h2 className="text-xl md:text-3xl font-bold text-center mb-4 ">Objectives & Activities</h2>
      <div className="mb-8 md:border-2 border-gray-500 md:rounded-xl md:px-5 bg-[#e7edfd]">
  <h6 className="text-sm md:text-xl ml-2 mt-3 font-bold bg-[#3d458a] mb-4 py-2 px-3 inline-block rounded-xl text-white">Objectives</h6>
  <p className="text-base md:text-xl font-normal leading-6 text-justify mx-4 mb-8">
    Our objectives define the purpose and direction of the Jawahar Navodaya Vidyalaya Nalagoda Alumni Association. These objectives guide our initiatives and ensure we remain focused on supporting our members and the JNV community.
  </p>

 <div className="flex flex-wrap justify-center items-center md:justify-start md:space-x-12 md:mx-20">
    {/* <!-- Card 1 --> */}
    <div className="max-w-xs mx-2 my-4 relative">
    <div className="w-[180px] h-[380px] border border-gray-200 rounded-[90px] overflow-hidden relative">
        {/* Circle Background */}
        <img src="circle1.svg" alt="Card 1" className="absolute inset-0 w-full h-full object-cover border-2 border-transparent" />

       
       
    </div>
</div>

    {/* <!-- Card 2 --> */}
    <div className="max-w-xs mx-2 my-4 relative">
    <div className="w-[180px] h-[380px] border border-gray-200 rounded-[90px] overflow-hidden relative">
        {/* Circle Background */}
        <img src="circle2.svg" alt="Card 1" className="absolute inset-0 w-full h-full object-cover border-2 border-transparent" />

       
        
    </div>
</div>


    {/* <!-- Card 3 (Same as Card 1) --> */}
    <div className="max-w-xs mx-2 my-4 relative">
    <div className="w-[180px] h-[380px] border border-gray-200 rounded-[90px] overflow-hidden relative">
        {/* Circle Background */}
        <img src="circle3.svg" alt="Card 1" className="absolute inset-0 w-full h-full object-cover border-2 border-transparent" />

        
    </div>
</div>

    {/* <!-- Card 4 (Same as Card 2) --> */}
    <div className="max-w-xs mx-2 my-4 relative">
    <div className="w-[180px] h-[380px] border border-gray-200 rounded-[90px] overflow-hidden relative">
        {/* Circle Background */}
        <img src="circle4.svg" alt="Card 1" className="absolute inset-0 w-full h-full object-cover border-2 border-transparent" />

      
    </div>
</div>

    {/* <!-- Card 5 (Same as Card 1) --> */}
    <div className="max-w-xs mx-2 my-4 relative">
    <div className="w-[180px] h-[380px] border border-gray-200 rounded-[90px] overflow-hidden relative">
        {/* Circle Background */}
        <img src="circle5.svg" alt="Card 1" className="absolute inset-0 w-full h-full object-cover border-2 border-transparent" />

       
    </div>
</div>
</div>

</div>

      {/* Activities Section */}
      <div className="mb-8 md:border-2 border-gray-500 md:rounded-xl md:px-5 bg-[#e7edfd] ">
        <h2 className="text-sm md:text-xl mt-3 ml-2 font-bold bg-[#3d458a] mb-4 py-2 px-3 inline-block rounded-xl text-white">Activities</h2>
        <p className="text-base md:text-xl font-normal leading-6 text-justify mx-4 mb-8">
          Our activities are designed to achieve our objectives and provide value to our members and the JNVCC community. These activities create opportunities for engagement, learning, and giving back.
        </p>
       <div className="flex flex-wrap justify-center items-center md:justify-start md:space-x-12 md:mx-20 mx-auto sm:ml-10">
    {/* card-1 */}
    <div className="w-[180px] h-[380px] border border-gray-200 rounded-[90px] overflow-hidden relative mx-2 my-4">
        <img src="circle7.svg" alt="Card 1" className="absolute inset-0 w-full h-full object-cover border-2 border-transparent" />
    </div>
    {/* card-2 */}
    <div className="w-[180px] h-[380px] border border-gray-200 rounded-[90px] overflow-hidden relative mx-2 my-4">
        <img src="circle6.svg" alt="Card 2" className="absolute inset-0 w-full h-full object-cover border-2 border-transparent" />
    </div>
    {/* card-3 */}
    <div className="w-[180px] h-[380px] border border-gray-200 rounded-[90px] overflow-hidden relative mx-2 my-4">
        <img src="circle8.svg" alt="Card 3" className="absolute inset-0 w-full h-full object-cover border-2 border-transparent" />
    </div>
    {/* card-4 */}
    <div className="w-[180px] h-[380px] border border-gray-200 rounded-[90px] overflow-hidden relative mx-2 my-4">
        <img src="circle9.svg" alt="Card 4" className="absolute inset-0 w-full h-full object-cover border-2 border-transparent" />
    </div>
    {/* card-5 */}
    <div className="w-[180px] h-[380px] border border-gray-200 rounded-[90px] overflow-hidden relative mx-2 my-4">
        <img src="circle10.svg" alt="Card 5" className="absolute inset-0 w-full h-full object-cover border-2 border-transparent" />
    </div>
</div>

      </div>

      {/* Past Presidents Section */}
      <div className="mb-8 mx-10">
        <h2 className="text-2xl md:text-4xl font-bold text-left mb-4   ">Past Presidents</h2>
        <p className="text-base  md:text-xl font-normal leading-6 text-justify mb-8">
          The Jawahar Navodaya Vidyalaya Nalagoda Alumni Association owes much of its success to the visionary leadership of its past presidents. Their dedication and commitment have laid a strong foundation for our vibrant community. We honor and thank them for their invaluable contributions.
        </p>
      </div>

      {/* Presidents Table */}
      <div className="mb-8 md:border-2 border-gray-500 md:rounded-xl bg-[#e7edfd] ">
        <h2 className="text-xl mt-6 mx-10 md:mx-48 md:mb-10 md:mt-7 md:text-4xl font-medium text-center mb-4 py-2 px-3 inline-block rounded-xl  bg-[#c5b5ec]">Presidents of J.N.V Alumni Association (2010-2024)</h2>
        <div className="p-4 rounded-xl overflow-x-auto">
      <table className="w-full table-fixed border border-black border-collapse">
        <thead>
          <tr className="border-b border-black">
            <th className="w-2/12 md:w-1/12 bg-[#1c89e6] text-white border-r-2 border-black pr-2 md:border-r-2">S.no</th>
            <th className="w-6/12 md:w-7/12 p-2 bg-[#1c89e6] text-white border-r-2 border-black">Name</th>
            <th className="w-4/12 p-2 bg-[#1c89e6] text-white">Year</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b border-black">
            <td className="p-2 border-r-2 border-black text-center text-sm sm:text-xl">1</td>
            <td className="p-2 border-r-2 border-black text-center text-sm sm:text-xl">Dr. Ravi Kumar</td>
            <td className="p-2 text-center text-sm sm:text-xl">2010-2012</td>
          </tr>
          <tr className="bg-[#d9d9d9] border-b border-black">
            <td className="p-2 border-r-2 border-black text-center text-sm sm:text-xl">2</td>
            <td className="p-2 border-r-2 border-black text-center text-sm sm:text-xl">Ms. Priya Sharma</td>
            <td className="p-2 text-center text-sm sm:text-xl">2012-2014</td>
          </tr>
          <tr className="bg-white border-b border-black">
            <td className="p-2 border-r-2 border-black text-center text-sm sm:text-xl">3</td>
            <td className="p-2 border-r-2 border-black text-center text-sm sm:text-xl">Mr. Anil Mehta</td>
            <td className="p-2 text-center text-sm sm:text-xl">2014-2016</td>
          </tr>
          <tr className="bg-[#d9d9d9] border-b border-black">
            <td className="p-2 border-r-2 border-black text-center text-sm sm:text-xl">4</td>
            <td className="p-2 border-r-2 border-black text-center text-sm sm:text-xl">Dr. Sunita Rao</td>
            <td className="p-2 text-center text-sm sm:text-xl">2016-2018</td>
          </tr>
          <tr className="bg-white border-b border-black">
            <td className="p-2 border-r-2 border-black text-center text-sm sm:text-xl">5</td>
            <td className="p-2 border-r-2 border-black text-center text-sm sm:text-xl">Mr. Rajesh Patel</td>
            <td className="p-2 text-center text-sm sm:text-xl">2018-2020</td>
          </tr>
          <tr className="bg-[#d9d9d9] border-b border-black">
            <td className="p-2 border-r-2 border-black text-center text-sm sm:text-xl">6</td>
            <td className="p-2 border-r-2 border-black text-center text-sm sm:text-xl">Mr. Rajesh Patel</td>
            <td className="p-2 text-center text-sm sm:text-xl">2020-2022</td>
          </tr>
          <tr className="bg-white border-b border-black">
            <td className="p-2 border-r-2 border-black text-center text-sm sm:text-xl">7</td>
            <td className="p-2 border-r-2 border-black text-center text-sm sm:text-xl">Ms. Neha Gupta</td>
            <td className="p-2 text-center text-sm sm:text-xl">2022-2024</td>
          </tr>
          <tr className="bg-[#d9d9d9]">
            <td className="p-2 border-r-2  border-black text-center text-sm sm:text-xl">8</td>
            <td className="p-2 border-r-2 border-black text-center text-sm sm:text-xl">Mr. Vikram Singh</td>
            <td className="p-2 text-center text-sm sm:text-xl">2024-2026</td>
          </tr>
        </tbody>
      </table>
    </div>
      </div>
    </div>
 </section>
  )
}


export default About


