"use client"

import Image from 'next/image';
import React from 'react'
import { Navigation, Pagination } from 'swiper/modules';
import "swiper/css";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/navigation";
import "swiper/css/pagination";

const HomeStaySection = () => {
    const images = [
        "/resort1.jpg",
        "/resort2.jpg",
        "/resort3.jpg",
        "/resort4.jpg",
    ];
    return (
        <div className='w-full py-16 px-4 bg-gray-100 shadow-lg shadow-blue-100'>
            <div className='max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center'>
                <div className='w-full md:w-1/2'>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        navigation
                        pagination={{
                            clickable: true,
                            renderBullet: (index, className) => {
                                return `<span class="${className} !bg-blue-800 !rounded-full !mx-1 !p-2"></span>`;
                            },
                        }}
                        spaceBetween={10}
                        slidesPerView={1}
                        loop
                    >
                        {images.map((src, index) => (
                            <SwiperSlide key={index}>
                                <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden">
                                    <Image
                                        src={src}
                                        alt={`Room ${index + 1}`}
                                        fill
                                        className='object-cover'
                                        priority
                                    />
                                </div>
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </div>

                <div>
                    <h2 className='text-3xl md:text-4xl font-bold text-gray-500 mb-4 tracking-wider text-center'>Welcome to Our Cozy FarmStay</h2>
                    <p className='text-gray-600 text-lg md:text-xl tracking-wider mb-6'>Experience a serene stay surrounded by nature and comfort. Our homestay offers beautifully designed rooms, local flavors, and a relaxing atmosphere that makes you feel right at home.</p>
                    <button className='px-6 py-3 bg-blue-700 text-white rounded-md w-fit hover:bg-blue-800 transition cursor-pointer'>
                        Book Your Stay
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HomeStaySection
