"use client"
import { Link } from "react-scroll";
import React, { useState } from 'react'
import { Menu } from 'lucide-react'
import MenuHamberg from './MenuHamberg'

function Navbar() {
  const [menu, setMenu] = useState<boolean>(false)
  return (
    <div className='w-full h-auto p-4 opacity-70 bg-black flex justify-between shadow-md fixed top-0 z-50'>
      <div className='w-1/2 cursor-pointer'>
        <Link to="hero"
          smooth={true}
          duration={600}
          offset={-80} className='text-white tracking-widest text-lg'>mFarm</Link>
      </div>
      <div className='w-1/2 hidden md:flex justify-evenly'>
        <Link to="hero"
          smooth={true}
          duration={600}
          offset={-80} className="text-white hover:text-gray-700 transition ">Home</Link>
        <Link to="about"
          smooth={true}
          duration={600}
          offset={-80} className="text-white hover:text-gray-700 transition ">About Us</Link>
        <Link to="facilities"
          smooth={true}
          duration={600}
          offset={-80} className="text-white hover:text-gray-700 transition ">Facilities</Link>
        <Link to="contact"
          smooth={true}
          duration={600}
          offset={-80} className="text-white hover:text-gray-700 transition ">Contact Us</Link>
      </div>
      <div className='flex flex-col gap-4 md:hidden '>
        <div>
          <Menu className={`text-white cursor-pointer ${menu ? "hidden" : "block"}`} onClick={() => setMenu(true)} />
        </div>
        <div>
          <MenuHamberg menu={menu} setMenu={setMenu} />
        </div>
      </div>

    </div>
  )
}

export default Navbar
