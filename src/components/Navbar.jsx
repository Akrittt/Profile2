import React, { useState } from 'react'
import image from "../assets/logo-white.png"
import { Menu, X } from "lucide-react"; 
import pdf from "../assets/Akrit-Gupta.pdf"

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    return (
    <>
    <nav className='bg-nav text-orange-50 flex justify-between items-center w-full h-16 px-8 fixed  shadow-2xl shadow-shadow z-50'>
        <div id="name + logo" className='flex justify-start items-center'>
            <img src={image} alt="logo"
            className='h-7 ' />
            <p className='font-extralight text-lg font-[lattobold]'>Akrit Gupta</p>
        </div>

        <div className="sm:hidden">
            <button onClick={toggleMenu} className="text-orange-50 focus:outline-none">
                {menuOpen ? <X size={28} /> : <Menu size={28}  />}
            </button>
        </div>
        
        <ul className='sm:flex gap-x-5 text-lg hidden font-[lattomedium] '>
                <li>
                    <a href="#home"><span className='text-purple-800'>#</span>home</a>
                </li>
                <li>
                    <a href="#about-me"><span className='text-purple-800'>#</span>about-me</a>
                </li>
                <li>
                    <a href="#projects"><span className='text-purple-800'>#</span>projects</a>
                </li>
                <li>
                    <a href="#skills" ><span className='text-purple-800'>#</span>skills</a>
                </li>
                <li>
                    <a
                    href={pdf}
                    download
                    >
                    <span className='text-purple-800'>#</span>Download Resume
                    </a>
                </li>
                
        </ul>
    

        {menuOpen && (
        <div className='sm:hidden flex flex-col gap-x-2'>
            <a href="" className='font-[hello5] text-orange-50'><span className='text-purple-800 '>#</span>home</a>
            <a href="" className='font-[hello5] text-orange-50'><span className='text-purple-800'>#</span>about-me</a>       
            <a href="" className='font-[hello5] text-orange-50'><span className='text-purple-800'>#</span>projects</a>
            <a href="" className='font-[hello5] text-orange-50'><span className='text-purple-800'>#</span>contact-me</a>  
        </div>
        )}

        
    </nav>
  
    </>
    )
}