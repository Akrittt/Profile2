import React from 'react'
import Image from "../assets/Image2.png"
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';

export default function AboutMe() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };
  return (
    <div id='about-me' className='p-5 md:p-15  '>
      <motion.div
        className="w-full mx-auto flex flex-col lg:flex-row"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        
      <div className='lg:pr-25 basis-2/3'>
        <motion.div variants={itemVariants} className="flex items-center gap-4 mb-10">
          <h1 className='text-4xl font-[lattobold] font-bold mr-5 w-65 '><span className='text-4xl text-purple-700'>/</span>about-me</h1>
          <div className='h-0.5  bg-purple-700 sm:w-full md:flex-grow '></div>
        </motion.div>
        
        
        <motion.div variants={containerVariants}>
            <p className='font-[lattolight] text-md mb-5 text-lg'>Hola, I’m Akrit !</p>
            <p className='font-[lattolight] text-md mb-5 text-lg'>
                I'm a self-taught Full-Stack Developer and a final-year B.Tech in Computer Science Engineering with a minor in AI & ML student. I love turning ideas into clean and functional web applications—code that not only works but feels right. 
                I believe that great code is not just about logic—it’s about crafting seamless experiences that make people’s lives easier (and maybe a bit cooler too).<br/><br/>I love building full-stack experiences using React, MongoDB and Spring Boot, and I often enhance UI with Framer Motion, Tailwind CSS, and other modern tools. Recently, I’ve been exploring AI integrations and interactive UI dynamics—like animated reordering of skill cards (yep, you're seeing that on this page).
            </p>
            <p className='font-[lattolight] text-md mb-5 text-lg'>
                When I’m not debugging or building full-stack magic, you’ll probably find me exploring new tech tools or making chai my co-pilot.
            </p>
            <p className='font-[lattolight] text-md text-lg'>
                Let’s build something great together!
            </p>
        </motion.div>
      </div>

        <motion.div variants={itemVariants} className='basis-1/3 flex justify-center items-center mt-10 '>
        <motion.div 
              className="w-64 h-64 md:w-80 md:h-105 rounded-full overflow-hidden shadow-2xl shadow-purple-900/50 border-2 border-purple-700 mb-8"
              whileHover={{ scale: 1.05, rotate: 3 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img src={Image}
                className='h-full w-full object-cover' 
                alt="Akrit - Full-Stack Developer"  
            />
            </motion.div>
            
  
        </motion.div>
      </motion.div>
    </div>
  )
}
