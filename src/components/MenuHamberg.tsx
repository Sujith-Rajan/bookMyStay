import { X } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type MenuHambergProps = {
    menu: boolean,
    setMenu: (valu:boolean) => void,
}

const MenuHamberg: React.FC<MenuHambergProps> = ({ menu, setMenu }) => {
    if (!menu) return null
    return (
        <div className='fixed inset-0 right-0 bg-black bg-opacity-80 text-white flex flex-col gap-6 p-6 transition-transform duration-300 ease-in-out'>
            <button
                className="absolute top-4 right-4"
                onClick={() => setMenu(false)}
            >
                <X size={28} />
            </button>
            <nav className="flex flex-col gap-4 mt-12 text-lg ">
                <Link href="/" onClick={() => setMenu(false)} className='hover:bg-gray-50 hover:text-black transition p-2' >Home</Link>
                <Link href="/" onClick={() => setMenu(false)} className='hover:bg-gray-50 hover:text-black transition p-2'>About Us</Link>
                <Link href="/" onClick={() => setMenu(false)} className='hover:bg-gray-50 hover:text-black transition p-2'>Facilities</Link>
                <Link href="/" onClick={() => setMenu(false)} className='hover:bg-gray-50 hover:text-black transition p-2'>Contact Us</Link>
            </nav>
        </div>
    )
}

export default MenuHamberg
