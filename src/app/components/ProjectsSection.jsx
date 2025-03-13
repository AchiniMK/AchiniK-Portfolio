"use client";
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from "framer-motion";

const projectsData = [
    {
      id: 1,
      title: "Coffeeshop Website",
      description: "HTML CSS JavaScript",
      image: "/images/projects/1.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/AchiniMK/CoffeeShop_Website",
      previewUrl: "https://coffee-shop-website-pied.vercel.app/",
    },
    {
      id: 2,
      title: "University Website",
      description: "HTML CSS JavaScript",
      image: "/images/projects/2.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/AchiniMK/University_Website",
      previewUrl: "https://university-website-ten-mu.vercel.app/",
    },
    {
      id: 3,
      title: "E-commerce Website",
      description: "HTML CSS JavaScript",
      image: "/images/projects/3.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/AchiniMK/E-Commerce_Website",
      previewUrl: "https://e-commerce-website-theta-wine.vercel.app/",
    },
    {
      id: 4,
      title: "Weather Application",
      description: "JavaScript - Show Temperature|Humiditiy|Wind Speed",
      image: "/images/projects/4.png",
      tag: ["All"],
      gitUrl: "https://github.com/AchiniMK/Weather_App",
      previewUrl: "https://weather-app-ten-navy-25.vercel.app/",
    },
    {
      id: 5,
      title: "To-Do List Application",
      description: "A Simple HTML Application",
      image: "/images/projects/5.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/AchiniMK/To-Do-List-App",
      previewUrl: "https://to-do-list-app-pi-ten.vercel.app/",
    },
    {
      id: 6,
      title: "Calculator",
      description: "A Simple Cal | JavaScript",
      image: "/images/projects/6.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/AchiniMK/Simple-Calculator",
      previewUrl: "https://simple-calculator-one-rust.vercel.app/",
    },
  ];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
        setTag(newTag);
      };

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
      );

    const cardVariants = {
      initial: { y: 50, opacity: 0 },
      animate: { y: 0, opacity: 1 },
    };


  return (
    <section id="projects" className="scroll-mt-20">
    <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
      My Projects</h2>
    <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
    <ProjectTag
        onClick={handleTagChange}
        name="All"
        isSelected={tag === "All"}
    />
    <ProjectTag
        onClick={handleTagChange}
        name="Web"
        isSelected={tag === "Web"}
    />
    </div>
    <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) =>(
        <motion.li
        key={index}
        variants={cardVariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        transition={{ duration: 0.3, delay: index * 0.4 }}
         >  
        <ProjectCard 
        key={project.id} 
        title={project.title} 
        description={project.description} 
        imgurl={project.image}
        gitUrl={project.gitUrl}
        previewUrl={project.previewUrl}
        />
         </motion.li>
        ))}
        </ul>
    </section>
  );
};

export default ProjectsSection;

 