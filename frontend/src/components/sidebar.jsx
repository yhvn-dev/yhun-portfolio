import { useEffect, useState } from "react"
import Jhvn from "../assets/Images/jhvn_1_LOGO.png"
import {House,Heart,Brain,LaptopMinimalCheck,Phone}  from "lucide-react"
import { Darkmode } from "../features/darkmode"


function Sidebar() { 
  return (
    <aside  
        className="
            fixed z-20
            w-full h-[10vh] bottom-5   
            center
            md:w-[10rem] md:h-screen md:top-0 md:right-5">
                
        <div className="sbar-nav 
            flex w-full md:h-[60vh] items-center justify-evenly px-4
            md:flex-col md:justify-evenly md:py-6  rounded-2xl
            bg-[var(--metal-dark5)] border-2 border-[var(--metal-dark2)] rounded-[10px">
            
            {/* Logo */}
            <div className="flex items-center justify-center w-auto">
            <img className="logo  w-10 h-auto" src={Jhvn} />
            </div>

            {/* Dark mode toggle */}
            <div className="center md:w-full md:justify-start items-start md:my-4  ">
          
            </div>
            {/* Nav */}
            <nav 
            className="
                flex items-center justify-center gap-4 w-full 
                md:flex-col md:justify-start md:items-start md:gap-4 md:2-[80%] my-4">

            <a href="#hero" className="nav_link flex items-center  md:flex-row flex-col text-[0.8rem] text-[var(--metal-dark4)] my-1 cursor-pointer hover:text-[var(--main-white)] transition-colors duration-400">
                <House size={16} className="mx-2 my-2  md:my-0"/>
                Hero
            </a>

            <a href="#about" className="nav_link flex items-center  md:flex-row flex-col text-[0.8rem] text-[var(--metal-dark4)] my-1 cursor-pointer hover:text-[var(--main-white)] transition-colors duration-400">
                <Heart size={16} className="mx-2 my-2  md:my-0"/>
                About
            </a>
            
            <a href="#skills-tech" className="nav_link flex items-center  md:flex-row flex-col text-[0.8rem] text-[var(--metal-dark4)] my-1 cursor-pointer hover:text-[var(--main-white)] transition-colors duration-400">
                <Brain size={16} className="mx-2 my-2  md:my-0"/>
                Technologies
            </a>

            <a href="#projects" className="nav_link flex items-center  md:flex-row flex-col text-[0.8rem] text-[var(--metal-dark4)] my-1 cursor-pointer hover:text-[var(--main-white)] transition-colors duration-400">
                <LaptopMinimalCheck size={16} className="mx-2 my-2  md:my-0"/>
                Projects
            </a>

            <a href="#contacts" className="nav_link flex items-center  md:flex-row flex-col text-[0.8rem] text-[var(--metal-dark4)] my-1 cursor-pointer hover:text-[var(--main-white)] transition-colors duration-400">
                <Phone size={16} className="mx-2 my-2 md:my-0"/>
                Contacts
            </a>
            </nav>

        </div>
        </aside>

  )

}

export default Sidebar