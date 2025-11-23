import { FrontEnd, BackEnd, Tools, Database } from "../../../data/image_resources";

function Skills_Tech() {
    return (
        <section id="skills-tech"className="sections column col-start-1 col-end-2 row-start-3 row-end-3 w-full gap-y-20">
            {/* MAIN BOX */}
            <main className="flex flex-col items-center justify-start   col-start-1 col-span-full md:col-start-2  md:col-end-2 row-start-2 row-end-3 h-full w-full rounded-2xl p-1">
                {/* Header */}
                <div className="center w-full h-[20%]">
                    <p className="monu-txt text-2xl text-[var(--main-white)]">Skills & Technologies</p>
                </div>
        
                {/* Grid Layout */}
                <div className="grid grid-cols-10 grid-rows-10 w-full h-[80%] rounded-[10px] gap-4">
            
                    {/* FRONTEND */}
                    <div className="flex flex-col items-center justify-start 
                        col-start-1 col-end-8 row-start-1 row-end-6
                        border-2 border-[var(--metal-dark2)] rounded-[10px] 
                        shadow-[5px_5px_20px_1px_black] p-4 gap-4
                        relative overflow-hidden backdrop-blur-sm
                        ">
                        {/* Glassmorphism blur background */}
                        <div className="absolute inset-0  bg-gradient-to-br from-[var(--metal-dark5)] via-[var(--metal-dark5)] to-[var(--moon-phases-)]  blur-xl -z-10"></div>
                        
                        <div className="text-white center w-full p-1 bg-[var(--dark-variant)]/80 
                            rounded-[10px] border-2 border-[var(--metal-dark2)] shadow-[5px_5px_10px_1px_black]
                            backdrop-blur-md">
                            Frontend
                        </div>
                        <div className="grid grid-cols-4 gap-4 w-full h-full">
                            {FrontEnd.map((tech, index) => (
                                <div key={index} className="flex flex-col items-center justify-center gap-1  flex-1 
                                    bg-white/5 rounded-xl backdrop-blur-md
                                    border border-white/10
                                    hover:bg-white/10 hover:border-white/20
                                    hover:shadow-[0_0_15px_2px_rgba(0,0,0,0.5)] 
                                    transition-all duration-500 hover:scale-101">
                                    <img 
                                        src={tech.src} 
                                        alt={tech.label}
                                        className="w-6 h-6 object-contain"
                                    />
                                    <span className="text-white text-xs mt-2 text-center">{tech.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* TOOLS */}
                    <div className="flex flex-col items-center justify-start 
                        col-start-8 col-end-12 row-start-1 row-end-11
                        border-2 border-[var(--metal-dark2)] rounded-[10px] 
                        shadow-[5px_5px_20px_1px_black] p-4 gap-4
                        relative overflow-hidden backdrop-blur-sm
                        ">
                        {/* Glassmorphism blur background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--metal-dark5)] via-[var(--metal-dark5)] to-[var(--metal-dark2)]  blur-xl -z-10"></div>
                        
                        <div className="text-white center w-full p-1 bg-[var(--dark-variant)]/80 
                            rounded-[10px] border-2 border-[var(--metal-dark2)] shadow-[5px_5px_10px_1px_black]
                            backdrop-blur-md">
                            Tools
                        </div>
                        <div className="grid grid-cols-2 w-full h-full gap-4">
                            {Tools.map((tool, index) => (
                                <div key={index} className="flex flex-col items-center justify-center gap-1   flex-1 
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
                                    <span className="text-white text-xs mt-2 text-center leading-tight">{tool.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>                

                    {/* hover:bg-gradient-to-br from-[var(--moon-phases-b)] via-[var(--moon-phases-b)] to-[var(--moon-phases-)] transition-all duration-500 */}
                    
                    {/* BACKEND */}
                    <div className="flex flex-col items-center justify-start 
                        col-start-3 col-end-8 row-start-6 row-end-11
                        border-2 border-[var(--metal-dark2)] rounded-[10px] 
                        shadow-[5px_5px_20px_1px_black] p-4 gap-4
                        relative overflow-hidden backdrop-blur-sm ">

                        {/* Glassmorphism blur background */}
                        <div className="absolute inset-0  blur-xl -z-10"></div>
                        
                        <div className="text-white center w-full p-1 bg-[var(--dark-variant)]/80 
                            rounded-[10px] border-2 border-[var(--metal-dark2)] shadow-[5px_5px_10px_1px_black]
                            backdrop-blur-md">
                            Backend
                        </div>
                        <div className="grid grid-cols-4 gap-4 w-full h-full ">
                            {BackEnd.map((tech, index) => (
                                <div 
                                    key={index} 
                                    className="flex flex-col items-center justify-center gap-2   flex-1 
                                        bg-white/5 rounded-2xl backdrop-blur-md
                                        border border-white/10
                                        hover:bg-white/10 hover:border-white/20
                                        hover:shadow-[0_0_15px_2px_rgba(0,0,0,0.5)] 
                                        transition-all duration-500 hover:scale-101">
                                    <img 
                                        src={tech.src} 
                                        alt={tech.label}
                                        className={`w-6 h-6 object-contain ${
                                            tech.label === "ExpressJS" ? "invert" : ""
                                        }`}
                                    />
                                    <span className="text-xs text-center text-[var(--main-white)]">
                                        {tech.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>



                    {/* DATABASE */}
                    <div className="flex flex-col items-center justify-start 
                        col-start-1 col-end-3 row-start-6 row-end-11
                        rounded-[10px] border-2 border-[var(--metal-dark2)]
                        shadow-[5px_5px_20px_1px_black] p-4 gap-4
                        relative overflow-hidden backdrop-blur-sm">
                        {/* Glassmorphism blur background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--metal-dark5)] via-[var(--metal-dark5)] to-[var(--metal-dark1)] blur-xl -z-10"></div>
                        
                        <div className="text-white center w-full p-1 bg-[var(--dark-variant)]/80 
                            rounded-[10px] border-2 border-[var(--metal-dark2)] shadow-[5px_5px_10px_1px_black]
                            backdrop-blur-md">
                            Database
                        </div>
                        <div className="flex flex-col gap-3 w-full h-full">
                            {Database.map((db, index) => (
                                <div key={index} className="flex flex-col items-center justify-center  flex-1 gap-1 
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
                                    <span className="text-white text-[10px] text-center">{db.label}</span>
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