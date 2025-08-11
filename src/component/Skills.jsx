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
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "React", icon: <FaReact /> },
        { name: "Tailwind CSS", icon: <FaCss3Alt /> },
    ];

    const backendSkills = [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <FaCogs /> },
        { name: "MongoDB", icon: <FaDatabase /> },
        { name: "JWT Auth", icon: <FaLock /> },
    ];

    const toolsSkills = [
        { name: "Git & GitHub", icon: <FaGitAlt /> },
        { name: "VS Code", icon: <FaCode /> },
        { name: "Postman", icon: <FaPaperPlane /> },
        { name: "Figma", icon: <FaFigma /> },
    ];

    const renderSkills = (skillsArray) => (
        <div className="flex flex-wrap gap-4">
            {skillsArray.map((skill, index) => (
                <button
                    key={index}
                    className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-full shadow-lg hover:scale-110 transform transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-purple-300"
                    aria-label={skill.name}
                    type="button"
                >
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="font-semibold text-lg">{skill.name}</span>
                </button>
            ))}
        </div>
    );

    return (
        <section id="skills" className="max-w-7xl mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
                My Skills
            </h2>

            {/* Frontend */}
            <div className="mb-12">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Frontend</h3>
                {renderSkills(frontendSkills)}
            </div>

            {/* Backend */}
            <div className="mb-12">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Backend</h3>
                {renderSkills(backendSkills)}
            </div>

            {/* Tools */}
            <div className="mb-12">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Tools</h3>
                {renderSkills(toolsSkills)}
            </div>
        </section>
    );
};

export default Skills;
