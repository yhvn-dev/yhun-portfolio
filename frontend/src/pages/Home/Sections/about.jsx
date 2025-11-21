import { GithubStats } from "../../../services/GithubStats";
import { useGithub } from "../../../Context/githubContext";
import Me_1 from "../../../assets/Images/Me 1.png";
import {FileUser,Phone,Lightbulb} from "lucide-react"

import * as Animation from "../../../hooks/animations"


function About() {
  const { stats } = useGithub();
      
  return (
    <section className="bg-transparent sections column col-start-1 col-end-2 row-start-2 row-end-2 w-full">
   
      <GithubStats username="yhvn-dev"/>
      
      
      {/* MAIN BOX   */}
      <main className="bg-transparent flex flex-col items-center justify-start col-start-2 col-end-2 row-start-2 row-end-3 h-full w-full rounded-2xl p-1">

        {/* Title */}
        <div className="center w-full h-[20%]">
          <p className="monu-txt text-2xl text-[var(--main-white)]">About Me</p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-10 grid-rows-10 w-full h-[80%] rounded-[10px] gap-4">
         

            {/* CARD */}
          <div className="relative p-4 gap-4 grid grid-rows-10 grid-cols-1 col-start-1 col-end-8 row-start-1 row-end-7 border-2 border-[var(--metal-dark2)] rounded-[10px] shadow-[5px_5px_20px_1px_black] overflow-hidden">
            {/* Header Background */}

            <header className="relative center w-full h-full rounded-[10px] 
            row-start-1 row-end-4 bg-[var(--dark-variant)] 
            overflow-hidden p-4 border-2 border-[var(--metal-dark2)]
            shadow-[5px_5px_10px_1px_black">

              <div className="about-bg-header absolute rounded-[10px] w-[98%] h-[98%] overflow-hidden">
                <div className="absolute bg-[var(--dark-variant)] right-0 top-0 rounded-bl-[90%] w-[50%] h-[90%]"></div>
                <div className="absolute bg-[var(--dark-variant)] rounded-tr-[90%] left-0 bottom-0 w-[50%] h-[90%]"></div>
              </div>
              <div className="absolute bg-transparent backdrop-blur-[50px] rounded-[10px] center w-full h-full"></div>

            </header>

            {/* Profile Image */}
            <div className="center absolute top-15 w-full h-[30%] p-4 rounded">
              <div className="flex items-center justify-start relative mx-8 w-full h-full">
                <img
                  className="rounded-full object-cover w-24 h-24 border-2 shadow-lg"
                  src={Me_1}
                  alt="Profile Picture"
                />
              </div>
            </div>

            {/* Info Section */}
            <div className="column-start p-4 row-start-4 row-span-full rounded-[10px] bg-[var(--dark-variant)]">
              <p className="text-2xl mt-10 text-[var(--main-white)]">Jhunguide Flores</p>
              <a className="text-sm text-[var(--metal-dark4)] mb-4">@__jhvn</a>
              <p className="text-sm text-[var(--metal-dark4)]">
                I build end-to-end solutions with precision and care. I seamlessly integrate UI/UX design with backend development and security to create robust, user-friendly applications.
              </p>

              {/* Social Media / Stats */}
              {stats?.error ? (
               <Animation.SociaMediaAnimation></Animation.SociaMediaAnimation>
              ) : (
                stats?.user && (
                  <ul className="flex items-center justify-evenly mt-4 h-full w-full list-none rounded-[10px]">
                    <li className="column transition-1 ease-in">
                      <span className="monu-txt text-3xl text-[var(--main-white)] hover:text-white">{stats.user.followers}</span>
                      <span className="text-xs text-[var(--metal-dark4)] hover:text-[var(--white-blple)]">Followers</span>
                    </li>
                    <li className="column transition-1 ease-in">
                      <span className="monu-txt text-3xl text-[var(--main-white)]  hover:text-white">{stats.repos.length}</span>
                      <span className="text-xs text-[var(--metal-dark4)] hover:text-[var(--white-blple)]">Repositories</span>
                    </li>
                    <li className="column transition-1 ease-in">
                      <span className="monu-txt text-3xl text-[var(--main-white)] hover:text-white ">{stats.totalCommits}</span>
                      <span className="text-xs text-[var(--metal-dark4)] hover:text-[var(--white-blple)]">Commits</span>
                    </li>
                  </ul>
                )
              )}
            </div>
          </div>


          {/* TECH STACK  ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== */}
          <div className="flex flex-col items-center justify-start col-start-8 col-end-11 row-start-1 row-end-7
          border-2 border-[var(--metal-dark2)] rounded-[10px] 
          shadow-[5px_5px_20px_1px_black] p-4 gap-4">

            <div className="center w-full p-4 bg-[var(--dark-variant)] 
            rounded-[10px] border-2 border-[var(--metal-dark2)] 
            shadow-[5px_5px_10px_1px_black] text-[var(--main-white)]">
              Tech Stack
            </div>

            <Animation.TechStackAnimation/>
              
          </div>

                   
          {/* DESCRIPTION */}
          <div className="flex items-start justify-start p-4 
          col-start-4 col-end-11 row-start-7 row-end-11 border-2 border-[var(--metal-dark2)] 
          rounded-[10px] shadow-[5px_5px_20px_1px_black] text-[var(--main-white)]">

            Hi I'm Jhunguide Flores from the Philippines, I build full-stack 
            web applications using the PERN Stack ---- PostgreSQL, ExpressJs, ReactJs, and NodeJs.
            I also work with other technologies such as PHP,Laravel and Python and had experience using Java
            and Visual Basic.I started out using PHP and other langauges where I learned about the fundamentals of basic web
            development. Over time, I shifted my focuses to the PERN Stack because I enjoy creating modern,
            fast, scalable and high performing web applications. My experiences using these technologies gave
            me a sense of stabilty and commitment to modern web development, enhance my understanding of building 
            dynamic web applications. Beyod my current stack, my background as a developer also strengthen 
            my adaptability ---- allowing me to learn and work with different technologies in order to build not just web applications
            but also desktop and embeded systems when needed. 

          </div>
          <div className="col-start-1 col-end-4 row-start-7 row-end-9
          border-2 border-[var(--metal-dark2)] rounded-[10px] 
          shadow-[5px_5px_20px_1px_black] ">
            tags
          </div>

          
          <div className="grid grid-cols-2 grid-rows-2 gap-4 justify-end w-full h-full col-start-1 col-end-4 
          row-start-9 row-end-11 rounded-[10px]">
              <div className="center h-full w-full rounded-[10px] ">
                <a className="column h-full w-full ">
                  <FileUser fill="var(--main-white)" />
                  <p className="text-center text-[0.7rem] text-[var(--main-white)]">Download My Resume</p>
                </a>
              </div>

              {/*  */}
              <div className="center h-full w-full rounded-[10px] ">
                <a className="column h-full w-full ">
                  <Phone fill="var(--main-white)"/>
              
                  <p className="text-center text-[0.7rem] text-[var(--main-white)]">Contact Me</p>
                </a>
              </div>

              {/*  */}
              <div className="center h-full w-full rounded-[10px] ">
                <a className="column h-full w-full ">
                <Lightbulb size={30} fill="var(--main-white)"/>
                  <p className="text-center text-[0.7rem] text-[var(--main-white)]">View Projects</p>
                </a>
              </div>

            
              
          </div>
          
        </div>

      </main>
      
    </section>
    
  );
}

export default About;
