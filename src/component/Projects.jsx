import Project1 from "./Project1"
import Project2 from "./Project2"
import Project3 from "./Project3"
import Project4 from "./Project4"

const Projects = () => {
  return (
    <div className="section-shell py-6 md:py-8 lg:py-10">
      <div className="section-container">
      <div className="mb-12 md:mb-14 lg:mb-16 text-center">
        <span className="section-badge">🚀 RECENT WORK</span>
        <h1 className="mt-1 text-4xl font-semibold tracking-tight text-[#0F172A] md:text-5xl">
          My Projects
        </h1>
      </div>
      <div className="grid grid-cols-1 items-stretch gap-7 xl:grid-cols-2 xl:auto-rows-fr">
        <Project1></Project1>

        <Project2></Project2>

        <Project3></Project3>
        <Project4></Project4>
      </div>
      </div>
    </div>
  );
};

export default Projects;
