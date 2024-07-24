"use client";
import React, { useState } from 'react';
import GalleryImgBox from '@/components/GalleryImgBox';
import GalleryData from '@/app/gallery/Data/data.json';

type Props = {};

const GalleryPage: React.FC<Props> = () => {

    return (
        <div className='flex flex-col justify-center items-center gap-12'>
            <h1 className='text-5xl font-semibold text-center p-4'>Annual Alumni Meet</h1>
            <p className='text-center text-wrap md:w-3/4 p-4'>
                Reconnect with old friends, network with fellow alumni, and participate in engaging sessions and activities. This event brought together alumni from various batches to reconnect, network, and celebrate our shared heritage. Browse through the photos to relive the memorable moments.
            </p>
                <div className='grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-10 justify-items-center p-4'>
                    {
                        GalleryData.gallery.slice(0,6).map((data, index) => (

                            <img key={index} src={data.src} alt={data.title} />

   
                    ))     }
                </div>
            <div className='flex justify-center items-center flex-col gap-6 bg-customYellow w-full p-10'>

                <h3 className='text-3xl font-semibold'>Other Gallery</h3>

                <div className='grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-10 justify-items-center'>
                    {GalleryData.gallery.slice(0, 3).map((data, index) => (
                        <GalleryImgBox key={index} img={data.src} title={data.title} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default GalleryPage;
