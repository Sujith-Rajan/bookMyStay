"use client"

import { MoveRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div className="relative w-full h-lvh shadow-green-300 shadow-xl">
            <Image src='/heroBg.jpg' alt='hero section' fill
                className="object-cover  brightness-50"
                priority />
            <div className="absolute inset-0 flex justify-center items-center p-4">
                <div className="flex flex-col items-center gap-8 md:gap-12  text-center">
                    <h1 className="text-white text-xl  md:text-2xl lg:text-3xl font-bold">
                        mFarm- A Green Haven of Nature, Cultivation, and Community,
                        <div>Book Your Perfect Stay,</div>
                        
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
