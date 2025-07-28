import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";

const Works = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:8080/api/projects');

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setProjects(data);
        setError(null);


      } catch (err) {
        // If an error occurs, update the error state
        console.error('Failed to fetch projects:', err);
        setError('Failed to load projects. Please make sure the backend server is running.');
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section id="projects" className="p-5 md:p-15 mt-12 text-center text-white">
        <h2 className="text-2xl">Loading Projects...</h2>
      </section>
    );
  }
  if (error) {
    return (
      <section id="projects" className="p-5 md:p-15 mt-12 text-center text-red-500">
        <h2 className="text-2xl">Error</h2>
        <p>{error}</p>
      </section>
    );
  }

  return (
    <section id="projects" className=" p-5 md:p-15 mt-12">

      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-5">
          <h1 className="text-4xl font-bold text-white mb-4"><span className='text-4xl text-purple-700 mr-1'>/</span>
            my- <span className="text-purple-400">projects</span>
          </h1>
          <div className='h-0.5 bg-purple-700 mb-2 flex-grow hidden sm:block'></div>
        </div>
        <p className="text-slate-400 text-xl mx-auto text-">
          Explore my portfolio of innovative solutions and creative implementations
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-4 sm:p-6 shadow-2xl shadow-black bg-card border-1 border-purple-950 rounded-4xl transition-transform hover:scale-105"
          >
            <h2 className="text-lg sm:text-2xl font-[lattobold] mt-3    ">
              {project.title}
            </h2>
            <p className=" text-sm sm:text-base font-[lattolight] mt-8">
              {project.description.substring(0, 200)}...
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