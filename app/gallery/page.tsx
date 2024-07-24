"use client"
import React, { useState } from 'react';
import GalleryImgBox from '@/components/GalleryImgBox';
import GalleryData from '@/app/gallery/Data/data.json';

type Props = {};

const Gallery: React.FC<Props> = () => {
  const [searchName, setSearchName] = useState('');
  const [searchYear, setSearchYear] = useState('');

  const filteredData = GalleryData.gallery.filter(item => 
    item.title.toLowerCase().includes(searchName.toLowerCase()) &&
    item.year.includes(searchYear)
  );

  return (
    <div className='flex flex-col justify-center items-center gap-12 p-4'>
      <h1 className='text-5xl font-semibold'>Gallery</h1>
      <div className='flex max-[768px]:flex-col justify-center items-center gap-2 md:gap-20'>
        <input 
          type="text" 
          placeholder=' Search by name' 
          className='bg-blue-200 p-2 rounded-md border-black border' 
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
        <input 
          type="text" 
          placeholder='Search by year' 
          className='bg-blue-200 p-2 rounded-md border-black border'
          value={searchYear}
          onChange={(e) => setSearchYear(e.target.value)}
        />
      </div>
      <p className='md:w-3/4 text-center text-wrap'>
        Relive the memories from our reunions, alumni meets, workshops, and webinars. Click on the search by name or search by year to view more photos from each event.
      </p>
      <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-10 justify-items-center'>
        {filteredData.map((data, index) => (
          <GalleryImgBox key={index} img={data.src} title={data.title} />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
