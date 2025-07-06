import { Reorder, useDragControls } from "framer-motion";
import { useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
} from "react-icons/si";

import { SiTailwindcss } from "react-icons/si";

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
        { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-700" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    ]);

    const [toolsSkills, setToolsSkills] = useState([
        { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
        { name: "GitHub", icon: <FaGithub className="text-black" /> },
    ]);
  return (
    <div id="skills" className='p-15 pt-25'>
      <div className="flex items-center pb-10 ">
            <h1 className='text-4xl font-[lattobold] font-bold w-35 pr-5'><span className='text-4xl text-purple-800 '>/</span>skills</h1>
            <div className='h-0.5 bg-purple-700 w-full flex-grow'></div>
            <p className="text-sm text-purple-200 italic ml-10 w-60">
  *             Drag to reorder <br/>(Framer Motion powered)
            </p>
        </div>

        
        <div id="container" className="flex flex-col sm:flex-row gap-x-10 xl:gap-x-0">
            <div className="basis-1/2" id="left">
                {/*Frontend skills */}
        <div className=" max-w-sm mx-auto xl:mx-15 mt-5 bg-card rounded-3xl shadow-2xl/50 p-10 xl:basis-1/3">
            <h2 className="text-4xl font-bold text-center mb-7 font-[lattobold] bg-gradient-to-l from-heading to-white text-transparent bg-clip-text">Frontend</h2>
        
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
        </div>
        </div>

        <div id="right" className="basis-1/2 xl:flex xl:flex-row-reverse xl:basis-2/3 xl:gap-x-15">
        {/*learning skills */}
        <div className="max-w-sm mx-auto mt-5 bg-card rounded-3xl shadow-2xl/50 p-10 xl:justify-end xl:content-start grow xl:mb-38">
            <h2 className="text-4xl font-bold text-center mb-7 font-[lattobold] bg-gradient-to-l from-heading to-white text-transparent bg-clip-text">Learning</h2>
        
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
        </div>

        {/*tools */}
        <div className=" max-w-sm mx-auto mt-5 bg-card rounded-3xl shadow-2xl/50 p-10 grow content-end xl:mt-60">
            <h2 className="text-4xl font-bold text-center mb-7 font-[lattobold] bg-gradient-to-l from-heading to-white text-transparent bg-clip-text">Tools</h2>
        
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
                className="flex items-center gap-3 p-3 rounded-md shadow cursor-grab bg-subcard"
            >
                <div className="text-2xl">{skill.icon}</div>
                <span className="font-[lattomedium]">{skill.name}</span>
            </Reorder.Item>
            ))}
            </Reorder.Group>
        </div>
        
        </div>
        </div>

    </div>
  )
}
