"use client"

import { MoveRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { ReactTyped } from 'react-typed'

const Hero = () => {
    return (
        <div className="relative w-full h-[90lvh] md:h-[90lvh] shadow-green-300 shadow-xl">
            <Image src='/heroBg.jpg' alt='hero section' fill
                className="object-cover"
                priority />
            <div className="absolute inset-0 flex justify-center items-center p-4">
                <div className="flex flex-col items-center gap-8 md:gap-12  text-center">
                    <h1 className="text-white text-4xl md:text-6xl font-bold">
                        <ReactTyped
                            strings={[
                                '<span class="text-red-700">mFarm</span> – A Green Haven of Nature, Cultivation, and Community',
                                '<span class="text-red-700">B</span>ook Your Perfect Stay',
                            ]}
                            typeSpeed={70}
                            backSpeed={70}
                            backDelay={1200}
                            loop
                        />
                    </h1>
                    <button className=' text-white bg-black p-4 rounded-md opacity-75 cursor-pointer flex gap-2 hover:opacity-100 transition'>
                        <span>Book Your Stay </span><MoveRight />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero
