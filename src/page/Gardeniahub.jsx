import React from "react";
import { FaTools, FaLink, FaGithub, FaExclamationTriangle, FaLightbulb } from "react-icons/fa";
import Navbar from "../component/Navbar";

const Gardeniahub = () => {
    const project = {
        name: "GardeniaHub",
        techStack: ["React", "Node.js", "Express", "MongoDB","javaScript","Tailwind CSS"],
        description:
            "GardeniaHub is a community-driven gardening platform built with the MERN stack, designed to connect gardening enthusiasts for sharing tips, joining events, and exploring plant care resources. The platform supports user authentication, CRUD operations for tips and events, and a vibrant interactive community experience.",
        liveLink: "https://gardeniahub-auth.web.app/",
        githubClient: "https://github.com/fakhrulsipon/GardeniaHub-Client",
        challenges: [
            "Designing an intuitive and responsive UI suitable for all devices and screen sizes.",
            "Managing complex CRUD operations with proper validation and user permissions.",
            "Handling user authentication and role-based access control efficiently.",
        ],
        improvements: [
            "Add live chat features for instant communication among gardeners.",
            "Integrate a plant disease diagnosis tool using AI for better plant care.",
            "Implement a reward and badge system to motivate user participation.",
        ],
        image: "https://i.postimg.cc/6qgd299b/Garden-Hub.png",
    };

    return (
        <div className="bg-[#FAFAFA] min-h-screen text-[#0F172A]">
            <Navbar></Navbar>
            <div className="min-h-screen bg-[#FAFAFA] text-[#0F172A] flex justify-center items-start py-12 px-4 sm:px-6 lg:px-8 mt-8 md:mt-12 lg:mt-16">
                <div className="premium-card max-w-6xl w-full gap-10 rounded-3xl bg-white p-6 md:p-10 border border-slate-200/80 shadow-xl shadow-slate-200/50">

                    {/* Left side: Details */}
                    <div className="flex-1 flex flex-col justify-center">
                        <h1 className="lg:text-5xl md:text-4xl text-3xl font-extrabold mb-8 text-center md:text-left text-gradient-primary">{project.name}</h1>

                        <div className="mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3 text-[#FF7E29]">
                                <FaTools size={28} /> Main Technology Stack
                            </h2>
                            <ul className="flex flex-wrap gap-3">
                                {project.techStack.map((tech, idx) => (
                                    <li
                                        key={idx}
                                        className="premium-chip text-sm"
                                    >
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3 text-amber-600">
                                <FaLightbulb size={28} /> Brief Description
                            </h2>
                            <p className="text-lg leading-relaxed text-slate-700 font-medium">{project.description}</p>
                        </div>

                        <div className="mb-8 flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
                            <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 px-8 py-3 rounded-full bg-gradient-to-r from-[#FF7E29] to-[#FF3E6C] text-white font-bold shadow-lg shadow-[#FF7E29]/25 hover:scale-105 transition duration-300"
                            >
                                <FaLink size={20} /> Live Project
                            </a>
                            <a
                                href={project.githubClient}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 px-8 py-3 rounded-full border border-slate-200 bg-slate-100 text-[#0F172A] font-bold shadow-md hover:bg-slate-200 hover:scale-105 transition duration-300"
                            >
                                <FaGithub size={20} /> GitHub Client Repo
                            </a>
                        </div>

                        <div className="mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3 text-rose-600">
                                <FaExclamationTriangle size={28} /> Challenges Faced
                            </h2>
                            <ul className="list-disc list-inside space-y-3 text-lg text-slate-700 font-medium">
                                {project.challenges.map((challenge, idx) => (
                                    <li key={idx}>{challenge}</li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-xl md:text-3xl font-bold mb-4 flex items-center gap-3 text-[#FF7E29]">
                                <FaLightbulb size={28} /> Potential Improvements & Future Plans
                            </h2>
                            <ul className="list-disc list-inside space-y-3 text-lg text-slate-700 font-medium">
                                {project.improvements.map((improve, idx) => (
                                    <li key={idx}>{improve}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right side: Image */}
                    <div className="flex-1 flex flex-col justify-center items-center mt-8">
                        <h3 className="text-xl font-bold text-[#FF7E29] mb-4 text-center px-4">
                            Visual Snapshot of ChatOrbit's User Interface
                        </h3>
                        <img
                            src={project.image}
                            alt={`${project.name} Screenshot`}
                            className="rounded-3xl shadow-xl border-2 border-slate-200 object-contain bg-slate-50"
                            style={{ width: "80%" }}
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gardeniahub;
