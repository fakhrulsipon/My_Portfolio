import React from "react";
import { FaTools, FaLink, FaGithub, FaExclamationTriangle, FaLightbulb } from "react-icons/fa";
import Navbar from "../component/Navbar";

const ChatOrbitDetails = () => {
    const project = {
        name: "ChatOrbit",
        techStack: ["React", "Node.js", "Express", "MongoDB", "javaScript","Tailwind CSS"],
        description:
            "ChatOrbit is a full-featured, modern discussion forum built with the MERN stack, where users can post, comment, vote, and become premium members. It supports secure authentication, real-time interactions, Stripe payments, and an admin moderation panel.",
        liveLink: "https://super-gelato-a1166f.netlify.app/",
        githubClient: "https://github.com/fakhrulsipon/ChatOrbit_Client",
        challenges: [
            "Implementing robust admin functionalities for user and content management.",
            "Integrating Stripe payment gateway securely for premium memberships.",
            "Designing a responsive UI that works well on all devices."
        ],
        improvements: [
            "Add end-to-end encryption for secure messaging.",
            "Integrate video and voice calling features.",
            "Implementing real-time messaging with Socket.IO and handling connection stability.",
            "Ensuring message data consistency and synchronization across users."
        ],
        image: "https://i.postimg.cc/fTqPCXb1/Chat-Orbit.png",
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

export default ChatOrbitDetails;
