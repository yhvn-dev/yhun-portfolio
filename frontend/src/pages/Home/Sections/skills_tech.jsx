import { FrontEnd, BackEnd, Tools, Database } from "../../../data/image_resources";

function Skills_Tech() {
    return (
        <section className="sections column col-start-1 col-end-2 row-start-3 row-end-3 w-full">
            {/* MAIN BOX */}
            <main className="flex flex-col items-center justify-start col-start-2 col-end-2 row-start-2 row-end-3 h-full w-full rounded-2xl p-1">
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
                        shadow-[5px_5px_20px_1px_black]  p-4  gap-4">
                        <div className="text-white center w-full h-[15%] bg-[var(--dark-variant)] 
                            rounded-[10px] border-2 border-[var(--metal-dark2)] shadow-[5px_5px_10px_1px_black]">
                            Frontend
                        </div>
                        <div className="grid grid-cols-4 gap-4 w-full h-full ">
                            {FrontEnd.map((tech, index) => (
                                <div key={index} className="flex flex-col items-center justify-center gap-1 
                                    bg-[var(--metal-dark1)] rounded-xl
                                 
                                    hover:shadow-[0_0_15px_2px_rgba(255,255,255,0.3)] 
                                    transition-all duration-300 hover:scale-105">
                                    <img 
                                        src={tech.src} 
                                        alt={tech.label}
                                        className="w-8 h-8 object-contain"
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
                        shadow-[5px_5px_20px_1px_black] p-4 gap-4">
                        <div className="text-white center w-full p-1 bg-[var(--dark-variant)] 
                            rounded-[10px] border-2 border-[var(--metal-dark2)] shadow-[5px_5px_10px_1px_black]">
                            Tools
                        </div>
                        <div className="grid grid-cols-2 g w-full h-full  gap-4 ">
                            {Tools.map((tool, index) => (
                                <div key={index} className="flex flex-col items-center justify-center gap-1 
                                    bg-[var(--metal-dark1)] rounded-xl p-2                           
                                    hover:shadow-[0_0_15px_2px_rgba(255,255,255,0.3)] 
                                    transition-all duration-300 hover:scale-105">
                                    <img 
                                        src={tool.src} 
                                        alt={tool.label}
                                        className="w-8 h-8 object-contain"
                                    />
                                    <span className="text-white text-xs  mt-2 text-center leading-tight">{tool.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>                


                    {/* BACKEND */}
                    <div className="flex flex-col items-center justify-start 
                        col-start-3 col-end-8 row-start-6 row-end-11
                        border-2 border-[var(--metal-dark2)] rounded-[10px] 
                        shadow-[5px_5px_20px_1px_black] p-4 gap-4">
                        <div className="text-white center w-full p-1 bg-[var(--dark-variant)] 
                            rounded-[10px] border-2 border-[var(--metal-dark2)] shadow-[5px_5px_10px_1px_black]">
                            Backend
                        </div>
                       <div className="grid grid-cols-4 gap-4 w-full h-full ">
                        {BackEnd.map((tech, index) => (
                            <div 
                                key={index} 
                                className={`flex flex-col bg-[var(--metal-dark1)] items-center justify-center gap-2 
                                    rounded-2xl transition-all duration-300 hover:scale-105
                                    hover:shadow-[0_0_15px_2px_rgba(255,255,255,0.3)]                             
                                `}
                            >
                                <img 
                                    src={tech.src} 
                                    alt={tech.label}
                                    className={`w-10 h-10 object-contain ${
                                        tech.label === "ExpressJS" ? "invert" : ""
                                    }`}
                                />
                                <span 
                                    className={`text-xs text-center text-[var(--main-white)] `}
                                >
                                    {tech.label}
                                </span>
                            </div>
                        ))}
                    </div>
                    </div>

                    {/* DATABASE */}
                    <div className="flex flex-col items-center justify-start 
                        col-start-1 col-end-3 row-start-6 row-end-11
                         rounded-[10px]   border-2 border-[var(--metal-dark2)]
                        shadow-[5px_5px_20px_1px_black] p-4 gap-4">
                        <div className="text-white center w-full p-1 bg-[var(--dark-variant)] 
                            rounded-[10px] border-2 border-[var(--metal-dark2)] shadow-[5px_5px_10px_1px_black]">
                            Database
                        </div>
                        <div className="flex flex-col gap-3 w-full h-full ">
                            {Database.map((db, index) => (
                                <div key={index} className="flex flex-col items-center justify-center gap-1 
                                    rounded-xl p-3  bg-[var(--metal-dark1)]
                                    hover:shadow-[0_0_15px_2px_rgba(255,255,255,0.3)] 
                                    transition-all duration-300 hover:scale-105">
                                    <img 
                                        src={db.src} 
                                        alt={db.label}
                                        className="w-10 h-10 object-contain "
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