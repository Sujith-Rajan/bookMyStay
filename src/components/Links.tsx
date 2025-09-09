import { Instagram, PhoneCall, Youtube } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Links = () => {
    return (
        <div className='w-full h-auto bg-gray-200 p-4'>
            <div className='m-15'>
                {/* Links */}
                <div className="max-w-6xl w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {/* Company */}
                    <div className="flex flex-col gap-2">
                        <h2 className="text-gray-400 ">Company</h2>
                        <Link href="/" className="text-gray-600 hover:text-gray-400 transition-colors">About Us</Link>
                        <Link href="/" className="text-gray-600 hover:text-gray-400 transition-colors">Contact Us</Link>
                    </div>

                    {/* Explore */}
                    <div className="flex flex-col gap-2">
                        <h2 className="text-gray-400 ">Explore</h2>
                        <Link href="/" className="text-gray-600 hover:text-gray-400 transition-colors">Reviews</Link>
                        <Link href="/" className="text-gray-600 hover:text-gray-400 transition-colors">Blog</Link>
                    </div>

                    {/* Customer Service */}
                    <div className="flex flex-col gap-2">
                        <h2 className="text-gray-400 ">Customer Service</h2>
                        <Link href="/" className="text-gray-600 hover:text-gray-400 transition-colors">Need Help?</Link>
                        <div className='flex gap-2'>
                            <PhoneCall className='w-4 text-gray-600' />
                            <h3 className='text-gray-600'>+91 9XXXXXXXXX</h3>
                        </div>
                    </div>
                    {/* Social */}
                    <div className='flex gap-2'>
                        <Instagram className='cursor-pointer' />
                        <Youtube className='cursor-pointer' />
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Links
