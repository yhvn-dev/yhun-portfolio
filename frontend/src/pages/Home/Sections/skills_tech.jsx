import { FrontEnd, UsedBackEnd, Tools, Database } from "../../../data/image_resources";
import { FadeInWhenVisible } from "../../../hooks/animations";

function Skills_Tech() {
    return (
        <section id="skills-tech"className="sections column col-start-1 col-end-2 row-start-3 row-end-3 w-full gap-y-20 ">
            {/* MAIN BOX */}
            
            <main className="skills-tech-main  flex flex-col items-center col-start-1 col-span-full md:col-start-2  md:col-end-2 row-start-2 row-end-3 h-full w-full rounded-2xl p-1">
                {/* Header */}
                <div className="center w-full h-[20%]">
                    <p className="monu-txt text-2xl text-[var(--main-white)] ">Skills & Technologies</p>
                </div>
        
                {/* Grid Layout */}
                <div className="flex flex-col md:grid grid-rows-4 grid-cols-1 md:grid-cols-10 md:grid-rows-2 w-full h-[80%] rounded-[10px] gap-4">
            
                    {/* FRONTEND */}
                    <div className="tech-con  flex flex-col items-center  justify-center md:justify-start
                        col-start-1 col-end-12 row-start-1 row-end-2 md:row-end-7 md:col-end-8   
                        border-2 border-[var(--metal-dark2)] rounded-[10px] 
                        shadow-[5px_5px_20px_1px_black] py-8 md:py-4 px-4 gap-4 
                        relative overflow-hidden backdrop-blur-sm
                        ">
                        {/* Glassmorphism blur background */}
                        <div className="absolute inset-0 -z-10"></div>
                        
                        <div className="tech-title text-white center w-full p-1 bg-[var(--dark-variant)]/80 
                            rounded-[10px] border-2 border-[var(--metal-dark2)] shadow-[5px_5px_10px_1px_black]
                            backdrop-blur-md">
                            Frontend
                        </div>
                        <div className="flex p-4 md:grid grid-cols-4 gap-4 w-full h-full">
                            {FrontEnd.map((tech, index) => (
                                <div key={index} className="stack-div  flex flex-col items-center justify-center gap-1 flex-1 p-2 
                                    bg-white/5 rounded-xl backdrop-blur-md
                                    border border-white/10
                                    hover:bg-white/10 hover:border-white/20
                                    hover:shadow-[0_0_15px_2px_rgba(0,0,0,0.5)] 
                                    transition-all duration-500 hover:scale-101">
                                    <img 
                                        src={tech.src} 
                                        alt={tech.label}
                                        className={`w-6 h-6 object-contain`}
                                            />

                                 
                                    <span className="hidden md:block text-white text-xs mt-2 text-center">{tech.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

             
                    {/* hover:bg-gradient-to-br from-[var(--moon-phases-b)] via-[var(--moon-phases-b)] to-[var(--moon-phases-)] transition-all duration-500 */}
                    
                    {/* BACKEND */}
                    <div className="tech-con  flex flex-col items-center justify-center
                        col-start-1 col-end-12 row-start-2 row-end-3 md:row-start-7 md:col-start-3 md:row-end-12 md:col-end-8
                        border-2 border-[var(--metal-dark2)] rounded-[10px] 
                        shadow-[5px_5px_20px_1px_black] p-4 py-8 md:py-4 gap-4
                        relative overflow-hidden backdrop-blur-sm">

                        {/* Glassmorphism blur background */}
                        <div className="absolute inset-0  blur-xl -z-10"></div>
                        
                        <div className="tech-title text-white center w-full p-1 bg-[var(--dark-variant)]/80 
                            rounded-[10px] border-2 border-[var(--metal-dark2)] shadow-[5px_5px_10px_1px_black]
                            backdrop-blur-md">
                            Backend
                        </div>
                        <div className="flex md:grid grid-cols-4 gap-4 w-full h-full ">
                            {UsedBackEnd.map((tech, index) => (
                                <div 
                                    key={index} 
                                    className="stack-div  flex flex-col items-center justify-center gap-2   flex-1 p-2
                                        bg-white/5 rounded-2xl backdrop-blur-md
                                        border border-white/10
                                        hover:bg-white/10 hover:border-white/20
                                        hover:shadow-[0_0_15px_2px_rgba(0,0,0,0.5)] 
                                        transition-all duration-500 hover:scale-101">
                                    <img 
                                        src={tech.src} 
                                        alt={tech.label}
                                        className={`w-6 h-6 object-contain ${
                                            tech.label === "ExpressJS" ? "bg-gray-100 w-7 h-7  rounded-lg p-1 " : ""
                                            
                                        }`}
                                    />
                                    <span className="hidden md:block text-xs text-center text-[var(--main-white)]">
                                        {tech.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* TOOLS */}
                    <div className="tech-con  flex flex-col items-center  justify-center
                        col-start-8 col-end-12 md:row-start-1 md:row-end-12 
                        border-2 border-[var(--metal-dark2)] rounded-[10px] 
                        shadow-[5px_5px_20px_1px_black] py-8  px-4 md:p-4 md:px-4 gap-4 
                        relative overflow-hidden backdrop-blur-sm
                        
                        ">
                        {/* Glassmorphism blur background */}
                        <div className="absolute inset-0  blur-xl -z-10"></div>
                        
                        <div className="tech-title text-white center w-full p-1 bg-[var(--dark-variant)]/80 
                            rounded-[10px] border-2 border-[var(--metal-dark2)] shadow-[5px_5px_10px_1px_black]
                            backdrop-blur-md">
                            Tools
                        </div>
                        <div className="flex md:grid grid-cols-2 w-full h-full gap-4 p-2">
                            {Tools.map((tool, index) => (
                                <div key={index} className="stack-div  flex flex-col items-center justify-center gap-1  flex-1 
                                    bg-white/5 rounded-xl p-2 backdrop-blur-md
                                    border border-white/10
                                    hover:bg-white/10 hover:border-white/20
                                  
                                      hover:shadow-[0_0_15px_2px_rgba(0,0,0,0.5)] 
                                    transition-all duration-500 hover:scale-101">
                                    <img 
                                        src={tool.src} 
                                        alt={tool.label}
                                        className="w-6 h-6 object-contain"
                                    />
                                    <span className="hidden md:block text-white text-xs mt-2 text-center leading-tight">{tool.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>                


                    {/* DATABASE */}
                    <div className="tech-con  flex flex-col items-center justify-center
                        col-start-1 col-end-3 row-start-6 row-end-12 md:row-start-7
                        rounded-[10px] border-2 border-[var(--metal-dark2)]
                        shadow-[5px_5px_20px_1px_black] py-8 md:p-4 px-4 gap-4
                        relative overflow-hidden backdrop-blur-sm">
                        {/* Glassmorphism blur background */}
                        <div className="absolute inset-0 -z-10"></div>
                        
                        <div className="tech-title text-white center w-full p-1 bg-[var(--dark-variant)]/80 
                            rounded-[10px] border-2 border-[var(--metal-dark2)] shadow-[5px_5px_10px_1px_black]
                            backdrop-blur-md">
                            Databases
                        </div>
                        <div className="flex md:flex-col gap-3 w-full h-full">
                            {Database.map((db, index) => (
                                <div key={index} className="stack-div flex flex-col items-center justify-center  flex-1 gap-1 
                                    bg-white/5 rounded-xl p-3 backdrop-blur-md
                                    border border-white/10 
                                    hover:bg-white/10 hover:border-white/20
                                    hover:shadow-[0_0_15px_2px_rgba(0,0,0,0.5)] 
                                    transition-all duration-500 hover:scale-101">
                                    <img 
                                        src={db.src} 
                                        alt={db.label}
                                        className="w-6 h-6 object-contain"
                                    />
                                    <span className="hidden md:block text-white text-[10px] text-center">{db.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>    
                </div>
            </main>
        </section>
    );
}

export default Skills_Tech;