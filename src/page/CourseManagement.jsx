
import { FaTools, FaLink, FaGithub, FaExclamationTriangle, FaLightbulb } from "react-icons/fa";
import Navbar from "../component/Navbar";

const CourseManagement = () => {
    const project = {
        name: "EduPath",
        techStack: ["React", "Node.js", "Express", "MongoDB","javaScript","Tailwind CSS"],
        description:
            "EduPath is a comprehensive course management system built with the MERN stack, designed to help students enroll in courses, manage their learning progress. The platform supports user authentication, role-based access, and dynamic course enrollment with seat limitations.",
        liveLink: "https://dynamic-vacherin-e4098b.netlify.app/",
        githubClient: "https://github.com/fakhrulsipon/Course_Management_Client",
        challenges: [
            "Implementing robust admin functionalities for user and content management.",
            "Handling secure authentication and authorization with JWT and Firebase.",
            "Designing a responsive UI that works well on all devices."
        ],
        improvements: [
            "Add live video classes and interactive quizzes for better engagement.",
            "Integrate payment gateways for course purchases and subscriptions.",
            "Implement advanced analytics dashboards for students and instructors.",
            "Enhance notification system for course updates and reminders.",
            "Creating role-based access control for students, instructors, and admins."
        ],
        image: "https://i.postimg.cc/mDVjDfzK/EduPath.png",
    };

    return (
        <div>

        <Navbar></Navbar>
            <div className="min-h-screen bg-gray-900 text-gray-100 flex justify-center items-start py-12 px-4 sm:px-6 lg:px-8 mt-8 md:mt-12 lg:mt-16">
                <div className="max-w-6xl w-full gap-10 rounded-2xl p-8">

                    {/* Left side: Details */}
                    <div className="flex-1 flex flex-col justify-center">
                        <h1 className="lg:text-5xl md:text-4xl text-3xl font-semibold mb-8 text-center md:text-left">{project.name}</h1>

                        <div className="mb-8">
                            <h2 className="text-2xl md:text-3xl font-semibold mb-4 flex items-center gap-3 text-green-400">
                                <FaTools size={28} /> Main Technology Stack
                            </h2>
                            <ul className="flex flex-wrap gap-4">
                                {project.techStack.map((tech, idx) => (
                                    <li
                                        key={idx}
                                        className="bg-green-700 bg-opacity-70 px-5 py-2 rounded-full font-semibold shadow-md hover:bg-green-600 cursor-default transition"
                                    >
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mb-8">
                            <h2 className="text-2xl md:text-3xl font-semibold mb-4 flex items-center gap-3 text-yellow-400">
                                <FaLightbulb size={28} /> Brief Description
                            </h2>
                            <p className="text-lg leading-relaxed">{project.description}</p>
                        </div>

                        <div className="mb-8 flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
                            <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 px-8 py-3 bg-blue-600 rounded-lg text-white font-semibold shadow-lg hover:bg-blue-700 transition"
                            >
                                <FaLink size={20} /> Live Project
                            </a>
                            <a
                                href={project.githubClient}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 px-8 py-3 bg-gray-700 rounded-lg text-white font-semibold shadow-lg hover:bg-gray-600 transition"
                            >
                                <FaGithub size={20} /> GitHub Client Repo
                            </a>
                        </div>

                        <div className="mb-8">
                            <h2 className="text-2xl md:text-3xl font-semibold mb-4 flex items-center gap-3 text-red-400">
                                <FaExclamationTriangle size={28} /> Challenges Faced
                            </h2>
                            <ul className="list-disc list-inside space-y-3 text-lg">
                                {project.challenges.map((challenge, idx) => (
                                    <li key={idx}>{challenge}</li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-xl md:text-3xl font-semibold mb-4 flex items-center gap-3 text-indigo-400">
                                <FaLightbulb size={28} /> Potential Improvements & Future Plans
                            </h2>
                            <ul className="list-disc list-inside space-y-3 text-lg">
                                {project.improvements.map((improve, idx) => (
                                    <li key={idx}>{improve}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right side: Image */}
                    <div className="flex-1 flex flex-col justify-center items-center mt-8">
                        <h3 className="text-xl font-semibold text-green-400 mb-4 text-center px-4">
                            Visual Snapshot of ChatOrbit's User Interface
                        </h3>
                        <img
                            src={project.image}
                            alt={`${project.name} Screenshot`}
                            className="rounded-3xl shadow-2xl border-4 border-green-500 object-contain"
                            style={{ width: "60%" }}
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CourseManagement;
