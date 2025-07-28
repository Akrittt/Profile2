import React from 'react'
import Image from "../assets/profile.png"
import { motion } from 'framer-motion'

export default function Home() {
  // Parent container variants to orchestrate animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Animates children one after another
      },
    },
  };

  // Variants for text elements fading in from below
  const fadeInUp = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 120,
      },
    },
  };

  // Variants for the image sliding in from the right
  const fadeInRight = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 15,
      },
    },
  };

  return (
    <motion.div
      id='home'
      className='flex flex-col pt-28 pb-12 px-5 md:px-10'
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className='flex flex-col items-center md:flex-row '>
        {/* Left section */}
        <motion.div
          className='basis-full md:basis-2/3 flex flex-col justify-center gap-y-5 items-center text-center md:text-left md:items-start'
          variants={containerVariants}
        >
          <motion.h1
            className='font-extrabold font-[lattoblack] text-4xl sm:text-5xl lg:text-6xl text-white'
            variants={fadeInUp}
          >Hola, I'm Akrit<br /> <span className=' bg-heading text-transparent bg-clip-text font-bold'>MERN Stack Developer</span> by day, bug squasher by night.
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className='font-[lattomedium] text-xl pr-5 text-gray-400'>
            I build sleek, responsive websites where code meets creativity (and chai)
          </motion.p>

          <button
            className='flex-start font-[lattomedium] text-md border-2 border-purple-950 w-fit px-5 py-2 hover:bg-purple-700 hover:text-black'
            onClick={() => window.location.href = "#Contact-Me"}>Contact me!!
          </button>

        </motion.div>

        {/* Right section */}
        <motion.div className='basis-full md:basis-1/3 mt-10 md:mt-0' variants={fadeInRight}>
          <img src={Image} alt="Developer illustration" className='h-auto max-w-xs md:max-w-sm lg:mr-15 md:mr-13' />
        </motion.div>


      </div>

      {/* Quote section */}
      <motion.div
        variants={fadeInUp}
        className='flex flex-col text-left px-5 md:px-10 lg:px-15 items-end '>
        <p className='border-1 w-fit px-4 py-3 pb-5 text-md border-gray-500 font-[lattomedium] before:content-["“"] after:content-["”"] before:text-3xl after:text-3xl before:mr-1 after:ml-1'> 99 little bugs in the code, take one down, patch it around… 127 bugs in the code </p>
        <p className='border-x-1 border-b-1 w-fit px-2 pr-2 py-2 text-sm border-gray-500 font-[lattomedium]'> – Code poet, circa 2AM</p>
      </motion.div>

    </motion.div>
  )
}
