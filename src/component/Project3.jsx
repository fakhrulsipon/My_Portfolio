import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Project3 = () => {
    return (
        <div>
            {/* project-1 */}
            <div
                className="relative bg-gray-800/80 rounded-3xl mb-4 shadow-xl hover:shadow-green-300 border border-green-400 transition-all duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-[1.03] overflow-hidden backdrop-blur-md mt-10"
            >
                {/* Gradient border glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-tr from-green-300 via-white to-green-300 opacity-20 blur-lg rounded-3xl pointer-events-none"></div>

                <div className="xl:flex justify-center items-center">
                    <div className="w-full h-full">
                        <img
                            src='https://i.postimg.cc/6qgd299b/Garden-Hub.png'
                            alt={`${name} project`}
                            className="w-full h-full object-cover transition-transform duration-500"
                        />
                    </div>

                    <div className="w-full h-full">
                        <div className="relative z-10 p-6">
                            <h2 className="text-2xl font-semibold text-white mb-4 tracking-wider">
                                <span className="text-2xl font-bold">GardeniaHub</span> - Gardening Community Hub
                            </h2>

                            <p className="text-white">GardeniaHub is a simple, user-friendly platform where gardening lovers share tips, join events, and connect with others.</p>

                            {/* Tools / Tech Icons */}
                            <div className="flex flex-wrap gap-3 mb-4 mt-4">
                                {["React", "JavaScript", "Node", "Express", "Tailwind"].map((tech, index) => (
                                    <button
                                        key={index}
                                        className="px-3 py-1 rounded-lg text-sm sm:text-base font-medium text-white 
                 border-2 border-transparent bg-gradient-to-r from-green-400 to-blue-500 
                 bg-clip-border hover:from-blue-500 hover:to-green-400 
                 transition-all duration-300 ease-in-out"
                                    >
                                        {tech}
                                    </button>
                                ))}
                            </div>


                            <div className="flex gap-2 mt-6">
                                <div>
                                    {/* Live Site */}
                                    <a
                                        href="https://gardeniahub-auth.web.app/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="relative group"
                                    >
                                        <button className="flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-gray-900 to-gray-800 text-white font-semibold relative z-10">
                                            <FaExternalLinkAlt className="text-blue-400" /> Live
                                        </button>
                                        <span className="absolute inset-0 rounded-full blur-md opacity-75 group-hover:opacity-100 transition duration-300"></span>
                                    </a>
                                </div>

                                <div>
                                    {/* Client Repo */}
                                    <a
                                        href="https://github.com/fakhrulsipon/GardeniaHub-Client"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="relative group"
                                    >
                                        <button className="flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-gray-900 to-gray-800 text-white font-semibold relative z-10">
                                            <FaGithub className="text-pink-400" /> Client
                                        </button>
                                        <span className="absolute inset-0 rounded-full blur-md opacity-75 group-hover:opacity-100 transition duration-300"></span>
                                    </a>
                                </div>

                                <div>
                                    {/* Server Repo */}
                                    <a
                                        href="https://github.com/fakhrulsipon/gardeniaHub-Server"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="relative group"
                                    >
                                        <button className="flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-gray-900 to-gray-800 text-white font-semibold relative z-10">
                                            <FaGithub className="text-green-400" /> Server
                                        </button>
                                        <span className="absolute inset-0 rounded-full blur-md opacity-75 group-hover:opacity-100 transition duration-300"></span>
                                    </a>
                                </div>
                            </div>




                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Project3;