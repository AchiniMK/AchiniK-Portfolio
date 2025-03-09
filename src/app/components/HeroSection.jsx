"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
import Social from "./Social";



const HeroSection = () => {
  return (
  <section>
    <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="col-span-7 place-self-center text-center sm:text-left">
            <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold"><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Hello, I'm{" "}</span>
            <br />
            <TypeAnimation
                sequence={[
                "Achini Karunarathna",
                1000,
                "a Web Developer",
                1000,
                "a Logo Designer",
                1000,
         ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
    />
            </h1>
            <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">I'm a web developer creating sleek, intuitive, and dynamic digital experiences.</p>
            <motion.div className="flex flex-wrap items-center justify-center gap-4 mt-4 sm:justify-start">
            {/* Hire Me Button */}
            <button
            className="px-6 py-3 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white"
            onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>
            Hire Me </button>

            {/* Download CV Button */}
            <button className="px-[2px] py-[2px] rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white">
            <span className="bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 flex items-center gap-2">
            Download CV <FiDownload className="text-xl" /></span>
            </button>

            {/* Social Icons (GitHub & LinkedIn) */}
            <Social 
                containerStyles="flex items-center gap-4 sm:ml-4" 
                iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:text-primary hover:transition-all duration-500"
            />
        </motion.div>
        </motion.div>
        <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="col-span-5 place-self-center mt-4 lg:mt-0">
            <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                 <Image
                    src="/images/hero-image.png"
                    alt="hero image"
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    width={300}
                    height={300}
                    />
            </div>
        </motion.div>
    </div>
  </section>
  );
};

export default HeroSection
