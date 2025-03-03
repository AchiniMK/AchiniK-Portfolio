import React from 'react';
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";

const ProjectCard = ({ imgurl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="h-40 md:h-52 rounded-t-xl relative group overflow-hidden">
        
        {/* Image always visible but dims slightly on hover */}
        <img 
          src={imgurl} 
          alt={title} 
          className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-30"
        />
        
        {/* Icons are now always visible but highlighted on hover */}
        <div className="flex items-center justify-center absolute inset-0 transition-opacity duration-500 group-hover:bg-[#181818] group-hover:bg-opacity-80">
          <a 
            href={gitUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="h-12 w-12 md:h-14 md:w-14 mr-2 border-2 rounded-full border-white flex items-center justify-center bg-black bg-opacity-50">
            <CodeBracketIcon className="h-8 w-8 md:h-10 md:w-10 text-white" />
          </a>

          <a 
            href={previewUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="h-12 w-12 md:h-14 md:w-14 border-2 rounded-full border-white flex items-center justify-center bg-black bg-opacity-50">
            <EyeIcon className="h-8 w-8 md:h-10 md:w-10 text-white" />
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