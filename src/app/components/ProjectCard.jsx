import React from 'react';
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";

const ProjectCard = ({ imgurl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="w-full max-w-sm mx-auto">
      <div 
        className="h-52 md:h-72 rounded-t-xl relative group flex items-center justify-center"
        style={{ background: `url(${imgurl})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        
        <div className="overlay flex items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-500">
          
          <a 
            href={gitUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="h-12 w-12 md:h-14 md:w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white flex items-center justify-center">
            <CodeBracketIcon className="h-8 w-8 md:h-10 md:w-10 text-[#ADB7BE] cursor-pointer group-hover:text-white" />
          </a>

          <a 
            href={previewUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="h-12 w-12 md:h-14 md:w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white flex items-center justify-center">
            <EyeIcon className="h-8 w-8 md:h-10 md:w-10 text-[#ADB7BE] cursor-pointer group-hover:text-white" />
          </a>
        </div>
      </div>

      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4 text-center">
        <h5 className="text-lg md:text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE] text-sm md:text-base">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
