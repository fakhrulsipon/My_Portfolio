import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiFirebase, SiMongodb, SiExpress, SiVercel, SiNetlify } from "react-icons/si";
import Marquee from "react-fast-marquee";

export default function Skills() {


  return (
    <section className="px-4 md:px-8 lg:px-20 mt-8 md:mt-12 lg:mt-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10 text-white">
          Skills
        </h2>



        <div className="p-[2px] rounded-2xl bg-gradient-to-r from-green-300 to-blue-300">
          <div className="grid grid-cols-1 gap-2 items-center bg-gray-900 rounded-2xl p-6">
            
            {/* Marquee Icons */}
            <div>
              <Marquee gradient={false} speed={50} direction="right">
                <div className="flex gap-8 text-6xl my-2">
                  <FaHtml5 className="text-orange-500" />
                  <FaCss3Alt className="text-blue-500" />
                  <SiTailwindcss className="text-sky-400" />
                  <FaJs className="text-yellow-400" />
                  <FaReact className="text-cyan-400" />
                  <SiNextdotjs className="text-white" />
                  <SiFirebase className="text-yellow-500" />
                  <FaNodeJs className="text-green-500" />
                  <SiExpress className="text-gray-300" />
                  <SiMongodb className="text-green-400" />
                  <FaGithub className="text-gray-400" />
                  <SiVercel className="text-white" />
                  <SiNetlify className="text-sky-500" />
                  <FaFigma className="text-pink-500" />
                </div>
              </Marquee>

              <Marquee gradient={false} speed={50}>
                <div className="flex gap-8 text-6xl my-2">
                  <FaHtml5 className="text-orange-500" />
                  <FaCss3Alt className="text-blue-500" />
                  <SiTailwindcss className="text-sky-400" />
                  <FaJs className="text-yellow-400" />
                  <FaReact className="text-cyan-400" />
                  <SiNextdotjs className="text-white" />
                  <SiFirebase className="text-yellow-500" />
                  <FaNodeJs className="text-green-500" />
                  <SiExpress className="text-gray-300" />
                  <SiMongodb className="text-green-400" />
                  <FaGithub className="text-gray-400" />
                  <SiVercel className="text-white" />
                  <SiNetlify className="text-sky-500" />
                  <FaFigma className="text-pink-500" />
                </div>
              </Marquee>
            </div>

            {/* Skills Text */}
            <div className="space-y-4 p-4">
              <p className="text-white">
                <span className="font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Front-End:</span>{" "}
                HTML, CSS, Tailwind CSS, JavaScript, React.js, React Router,
                DaisyUI
              </p>
              <p className="text-white">
                <span className="font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Back-End:</span>{" "}
                Node.js, Express.js, MongoDB
              </p>
              <p className="text-white">
                <span className="font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Tools:</span> Git,
                GitHub, VS Code, Netlify, Vercel, Figma
              </p>
            </div>

          </div>
        </div>


      </div>
    </section>
  );
}
