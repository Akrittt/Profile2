import React from 'react'
import Image from "../assets/Image2.png"

export default function AboutMe() {
  return (
    <div id='about-me' className='p-5 md:p-15  md:flex md:flex-col lg:flex-row '>
        
      <div className='lg:pr-25 basis-2/3'> 
        <div className='flex items-center pb-10 '>
        <h1 className='text-4xl font-[lattobold] font-bold mr-5 w-65 '><span className='text-4xl text-purple-700'>/</span>about-me</h1>
        <div className='h-0.5  bg-purple-700 sm:w-full md:flex-grow '></div>
      </div>
      <div className=''>
            <p className='font-[lattolight] text-md mb-5 text-lg'>Hola, I’m Akrit !</p>
            <p className='font-[lattolight] text-md mb-5 text-lg'>
                I'm a self-taught MERN Stack developer and a final-year B.Tech in Computer Science Engineering with a minor in AI & ML student. I love turning ideas into clean and functional web applications—code that not only works but feels right. 
                I believe that great code is not just about logic—it’s about crafting seamless experiences that make people’s lives easier (and maybe a bit cooler too).<br/><br/>I love building full-stack experiences using React, Node.js, MongoDB, and Express, and I often enhance UI with Framer Motion, Tailwind CSS, and other modern tools. Recently, I’ve been exploring AI integrations and interactive UI dynamics—like animated reordering of skill cards (yep, you're seeing that on this page).
            </p>
            <p>

            </p>
            <p className='font-[lattolight] text-md mb-5 text-lg'>
                When I’m not debugging or building full-stack magic, you’ll probably find me exploring new tech tools or making chai my co-pilot.
            </p>
            <p className='font-[lattolight] text-md text-lg'>
                Let’s build something great together!
            </p>
        </div>
      </div>

        <div className='basis-1/3 justify-center items-center hidden md:flex flex-col '>
            <img src={Image} alt="image"
                className='h-110 w-80 '  
            />
            <div className='h-0.5 bg-purple-700 w-75 xl:w-90'></div>
        </div>
      
    </div>
  )
}
