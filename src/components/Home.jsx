import React from 'react'
import Image from "../assets/profile.png"

export default function Home() {
  return (
    <div id='home' className='flex flex-col  pt-22 '>
        <div className='flex flex-col items-center md:flex-row '>
            <div className='basis-2/3 flex flex-col justify-center pl-15 gap-y-3 '>
                <h1 className='font-[lattoblack] text-5xl '>Hola, I'm Akrit<br/> <span className=' bg-heading text-transparent bg-clip-text font-bold text-5xl '>MERN Stack Developer</span> by day, bug squasher by night.  </h1>
                <p className='font-[lattomedium] text-xl text-gray-400'>I build sleek, responsive websites where code meets creativity (and chai)</p>
                <button className='flex-start font-[lattomedium] text-md border-2 border-purple-950 w-fit px-5 py-2 hover:bg-purple-700 hover:text-black'>Contact me!!</button>
            </div>
            <div className='basis-1/3'>
                <img src={Image} alt="image" className='h-100 pr-10 2xl:pl-50' />
            </div>
            

        </div>
        <div className='flex flex-col text-left px-15 items-end '>
            <p className='border-1 w-fit px-4 py-3 pb-5 text-md border-gray-500 font-[lattomedium] before:content-["“"] after:content-["”"] before:text-3xl after:text-3xl before:mr-1 after:ml-1'> 99 little bugs in the code, take one down, patch it around… 127 bugs in the code </p>
            <p className='border-x-1 border-b-1 w-fit px-2 pr-2 py-2 text-sm border-gray-500 font-[lattomedium]'> – Code poet, circa 2AM</p>
        </div>
  
    </div>
)
}
