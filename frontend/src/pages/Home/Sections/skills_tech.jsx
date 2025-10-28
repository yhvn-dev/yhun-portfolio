import { FrontEnd,BackEnd,Tools,Database} from "../../../data/image_resources"

function Skills_Tech(){

    return(

    
        <section className="sections column col-start-1 col-end-2 row-start-3 row-end-3 w-full">

            {/* MAIN BOX   */}
            <main className="flex flex-col items-center justify-start col-start-2 col-end-2 row-start-2 row-end-3 h-full w-full rounded-2xl p-1">
                {/* Header */}
                <div className="center w-full h-[20%]">
                    <p className="monu-txt text-2xl text-[var(--main-white)]">Skills & Technologies</p>
                </div>
        
            {/* Grid Layout */}
            <div className="grid grid-cols-10 grid-rows-10 w-full h-[80%] rounded-[10px] gap-4 ">
            
                 {/* FRONTEND */}
                <div className="flex flex-col items-center justify-start 
                    col-start-1 col-end-9 row-start-1 row-end-6
                    border-2 border-[var(--metal-dark2)] rounded-[10px] 
                    shadow-[5px_5px_20px_1px_black] p-4 gap-4">
                    <div className="text-white center w-full h-[15%] bg-[var(--dark-variant)] 
                    rounded-[10px] border-2 border-[var(--metal-dark2)] shadow-[5px_5px_10px_1px_black]">
                    Frontend
                    </div>
                    <div className="grid grid-cols-4 gap-4 w-full h-full ">
                    {FrontEnd.map((item, index) => (
                        <div key={index} className="column gap-2  rounded-[10px]">
                            
                            <img
                                src={item.src}
                                alt={item.label}
                                className="w-12 h-auto object-contain p-2 bg-[var(--dark-variant)]
                                rounded-2xl transition-all duration-300 hover:scale-105 "
                            />
                            <p className="tech-label text-[0.7rem] text-center">{item.label}</p>
                        </div>
                    ))}
                    </div>
                </div>




                {/* TOOLS */}
                <div className="flex flex-col items-center justify-start 
                    col-start-9 col-end-12 row-start-1 row-end-11
                    border-2 border-[var(--metal-dark2)] rounded-[10px] 
                    shadow-[5px_5px_20px_1px_black] p-4 gap-4">
                    <div className="text-white center w-full  p-1 bg-[var(--dark-variant)] 
                    rounded-[10px] border-2 border-[var(--metal-dark2)] shadow-[5px_5px_10px_1px_black]">
                    Tools
                    </div>
                    <div className="grid grid-cols-2 gap-2s w-full h-full overflow-y-auto">
                    {Tools.map((item, index) => (
                        <div key={index} className="column rounded-[10px] gap-2">
                            <img
                                src={item.src}
                                alt={item.label}
                                className="w-12 h-auto object-contain p-2 bg-[var(--dark-variant)]
                                rounded-2xl transition-all duration-300 hover:scale-105  "
                            />
                            <p className="tech-label text-[0.7rem] text-center text-[var(--main-white)]">{item.label}</p>
                        </div>
                    ))}
                    </div>
                </div>



                {/* BACKEND */}
                <div className="flex flex-col items-center justify-start 
                    col-start-3 col-end-9 row-start-6 row-end-11
                    border-2 border-[var(--metal-dark2)] rounded-[10px] 
                    shadow-[5px_5px_20px_1px_black] p-4 gap-4">
                    <div className="text-white center w-full  p-1 bg-[var(--dark-variant)] 
                    rounded-[10px] border-2 border-[var(--metal-dark2)] shadow-[5px_5px_10px_1px_black]">
                    Backend
                    </div>
                    <div className="grid grid-cols-4 gap-4 w-full h-full overflow-y-auto">
                    {BackEnd.map((item, index) => (
                        <div key={index} className="column gap-2">
                        <img
                            src={item.src}
                            alt={item.label}
                            className="w-12 h-auto object-contain p-2 bg-[var(--dark-variant)]
                                rounded-2xl transition-all duration-300 hover:scale-105 "
                        />
                        <p className="tech-label text-[0.7rem] text-center">{item.label}</p>
                        </div>
                    ))}
                    </div>
                </div>

                {/* DATABASE */}
                <div className="flex flex-col items-center justify-start 
                    col-start-1 col-end-3 row-start-6 row-end-11
                    border-2 border-[var(--metal-dark2)] rounded-[10px] 
                    shadow-[5px_5px_20px_1px_black] p-4 gap-4">
                    <div className="text-white center w-full p-1 bg-[var(--dark-variant)] 
                    rounded-[10px] border-2 border-[var(--metal-dark2)] shadow-[5px_5px_10px_1px_black]">
                        Database
                    </div>
                    <div className="column gap-4 w-full h-full overflow-y-auto">
                    {Database.map((item, index) => (
                        <div key={index} className="flex flex-col items-center gap-2">
                        <img
                            src={item.src}
                            alt={item.label}
                            className="w-12 h-auto object-contain p-2 bg-[var(--dark-variant)]
                            rounded-2xl transition-all duration-300 hover:scale-105 "
                        />
                        <p className="tech-label text-[0.7rem] text-center">{item.label}</p>
                        </div>
                    ))}
                    </div>
                </div>    
            </div>
            
            </main>

        </section>
    )
}

export default Skills_Tech