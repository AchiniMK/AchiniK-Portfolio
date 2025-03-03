"use client";
import { useState, useTransition } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';


const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React Js</li >
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>Bachelor of ICT, Rajarata University of Sri Lanka (2019 - 2024)</li>
                <li>Advance Level, Ananda Maithreya Central College (2017)</li>
                <li>Ordinary Level, Ananda Maithreya Central College (2013)</li>
            </ul>
        )
    },
    {
        title: "Certifications", 
        id: "certifications",
        content: (
            <ul className="list-disc pl-2">
                <li>BICT(Honours) - Second Class Upper Division , RUSL</li>
                <li>Certificate in English, Sabaragamuwa University of Sri Lanka</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    }; 


  return <section id="about" className="pt-[40px] text-white scroll-mt-[40px]"><div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py:16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
             <p className="text-base lg:text-lg">
             I am a passionate web developer with a strong foundation in HTML, CSS, JavaScript, and React. I love building user-friendly, responsive, and visually appealing web applications that provide a seamless user experience. My focus is on writing clean, efficient code while continuously learning and improving my skills. 
             As a quick learner and a dedicated team player, I thrive in collaborative environments where I can contribute my expertise and gain valuable insights from others. 
             I am currently seeking a web development internship where I can apply my knowledge in a professional setting, take on new challenges, and grow as a developer. I am eager to work with experienced professionals, enhance my technical skills, and gain hands-on experience in real-world projects.
            </p>
            <div className="flex flex-row justify-start mt-8">
                <TabButton 
                selectTab={() => handleTabChange("skills")} 
                active={tab === "skills"}>
                    {""}Skills{""}
                </TabButton>
                <TabButton 
                selectTab={() => handleTabChange("education")} 
                active={tab === "education"}
                >
                    {""}Education{""}
                </TabButton>
                <TabButton 
                selectTab={() => handleTabChange("certifications")} 
                active={tab === "certifications"}>
                    {""}Certifications{""}
                </TabButton>
            </div>
            <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
    </div>
    </section>
    
  
};

export default AboutSection;
