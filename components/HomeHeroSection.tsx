'use client';
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Navigation, EffectFade, Pagination } from 'swiper/modules';


const HomeHeroSection: React.FC = () => {
    return (
        <div>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                autoHeight={true}
                navigation={true}
                loop={true}
                effect={'fade'}
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
                {heroImages.map((heroImg, index) => {
                    return (
                        <SwiperSlide key={index} className='relative h-full'>
                            <img src={heroImg}
                                alt={`hero Image ${index + 1} `}
                                className='w-full h-full object-cover'
                            />
                        </SwiperSlide>
                    )
                })}

            </Swiper>
        </div>
    )
}

const heroImages: string[] = [
    "/heroimg1.png",
    "/heroimg2.jpeg",
]

export default HomeHeroSection;