'use client';
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Navigation, EffectFade, Pagination } from 'swiper/modules';


const HomeCarousel: React.FC = () => {
    return (
        <div className='md:px-12 px-6'>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                effect={'fade'}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[EffectFade, Pagination, Autoplay, Navigation ]}
                className="mySwiper w-full"
            >
                {carouselImages.map((carouselImg, index) => {
                    return (
                        <SwiperSlide key={index} className='relative h-full'>
                            <img src={carouselImg}
                                alt={`carousel Image ${index + 1} `}
                                className='w-full h-full object-cover'
                            />
                        </SwiperSlide>
                    )
                })}

            </Swiper>
        </div>
    )
}

const carouselImages: string[] = [
    "/jnvimg5.png",
    "/jnvimg5.png",
    "/jnvimg5.png",
    "/jnvimg5.png",
]

export default HomeCarousel;