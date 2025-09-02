import Link from 'next/link'
import React from 'react'
import {Menu} from 'lucide-react'

function Navbar() {
  return (
    <div className='w-full h-auto p-4 opacity-70 bg-black flex justify-between shadow-md fixed top-0 z-50'>
        <div className='w-1/2 cursor-pointer'>
            <Link href='/' className='text-white'>bookMyStay</Link>
        </div>
        <div className='w-1/2 hidden md:flex justify-evenly'>
            <Link href='' className="text-white hover:text-gray-700 transition ">Home</Link>
            <Link href='' className="text-white hover:text-gray-700 transition ">About</Link>
            <Link href='' className="text-white hover:text-gray-700 transition ">Contact</Link>
        </div>
        <div className='md:hidden'>
            <Menu/>
        </div>
        
    </div>
  )
}

export default Navbar
