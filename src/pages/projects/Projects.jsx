import SingleProject from "./SingleProject";
import projectData from "./projectData";
import { Element } from "react-scroll";

const Projects = () => {
  return (
    <>
      <Element
        name="projects"
        className="flex flex-col  w-full justify-between  bg-[#44266c] py-5 ltab:py-10"
      >
        <h2 className="text-3xl text-center font-serif font-extrabold text-[#DCCFED] sm:text-4xl">
          Projects
        </h2>
        <div className="w-full px-3 ltab:px-5">
          {projectData.map((obj, index) => {
            return (
              <SingleProject
                key={index}
                v={index}
                img={obj.img}
                name={obj.name}
                dec={obj.dec}
                topic={obj.topic}
                link={obj.link}
                codeLink={obj.codeLink}
                techonology={obj.techonology}
              />
            );
          })}
        </div>
      </Element>
    </>
  );
};

export default Projects;
