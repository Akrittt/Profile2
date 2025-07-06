import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";

const projects = [
  
  {
    title: "🌍 Travel Itinerary Generator",
    description:
      "Developed a Travel Itinerary Generator that customizes plans based on user preferences, significantly boosting engagement. It features real-time weather updates, interactive maps, and a guide-matching system, enhancing the overall user experience. I also integrated real-time language translation supporting multiple languages, improving accessibility for diverse users. Additionally, I optimized API performance to ensure seamless and efficient interactions.",
    github: "https://github.com/Akrittt/Travel_Itinerary_Generator",
    live: "https://travelogue-hackathon.netlify.app/",
    tech: ["React", "API Integration", "Tailwind CSS", "JavaScript"],
    stats: [
      { label: "Boosting Engagement", value: 40, suffix: "%" },
      { label: "Enhancing User Experience", value: 35, suffix: "%" },
      { label: "Language Translation Supporting", value: 20, suffix: "+" },
    ],
  },
  {
    title: "🔢 Bubble Sort Visualizer",
    description:
      "Created an interactive Bubble Sort Visualizer that effectively improves comprehension through dynamic visual representation. The application supports large datasets with optimized performance, reducing lag and enhancing responsiveness. It includes user-controlled customization options for sorting speed and array size, providing a more engaging and tailored experience. Additionally, asynchronous rendering was implemented to improve computation efficiency and overall user satisfaction.",
    github: "https://github.com/yourusername/bubble-sort-visualizer",
    live: "https://splendorous-rugelach-3b5436.netlify.app/",
    tech: ["React", "JavaScript", "CSS"],
    stats: [
      { label: "Reducing Lag By", value: 25, suffix: "%" },
      { label: "Boosting Interactivity", value: 35, suffix: "%" },
      { label: "Cutting Computation Time", value: 20, suffix: "%" },
    ],
  },
  {
    title: "🐍 Snake Game",
    description:
      "Developed a classic browser-based Snake Game using HTML5, CSS3, and Vanilla JavaScript. The game features real-time movement logic, collision detection, and dynamic score tracking for an immersive experience. Integrated sound effects for actions like movement, food consumption, and collisions to enhance gameplay. Deployed on Vercel with a responsive design and optimized rendering for smooth, enjoyable performance.",
    github: "https://github.com/Akrittt/Snake_Game",
    live: "https://snake-game-nine-sooty.vercel.app/",
    tech: ["HTML5", "CSS3", "Vanilla JavaScript"],
    stats: [
      { label: "Reducing Lag By", value: 25, suffix: "%" },
      { label: "Boosting Interactivity", value: 35, suffix: "%" },
      { label: "Cutting Computation Time", value: 20, suffix: "%" },
    ],
  },
];

const Works = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className=" p-5 md:p-15 mt-12"
    >
        <div className="flex items-center pt-10 pb-18 ">
            <h1 className='text-4xl font-[lattobold] font-bold mr-5'><span className='text-4xl text-purple-800 '>/</span>projects</h1>
            <div className='h-0.5 bg-purple-700 w-full md:flex-grow'></div>
            <div className="w-30 md:w-80 hidden sm:block"></div>
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-4 sm:p-6 shadow-2xl shadow-black bg-card rounded-4xl transition-transform hover:scale-105"
          >
            <h2 className="text-lg sm:text-2xl font-[lattobold] mt-3    ">
              {project.title}
            </h2>
            <p className=" text-sm sm:text-base font-[lattolight] mt-8">
              {project.description.substring(0,200)}...
            </p>
            <button
              className="mt-8 font-[lattolight] px-5 py-4 bg-fuchsia-950 rounded-4xl hover:bg-purple-950  transition-colors text-sm sm:text-base"
              onClick={() => setSelectedProject(project)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* Modal for project details */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center backdrop-blur bg-opacity-40 z-50 p-4 shadow-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gradient-to-br from-nav to-fuchsia-950 rounded-2xl p-6 sm:p-8 max-w-3xl w-full relative overflow-y-auto hide-scrollbar max-h-full"
              initial={{ scale: 1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1, opacity: 0 }}
              
            >
              <button
                className="absolute top-4 right-4 font-bold text-2xl"
                onClick={() => setSelectedProject(null)}
              >
                &times;
              </button>
              <div className="flex flex-col md:flex-row gap-4 text-left">
                <div className="flex-1">
                  <h3 className="text-2xl sm:text-3xl font-bold font-[lattobold] mb-5">
                    {selectedProject.title}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base font-[lattomedium] mr-4">
                    {selectedProject.description}
                  </p>
                <div className="mt-4 flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech, i) => (
                      <motion.div
                        key={i}
                        className="relative group p-2  rounded-lg  cursor-pointer"
                        whileHover={{ scale: 1.1 }}
                      >
                        <div className="bg-purple-800 px-4 py-2 rounded-2xl text-xs sm:text-sm font-[lattomedium]">
                          {tech}
                        </div>
                        <motion.div
                          className="absolute bottom-[-24px] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs rounded px-2 py-1"
                          transition={{ duration: 0.3 }}
                        >
                          {tech}
                        </motion.div>
                      </motion.div>
                    ))}
                </div>
                  {selectedProject.stats && (
                    <div className="mt-6">
                      <h4 className="text-xl sm:text-2xl font-bold text-center mb-5 font-[lattobold]">
                        Key Metrics
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {selectedProject.stats.map((stat, i) => (
                          <div key={i} className="text-center">
                            <p className="text-lg sm:text-2xl font-bold font-[lattomedium]">
                              <CountUp
                                end={stat.value}
                                duration={2}
                                suffix={stat.suffix}
                              />
                            </p>
                            <p className="text-xs sm:text-base font-[lattomedium]">
                              {stat.label}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <div className="mt-4 md:mt-0 flex flex-col gap-4 justify-center">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-800 text-white px-4 py-2 rounded hover:bg-red-950 transition-colors text-sm sm:text-base text-center font-[lattomedium]"
                  >
                    GitHub
                  </a>
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-violet-800 text-white px-4 py-2 rounded hover:bg-violet-950 transition-colors text-sm sm:text-base text-center font-[lattomedium]"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Works;