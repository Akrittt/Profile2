import { Reorder, useDragControls } from "framer-motion";
import { Code, Database, Layers } from 'lucide-react';
import { useState } from "react";
import { motion } from "framer-motion";
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaGitAlt,
    FaGithub,
    FaAws
} from "react-icons/fa";

import { 
    SiTailwindcss, 
    SiMongodb, 
    SiSpringboot,
    SiPostman } from "react-icons/si";

export default function Skills() {
    const controls = useDragControls()

    const [frontendSkills, setFrontendSkills] = useState([
        { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
        { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> }
    ]);

    const [learningSkills, setLearningSkills] = useState([
        { name: "Spring Boot", icon: <SiSpringboot className="text-green-600" /> },
        { name: "Mongodb", icon: <SiMongodb className="text-green-900" /> },
        { name: "AWS", icon: <FaAws /> }

    ]);

    const [toolsSkills, setToolsSkills] = useState([
        { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
        { name: "GitHub", icon: <FaGithub className="text-black" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-700" /> },
    ]);

    // Animation
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    // Animation
    const fromLeftVariant = {
        hidden: { x: -100, opacity: 0 },
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

    // Animation 
    const fromBottomVariant = {
        hidden: { y: 100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 80,
                damping: 15,
            },
        },
    };

    // Animation 
    const fromRightVariant = {
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
        <div id="skills" className='p-5 md:p-15 pt-25 mb-10'>
            <div className="flex items-center pb-10 ">
                <h1 className='text-4xl font-[lattobold] font-bold w-35 pr-5'><span className='text-4xl text-purple-800 '>/</span>skills</h1>
                <div className='h-0.5 bg-purple-700 w-full flex-grow hidden sm:block'></div>
                <p className="text-sm text-purple-200 italic ml-10 w-60">
                    *Drag to reorder <br />(Framer Motion powered)
                </p>
            </div>


            <motion.div id="container"
                variants={containerVariants}
                 initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                className="flex flex-col sm:flex-row gap-x-10 xl:gap-x-0">

                <div className="basis-1/2 xl:basis-2/5" id="left">

                    {/*Frontend skills */}
                    <motion.div
                        variants={fromLeftVariant}
                        className=" max-w-sm mx-auto xl:mx-15 mt-5 bg-card border-purple-950 border-1 rounded-3xl shadow-2xl/50 p-10 xl:basis-1/3">
                        <div className="flex gap-x-4 text-center justify-center mb-7">
                            <Code className="size-11 text-pink-900" />
                            <h2 className="text-4xl font-bold text-center font-[lattobold] bg-gradient-to-r from-heading to-white text-transparent bg-clip-text">
                                Frontend
                            </h2>
                        </div>

                        <Reorder.Group
                            axis="y"
                            values={frontendSkills}
                            onReorder={setFrontendSkills}
                            className="space-y-5"
                        >
                            {frontendSkills.map((skill) => (
                                <Reorder.Item
                                    key={skill.name}
                                    value={skill}
                                    whileDrag={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="flex items-center gap-3 p-3 rounded-lg shadow-2xl cursor-grab bg-subcard "
                                >
                                    <div className="text-2xl">{skill.icon}</div>
                                    <span className="font-[lattobold] ">{skill.name}</span>
                                </Reorder.Item>
                            ))}
                        </Reorder.Group>
                    </motion.div>
                </div>

                <div id="right" className="basis-1/2 xl:flex xl:flex-row-reverse xl:basis-3/5 xl:gap-x-15">

                    {/*Backend skills */}
                    <motion.div
                        variants={fromRightVariant}
                        className="max-w-sm mx-auto mt-5 bg-card rounded-3xl shadow-2xl/50 p-10 border-purple-950 border-1 xl:basis-1/2 xl:justify-end xl:content-start grow xl:mb-50">
                        <div className="flex gap-x-4 text-center justify-center mb-7">
                            <Database className="size-11 text-blue-900" />
                            <h2 className="text-4xl font-bold text-center font-[lattobold] bg-gradient-to-l from-heading to-white text-transparent bg-clip-text">
                                Backend
                            </h2>
                        </div>

                        <Reorder.Group
                            axis="y"
                            values={learningSkills}
                            onReorder={setLearningSkills}
                            className="space-y-3"
                        >
                            {learningSkills.map((skill) => (
                                <Reorder.Item
                                    key={skill.name}
                                    value={skill}
                                    whileDrag={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="flex items-center gap-3 p-3 rounded-lg shadow-2xl cursor-grab bg-subcard"
                                >
                                    <div className="text-2xl">{skill.icon}</div>
                                    <span className="font-[lattomedium]">{skill.name}</span>
                                </Reorder.Item>
                            ))}
                        </Reorder.Group>
                    </motion.div>

                    {/*tools */}
                    <motion.div
                        variants={fromBottomVariant}
                        className=" max-w-sm mx-auto mt-5 bg-card border-purple-950 border-1 rounded-3xl shadow-2xl/50 p-10 grow content-end xl:mt-60 xl:basis-1/2">
                        <div className="flex gap-x-4 text-center justify-center mb-7">
                            <Layers className="size-11 text-green-900" />
                            <h2 className="text-4xl font-bold text-center font-[lattobold] bg-gradient-to-l from-heading to-white text-transparent bg-clip-text">
                                Tools
                            </h2>
                        </div>


                        <Reorder.Group
                            axis="y"
                            values={toolsSkills}
                            onReorder={setToolsSkills}
                            className="space-y-3"
                        >
                            {toolsSkills.map((skill) => (
                                <Reorder.Item
                                    key={skill.name}
                                    value={skill}
                                    whileDrag={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="flex items-center gap-3 p-3 rounded-md shadow cursor-grab bg-subcard "
                                >
                                    <div className="text-2xl">{skill.icon}</div>
                                    <span className="font-[lattomedium]">{skill.name}</span>
                                </Reorder.Item>
                            ))}
                        </Reorder.Group>
                    </motion.div>

                </div>
            </motion.div>

        </div>
    )
}
