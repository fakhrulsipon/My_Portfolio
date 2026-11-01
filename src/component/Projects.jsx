import Sitebari from "./Sitebari";
import Mailbari from "./Mailbari";
import RideX from "./RideX";
import Project1 from "./Project1";

const Projects = () => {
  return (
    <div className="section-shell py-6 md:py-8 lg:py-10">
      <div className="section-container">
        <div className="mb-8 md:mb-10 text-center">
          <span className="section-badge">🚀 RECENT WORK</span>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#0F172A] md:text-4xl">
            My Projects
          </h1>
        </div>
        <div className="grid grid-cols-1 items-stretch gap-5 lg:gap-6 xl:grid-cols-2 xl:auto-rows-fr">
          <Sitebari />
          <Project1 />
          <RideX />
          <Mailbari />
        </div>
      </div>
    </div>
  );
};

export default Projects;
