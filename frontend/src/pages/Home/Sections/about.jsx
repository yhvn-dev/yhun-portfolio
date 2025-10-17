import { useState } from "react"
import Me_1 from "../../../assets/Images/Me 1.png"
import { GithubStats } from "../../../services/GithubStats"
import { useGithub } from "../../../Context/githubContext"

function About() {
  const {stats,setStats} = useGithub();
  
  return (

    <section className="sections column col-start-1 col-end-2 row-start-2 row-end-2 w-full  bg- ">

        <GithubStats username="yhvn-dev"/>   

        {/* MAIN BOX */}
        <main className="flex flex-col items-center justify-start 
            col-start-2 col-end-2 row-start-2 row-end-3 
             h-full w-full rounded-2xl  p-1 ">

                <div className="center w-full h-[20%] ">
                    <p className="monu-txt text-2xl">About Me</p>
                </div>          

                <div className="grid grid-cols-10 grid-rows-10 w-full h-[80%]
                rounded-[10px] gap-4 ">

                    <div className="relative p-4 gap-4 grid grid-rows-10 grid-cols-1 
                    col-start-1 col-end-8 row-start-1 row-end-7 border-2 border-[var(--metal-dark2)] rounded-[10px] shadow-[5px_5px_20px_1px_black] overflow-hidden">

                        <header className="relative center w-full h-full rounded-[10px] row-start-1 row-end-4
                         bg-[var(--dark-variant)] overflow-hidden p-4 border-2 border-[var(--metal-dark2)]">
                           <div className="about-bg-header absolute rounded-[10px] w-[98%] h-[98%] overflow-hidden">
                                <div className="absolute bg-[var(--dark-variant)] 
                               right-0 top-0 rounded-bl-[90%] w-[50%] h-[90%]">
                                      
                                </div>
                                <div className="absolute bg-[var(--dark-variant)]   rounded-tr-[90%] 
                                 left-0 bottom-0  w-[50%] h-[90%]">
                                            
                                </div>
                            </div>
                            <div className="absolute bg-transparent backdrop-blur-[50px] rounded-[10px] center w-full h-full"></div>
                        </header>
                        

                        {/* profile div */}
                        <div className="center absolute top-15 w-full h-[30%]
                        p-4 rounded ">
                            <div className="flex items-center justify-start relative mx-4 w-full h-full ">
                             <img 
                                className="rounded-full object-cover w-24 h-24 border-2  shadow-lg" 
                                src={Me_1} 
                                alt="Profile Picture"/>    
                            </div>
                                            
                        </div>  

                        <div className="column-start p-4  row-start-4 row-span-full rounded-[10px]  
                        bg-[var(--dark-variant)]">
                            <p className="text-2xl mt-10">Jhunguide Flores</p>
                            <a className="text-sm text-[var(--metal-dark4)] mb-4">@__jhvn</a>
                            <p className="text-sm text-[var(--metal-dark4)]">Im Jhunguide Flores, a Fullstack Web Developer 
                            I build end-to-end solutions with precision and care. 
                            I seamlessly integrate UI/UX design with backend development and security to create robust, user frienly applications.</p>
        
                            {stats?.user && (
                             <ul className={`flex items-center justify-evenly mt-4 h-full w-full 
                              list-style-type: circle;  rounded-[10px] ${stats.error}`}>
                                <p className="column transition-1 ease-in">
                                    <span className="monu-txt text-3xl">{stats.user.followers}</span>
                                    <span className="text-xs text-[var(--metal-dark4)]">Followers</span>
                                </p>
                                <p className="column transition-1 ease-in">
                                    <span className="monu-txt text-3xl">{stats.repos.length}</span>                                 
                                    <span className="text-xs text-[var(--metal-dark4)]">Repositories</span>
                                </p>
                                <p className="column transition-1 ease-in">
                                    <span className="monu-txt text-3xl"> {stats.totalCommits}</span>                               
                                    <span className="text-xs text-[var(--metal-dark4)]">Commits</span>
                                </p>                       
                            </ul>                      
                            )}
                        </div>                        

                    </div>


                     <div className="col-start-8 col-end-11  row-start-1 row-end-6  border-2 border-[var(--metal-dark2)] rounded-[10px] shadow-[5px_5px_20px_1px_black] ">
                        tech stack
                    </div>
                    <div className="col-start-4  col-end-11 row-start-7 row-end-11 border-2 border-[var(--metal-dark2)] rounded-[10px] shadow-[5px_5px_20px_1px_black] ">
                            description   
                    </div>
                    <div className="col-start-1 col-end-4 row-start-7 row-end-7  border-2 border-[var(--metal-dark2)] rounded-[10px] shadow-[5px_5px_20px_1px_black] ">
                        tags
                    </div>
                   
                    <div className="col-start-1 col-end-4 row-start-8 row-end-11  border-2 border-[var(--metal-dark2)] rounded-[10px] shadow-[5px_5px_20px_1px_black] ">
                        action
                    </div>                
               

            </div>
            
        </main> 


    </section>
  )
}

export default About

// 1. Projects / Portfolio Highlights

// A mini grid or cards showing 2–3 small project snapshots.

// Could include project name, short description, or a link.

// Gives context to your skills without going into full details.

// 2. Interests / Hobbies

// Small icons or text for hobbies (gaming, music, reading, design, coding challenges, etc.).

// Adds a personal touch and makes your profile feel relatable.

// 3. Achievements / Certifications

// A tiny badge-style section: “Top GitHub contributor,” “React Cert,” “Hackathon Winner,” etc.

// Quick visual proof of credibility.

// 4. Quick Stats

// Fun numeric highlights: repos contributed, projects completed, languages learned.

// Could use small cards or progress bars.

// 5. Learning / Current Focus

// Shows you’re growing: “Currently learning TypeScript & Next.js” or “Exploring AI integrations.”

// Makes your profile dynamic and future-looking.

// 6. Fun Fact / Quote

// A one-liner personality piece: “Coffee-powered fullstack dev” or favorite coding quote.

// Works nicely in a small footer area.