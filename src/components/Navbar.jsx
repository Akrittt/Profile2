import React, { useState } from 'react'
import image from "../assets/logo-white.png"
import { Menu, X } from "lucide-react";
import pdf from "../assets/Akrit-Gupta.pdf"

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    const downloadResumeFromAPI = async () => {
        try {
            const response = await fetch('https://portfolio-backend-9boe.onrender.com/api/resume/download', {
                method: 'GET',
                headers: {
                    'Accept': 'application/pdf',
                },
            });

            if (response.ok) {
                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = 'Akrit_Gupta_Resume.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                window.URL.revokeObjectURL(url);
            } else {
                console.error('Failed to download resume');
            }
        } catch (error) {
            console.error('Error downloading resume:', error);
        }
    };

    return (
        <>
            <nav className='bg-nav text-orange-50 flex justify-between items-center w-full h-16 px-5 md:px-15 fixed  shadow-2xl shadow-shadow z-50'>
                <div id="name + logo" className='flex justify-start items-center gap-x-2'>
                    <img src={image} alt="logo"
                        className='h-7 ' />
                    <p className='font-extralight text-lg font-[lattobold]'>Akrit Gupta</p>
                </div>

                <ul className='md:flex items-center gap-x-5 text-lg hidden font-[lattomedium] '>
                    <li>
                        <a href="#home"><span className='text-purple-800'>#</span>home</a>
                    </li>
                    <li>
                        <a href="#projects"><span className='text-purple-800'>#</span>projects</a>
                    </li>
                    <li>
                        <a href="#about-me"><span className='text-purple-800'>#</span>about-me</a>
                    </li>
                    <li>
                        <a href="#skills" ><span className='text-purple-800'>#</span>skills</a>
                    </li>
                    <li>
                        <button
                            onClick={downloadResumeFromAPI}
                            className="bg-gradient-to-r from-purple-800 to-pink-800 hover:from-purple-700 hover:to-pink-700 text-white py-1 px-6 rounded-xl transition-all duration-100 transform hover:scale-101 shadow-xl flex items-center justify-center space-x-3 mx-auto"
                        >
                            <span className="font-semi-bold">My Resume</span>
                        </button>
                    </li>

                </ul>


                <div className='flex md:hidden bg-nav p-2  border-1 border-purple-800 rounded-2xl'>
                    {menuOpen && (
                        <div className='md:hidden flex flex-col h-full  py-4 pl-3 mt-30'>
                            <a href="#home" className='font-[lattomedium] text-orange-50 text-lg'><span className='text-purple-800 '>#</span>home</a>
                            <a href="#projects" className='font-[lattomedium] text-orange-50 text-lg'><span className='text-purple-800'>#</span>projects</a>
                            <a href="#about-me" className='font-[lattomedium] text-orange-50 text-lg'><span className='text-purple-800'>#</span>about-me</a>
                            <a href="#skills" className='font-[lattomedium] text-orange-50 text-lg'><span className='text-purple-800'>#</span>skills</a>
                            <button
                                onClick={downloadResumeFromAPI}
                                className="bg-gradient-to-r from-purple-800 to-pink-800 hover:from-purple-700 hover:to-pink-700 text-white py-1 px-6 rounded-xl transition-all duration-100 transform hover:scale-101 shadow-xl flex items-center justify-center space-x-3 mx-auto"
                            >
                                <span className="font-semi-bold">My Resume</span>
                            </button>
                        </div>
                    )}

                    <button onClick={toggleMenu} className="text-orange-50 focus:outline-none">
                        {menuOpen ? <X size={25} className=' ' /> : <Menu size={28} />}
                    </button>

                </div>

            </nav>

        </>
    )
}
