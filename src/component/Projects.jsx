import Project1 from "./Project1"
import Project2 from "./Project2"
import Project3 from "./Project3"
import Project4 from "./Project4"

const Projects = () => {
  return (
    <div className="section-shell pt-8 md:pt-10 lg:pt-12">
      <div className="section-container">
      <h1 className="mb-12 text-center text-4xl font-medium tracking-tight text-white md:text-5xl">
        My Projects
      </h1>
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
