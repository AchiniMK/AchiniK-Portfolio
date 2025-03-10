"use client";
import Link from 'next/link';
import { useState } from "react"; 
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from './MenuOverlay';
import Image from "next/image";

const navLinks = [
   {
    title: "About",
    path: "#about",
   },
   {
    title: "Projects",
    path: "#projects",
   },
   {
    title: "Contact",
    path: "#contact",
   },
]

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
        <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link href={"/"} className="flex items-center">
  <Image
    src="/images/AK.png"
    width={120}
    height={120}
    className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 transition-all duration-300"
  />
</Link>
            
        <div className="mobile-menu block md:hidden">
            {!navbarOpen ? (
                    <button 
                        onClick={() => setNavbarOpen(true)} 
                        className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"> 
                        <Bars3Icon className="h-5 w-5" />
                        </button>
                ) : (
                    <button 
                        onClick={() => setNavbarOpen(false)} 
                        className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"> 
                        <XMarkIcon className="h-5 w-5" />
                        </button>
                )}
        </div>
            <div className="menu hidden md:block md:w-auto" id="navbar">
                <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                    {
                        navLinks.map((link, index) =>(
                           <li key={index}>
                               <NavLink href={link.path} title={link.title} />
                           </li> 
                        ))}
                </ul>
            </div>
        </div>
        {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  )
}

export default Navbar
