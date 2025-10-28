import { useEffect, useState } from "react"
import Jhvn from "../assets/Images/jhvn_1_LOGO.png"
import { Darkmode } from "./darkmode"



function Sidebar() {
 

  return (
    <aside  className='fixed column  right-4 top-0 w-[8rem] h-[100vh] z-20'>
        
        <div className='column-start h-[50%] w-full bg-transparent border-2 border-[var(--metal-dark2)] rounded-[10px]'>
            <div className='w-full flex items-center justify-start p-4'>
                <img className="w-10 h-auto" src={Jhvn}/>
            </div>

            <div className="center w-full transition-all *:">
                <Darkmode/>    
            </div>

            <div className='h-full column-start w-full p-4 bg'>
                <a href="#" className='text-[0.8rem] text-[var(--metal-dark4)] my-1 cursor-pointer
                hover:text-[var(--main-white)] transition-colors duration-400'>
                    Hero
                </a>

                <a href="#" className='text-[0.8rem] text-[var(--metal-dark4)] my-1
                hover:text-[var(--main-white)] transition-colors duration-400'>
                    About
                </a>

                <a href="#" className='text-[0.8rem] text-[var(--metal-dark4)] my-1 cursor-pointer
                hover:text-[var(--main-white)]  transition-colors duration-400'>
                    Skills & Technologies
                </a>

                <a href="#" className='text-[0.8rem] text-[var(--metal-dark4)] my-1 cursor-pointer
                hover:text-[var(--main-white)]  transition-colors duration-400'>
                    Projects
                </a>

                <a href="#" className='text-[0.8rem] text-[var(--metal-dark4)] my-1 cursor-pointer
                hover:text-[var(--main-white)]  transition-colors duration-400'>
                    Contacts
                </a>

                <a href="#" className='text-[0.8rem] text-[var(--metal-dark4)] my-1 cursor-pointer
                hover:text-[var(--main-white)]  transition-colors duration-400'>
                    Footer
                </a>
            </div>
        </div>
       
    </aside>    
  )

}

export default Sidebar