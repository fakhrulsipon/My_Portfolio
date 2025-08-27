
import Project1 from "./Project1";
import Project3 from "./Project3";
import Project2 from "./Project2";




const Projects = () => {
    return (
        <div className="px-4 md:px-8 lg:px-20 mt-8 md:mt-12 lg:mt-16">
            <h1 className="text-white text-3xl md:text-4xl font-medium text-center mb-10">My Projects</h1>
            <div className="justify-center gap-6 items-center">
                
                <Project1></Project1>

                <Project2></Project2>

                <Project3></Project3>

            </div>
        </div>
    );
};

export default Projects;
