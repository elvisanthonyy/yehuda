import React from "react";
import Image from "next/image";
import SkillsButton from "./SkillsButton";

interface ChildProps {
  projectImageUrl: string;
  projectTitle: string;
  projectDescription: string;
  demoUrl: string;
  codeUrl: string;
}

const ProjectCard = ({
  projectImageUrl,
  projectTitle,
  projectDescription,
  demoUrl,
  codeUrl,
}: ChildProps) => {
  return (
    <div className="relative flex flex-col md:flex-row lg:flex-col aspect-[5/6] mb-10 mx-auto overflow-hidden w-[90%] lg:h-120  md:h-75 lg:w-full xl:flex-row xl:h-80 md:aspect-auto h-fit border-1 border-white/20 bg-gradient-to-bl to-50% from-white/3 to-green-300/2 bg-white/2 shadow-3xl rounded-2xl ">
      <div className="flex justify-center items-start overflow-hidden  h-[40%] md:h-full lg:h-[50%] lg:w-full bg-amber-400 md:w-[50%] xl:w-[50%] xl:h-full ">
        <Image
          src={projectImageUrl}
          alt="lyric image"
          height={200}
          width={400}
          className="h-full object-left-top lg:h-[120%] w-full object-cover md:object-left-top lg:object-center xl:h-full xl:object-left-top"
        />
      </div>
      <div className="flex flex-col shrink-0 md:h-full lg:w-full lg:h-[50%] md:w-[50%] xl:w-[50%] xl:h-full h-[60%] p-3 w-full">
        <div className="text-xl  text-green-500 m-3">{projectTitle}</div>
        <div className="ml-3 h-[60%] bg-amber-200lg:h-[45%] w-[90%] text-xs md:text-md">
          {projectDescription}
        </div>
        <div className="ml-3 flex items-center  m-0 w-[95%]">
          <SkillsButton name="HTML" />
          <SkillsButton
            name={
              projectTitle === "Collabify" || projectTitle === "Rift"
                ? "Tailwind"
                : "CSS"
            }
          />
          <SkillsButton
            name={projectTitle === "Rift" ? "Node.js" : "Javascript"}
          />
          {projectTitle === "Collabify" && <SkillsButton name="React" />}
          {projectTitle === "Rift" && <SkillsButton name="React" />}
        </div>
        <div className="ml-3 flex items-center my-3  h-15 m-0 w-[80%] ">
          <a href={demoUrl} target="_blank">
            <div className="transition-all duration-300 ease-in flex px-4 justify-center items-center min-w-20  w-fit h-9 rounded-3xl border-1 text-xs mr-2 bg-white text-black hover:opacity-50">
              {projectTitle === "Lyric Church" ? "Live" : "Live Demo"}
            </div>
          </a>

          <a href={codeUrl} target="_blank">
            <div className="transition-all duration-300 ease-in  flex px-2 justify-center items-center min-w-20  w-fit h-9 rounded-3xl border-1 text-xs mr-2 bg-white text-black hover:opacity-50">
              Code
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
