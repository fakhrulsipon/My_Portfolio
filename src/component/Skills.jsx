import React from "react";
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaFigma,
    FaDatabase,
    FaLock,
    FaCode,
    FaCogs,
    FaPaperPlane
} from "react-icons/fa";

const Skills = () => {
    const frontendSkills = [
        { name: "HTML", icon: <FaHtml5 />, color: "bg-orange-500" },
        { name: "CSS", icon: <FaCss3Alt />, color: "bg-blue-500" },
        { name: "JavaScript", icon: <FaJs />, color: "bg-yellow-400" },
        { name: "React", icon: <FaReact />, color: "bg-cyan-400" },
        { name: "Tailwind CSS", icon: <FaCss3Alt />, color: "bg-teal-400" },
    ];

    const backendSkills = [
        { name: "Node.js", icon: <FaNodeJs />, color: "bg-green-500" },
        { name: "Express.js", icon: <FaCogs />, color: "bg-gray-500" },
        { name: "MongoDB", icon: <FaDatabase />, color: "bg-green-600" },
        { name: "JWT Auth", icon: <FaLock />, color: "bg-purple-500" },
    ];

    const toolsSkills = [
        { name: "Git & GitHub", icon: <FaGitAlt />, color: "bg-orange-600" },
        { name: "VS Code", icon: <FaCode />, color: "bg-blue-600" },
        { name: "Postman", icon: <FaPaperPlane />, color: "bg-orange-400" },
        { name: "Figma", icon: <FaFigma />, color: "bg-pink-500" },
    ];

    const renderSkills = (skillsArray) => (
        <div className="flex flex-wrap gap-8 justify-center">
            {skillsArray.map((skill, index) => (
                <div key={index} className="flex flex-col items-center group">
                    {/* Icon with background color */}
                    <div
                        className={`${skill.color} w-20 h-20 flex items-center justify-center rounded-full text-white text-4xl group-hover:scale-110 transition-transform duration-300`}
                    >
                        {skill.icon}
                    </div>
                    {/* Name */}
                    <span className="mt-3 text-white font-medium">{skill.name}</span>
                </div>
            ))}
        </div>
    );

    return (
        <div className="px-4 md:px-8 lg:px-20 mt-8 md:mt-12 lg:mt-16">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-medium text-center text-white mb-2">
                    My Skills
                </h2>
                <p className="text-gray-400 font-medium text-center mb-10">
                    Each skill is a part of my learning journey — with them, I build not just projects, but dreams.
                </p>

                {/* Frontend */}
                <div className="mb-12">
                    <h3 className="text-2xl font-medium text-white mb-6 text-center">
                        Frontend
                    </h3>
                    {renderSkills(frontendSkills)}
                </div>

                {/* Backend */}
                <div className="mb-12">
                    <h3 className="text-2xl font-medium text-white mb-6 text-center">
                        Backend
                    </h3>
                    {renderSkills(backendSkills)}
                </div>

                {/* Tools */}
                <div>
                    <h3 className="text-2xl font-medium text-white mb-6 text-center">
                        Tools
                    </h3>
                    {renderSkills(toolsSkills)}
                </div>
            </div>
        </div>
    );
};

export default Skills;
