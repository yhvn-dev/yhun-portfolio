import Jhvn from "../../../assets/Images/jhvn_1_LOGO.png"
import {  Github, Instagram, Facebook, Linkedin } from 'lucide-react';
import { Darkmode  } from "../../../features/darkmode";"../../../features/darkmode"

function Header() {

    return(
  
      <header className="flex  fixed top-0 left-0 w-full h-[2.5rem] z-50">

        <div className="flex items-center justify-start w-full h-full ">
          <img className="logo mx-4 w-8 h-auto" src={Jhvn}/>
          <span className="px-4 border-l-2 border-[var(--dark-variant)] text-[var(--main-white)]">Jhunguide Flores</span>
        </div>
        

        <nav className="flex items-center justify-end h-full w-full  ">

            <Darkmode />
              <a 
              href="https://www.linkedin.com/in/jhunguide-flores" 
              target="_blank" 
              className="mx-2 cursor-pointer duration-500 hover:scale-110  stroke-white transition-all duration-500 "
         
              id="header-linkedin">
                <Linkedin  size={16} stroke="var(--main-white)"/>
              </a>  

              {/* GitHub Link */}
              <a 
              href="https://github.com/yhvn-dev" 
              target="_blank" 
              className="mx-2 cursor-pointer duration-500 hover:scale-110  stroke-white transition-all"
        
              id="header-github">
              <Github  size={16}  stroke="var(--main-white)"/>
              </a>

        </nav>


      </header>
    
    )
    
}

export default Header;
