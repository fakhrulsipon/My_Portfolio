
import { FaJsSquare, FaNodeJs, FaReact } from "react-icons/fa";
import { Link } from "react-router";




const Projects = () => {
    return (
        <div className="px-4 md:px-8 lg:px-20 mt-8 md:mt-12 lg:mt-16">
            <h1 className="text-white text-3xl md:text-4xl font-medium text-center mb-10">My Projects</h1>
            <div className="lg:flex justify-center gap-6 items-center">
                {/* project-1 */}
                <div
                    className="relative bg-gray-800/80 h-[420px] lg:h-[420px] md:h-[380px] rounded-3xl mb-4 shadow-xl hover:shadow-green-300 border border-green-400 transition-all duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-[1.03] overflow-hidden backdrop-blur-md"
                >
                    {/* Gradient border glow effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-tr from-green-300 via-white to-green-300 opacity-20 blur-lg rounded-3xl pointer-events-none"></div>

                    <img
                        src='https://i.postimg.cc/fTqPCXb1/Chat-Orbit.png'
                        alt={`${name} project`}
                        className="w-full h-52 object-cover transition-transform duration-500 hover:scale-105 rounded-t-3xl"
                    />

                    <div className="relative z-10 p-6 bg-gradient-to-br from-gray-900/80 via-gray-800/70 to-gray-900/60">
                        <h2 className="text-2xl font-black text-green-700 mb-4 tracking-wider">
                            ChatOrbit
                        </h2>

                        {/* Tools / Tech Icons */}
                        <div className="flex flex-wrap gap-2 mb-4 text-green-700">
                            <p className="flex items-center">○ <span className="font-semibold">React</span></p>
                            <p className="flex items-center">○ <span className="font-semibold">JavaScript</span></p>
                            <p className="flex items-center">○ <span className="font-semibold">Node</span></p>
                            <p className="flex items-center">○ <span className="font-semibold">Express</span></p>
                            <p className="flex items-center">○ <span className="font-semibold">Tailwind</span></p>
                        </div>


                        <Link to={'/chatorbit'}>
                            <button
                                className="cursor-pointer bg-green-700 hover:bg-green-800 text-white py-2 px-5 rounded-lg font-semibold transition-colors"
                            >
                                View Details
                            </button>
                        </Link>
                    </div>
                </div>

                {/* project-2 */}
                <div
                    className="relative bg-gray-800/80 mb-4 h-[420px] lg:h-[420px] md:h-[380px] rounded-3xl shadow-xl hover:shadow-green-300 border border-green-400 transition-all duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-[1.03] overflow-hidden backdrop-blur-md"
                >
                    {/* Gradient border glow effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-tr from-green-300 via-white to-green-300 opacity-20 blur-lg rounded-3xl pointer-events-none"></div>

                    <img
                        src='https://i.postimg.cc/6qgd299b/Garden-Hub.png'
                        alt={`${name} project`}
                        className="w-full h-52 object-cover transition-transform duration-500 hover:scale-105 rounded-t-3xl"
                    />

                    <div className="relative z-10 p-6 bg-gradient-to-br from-gray-900/80 via-gray-800/70 to-gray-900/60">
                        <h2 className="text-2xl font-black text-green-700 mb-4 tracking-wider">
                            GardeniaHub
                        </h2>

                        {/* Tools / Tech Icons */}
                        <div className="flex flex-wrap gap-2 mb-4 text-green-700">
                            <p className="flex items-center">○ <span className="font-semibold">React</span></p>
                            <p className="flex items-center">○ <span className="font-semibold">JavaScript</span></p>
                            <p className="flex items-center">○ <span className="font-semibold">Node</span></p>
                            <p className="flex items-center">○ <span className="font-semibold">Express</span></p>
                            <p className="flex items-center">○ <span className="font-semibold">Tailwind</span></p>
                        </div>

                        <Link to={'/gardeniahub'}>
                            <button
                                className="cursor-pointer bg-green-700 hover:bg-green-800 text-white py-2 px-5 rounded-lg font-semibold transition-colors"
                            >
                                View Details
                            </button>
                        </Link>
                    </div>
                </div>

                
                {/* project-3 */}
                <div
                    className="relative mb-4 bg-gray-800/80 h-[420px] lg:h-[420px] md:h-[380px] rounded-3xl shadow-xl hover:shadow-green-300 border border-green-400 transition-all duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-[1.03] overflow-hidden backdrop-blur-md"
                >
                    {/* Gradient border glow effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-tr from-green-300 via-white to-green-300 opacity-20 blur-lg rounded-3xl pointer-events-none"></div>

                    <img
                        src='https://i.postimg.cc/mDVjDfzK/EduPath.png'
                        alt={`${name} project`}
                        className="w-full h-52 object-cover transition-transform duration-500 hover:scale-105 rounded-t-3xl"
                    />

                    <div className="relative z-10 p-6 bg-gradient-to-br from-gray-900/80 via-gray-800/70 to-gray-900/60">
                        <h2 className="text-2xl font-black text-green-700  mb-4 tracking-wider">
                            Edupath
                        </h2>

                        {/* Tools / Tech Icons */}
                        <div className="flex flex-wrap gap-2 mb-4 text-green-700">
                            <p className="flex items-center">○ <span className="font-semibold">React</span></p>
                            <p className="flex items-center">○ <span className="font-semibold">JavaScript</span></p>
                            <p className="flex items-center">○ <span className="font-semibold">Node</span></p>
                            <p className="flex items-center">○ <span className="font-semibold">Express</span></p>
                            <p className="flex items-center">○ <span className="font-semibold">Tailwind</span></p>
                        </div>

                        <Link to={'/course-management'}>
                            <button
                                className="cursor-pointer bg-green-700 hover:bg-green-800 text-white py-2 px-5 rounded-lg font-semibold transition-colors"
                            >
                                View Details
                            </button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Projects;
