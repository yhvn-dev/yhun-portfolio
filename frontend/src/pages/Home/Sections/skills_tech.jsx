
import {useScrollAnimation} from "../../../hooks/animations"


function Skills_Tech(){

    useScrollAnimation("skills_tech_contents_frame")
    useScrollAnimation("st_triangle_c")

    return(

    
        <section className="sections column col-start-1 col-end-2 row-start-3 row-end-3 w-full">
            {/* MAIN BOX   */}
            <main className="flex flex-col items-center justify-start col-start-2 col-end-2 row-start-2 row-end-3 h-full w-full rounded-2xl p-1">

            {/* Header */}
            <div className="center w-full h-[20%]">
                <p className="monu-txt text-2xl">Skills & Technologies</p>
            </div>
    
            {/* Grid Layout */}
            <div className="grid grid-cols-10 grid-rows-10 w-full h-[80%] rounded-[10px] gap-4">
        
            {/* CARD */}
                <div className="relative p-4 gap-4 grid grid-rows-10 grid-cols-1 col-start-1 col-end-8 row-start-1 row-end-7 border-2 border-[var(--metal-dark2)] rounded-[10px] shadow-[5px_5px_20px_1px_black] overflow-hidden">
                {/* Header Background */}
    
                <header className="relative center w-full h-full rounded-[10px] 
                row-start-1 row-end-4 bg-[var(--dark-variant)] 
                overflow-hidden p-4 border-2 border-[var(--metal-dark2)]
                shadow-[5px_5px_10px_1px_black]
                ">
    
                    <div className="about-bg-header absolute rounded-[10px] w-[98%] h-[98%] overflow-hidden">
                    <div className="absolute bg-[var(--dark-variant)] right-0 top-0 rounded-bl-[90%] w-[50%] h-[90%]"></div>
                    <div className="absolute bg-[var(--dark-variant)] rounded-tr-[90%] left-0 bottom-0 w-[50%] h-[90%]"></div>
                    </div>
                    <div className="absolute bg-transparent backdrop-blur-[50px] rounded-[10px] center w-full h-full"></div>
    
                </header>
    
                {/* Profile Image */}
                <div className="center absolute top-15 w-full h-[30%] p-4 rounded">
                    <div className="flex items-center justify-start relative mx-8 w-full h-full">

                    </div>
                </div>
    
                {/* Info Section */}
                <div className="column-start p-4 row-start-4 row-span-full rounded-[10px] bg-[var(--dark-variant)]">
                    <p className="text-2xl mt-10">Jhunguide Flores</p>
                    <a className="text-sm text-[var(--metal-dark4)] mb-4">@__jhvn</a>
                    <p className="text-sm text-[var(--metal-dark4)]">
                    I build end-to-end solutions with precision and care. I seamlessly integrate UI/UX design with backend development and security to create robust, user-friendly applications.
                    </p>
    
            
                <ul className="flex items-center justify-evenly mt-4 h-full w-full list-none rounded-[10px]">
                    
                </ul>
                
                </div>
                </div>
    
    
                {/* TECH STACK  ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== */}
                <div className="flex flex-col items-center justify-start col-start-8 col-end-11 row-start-1 row-end-7
                border-2 border-[var(--metal-dark2)] rounded-[10px] 
                shadow-[5px_5px_20px_1px_black] p-4 gap-4">
    
                <div className="center w-full p-4 bg-[var(--dark-variant)] 
                rounded-[10px] border-2 border-[var(--metal-dark2)] 
                shadow-[5px_5px_10px_1px_black]">
                    Tech Stack
                </div>
    
                <div className="relative center w-full h-[400px] 
                rounded-[10px] overflow-hidden ">
    
                    <div className="flex items-center justify-center flex-col 
                    animate-scroll-stack  w-full">
                
                    </div>
                </div>
                </div>
            
                {/* DESCRIPTION */}
                <div className="flex items-start justify-start p-4 
                col-start-4 col-end-11 row-start-7 row-end-11 border-2 border-[var(--metal-dark2)] rounded-[10px] shadow-[5px_5px_20px_1px_black]">
    
                
                </div>
                <div className="col-start-1 col-end-4 row-start-7 row-end-7 border-2 border-[var(--metal-dark2)] rounded-[10px] shadow-[5px_5px_20px_1px_black]">
                    tags
                </div>
                <div className=" column w-full h-full p-4 col-start-1 col-end-4 row-start-8 row-end-11 border-2 border-[var(--metal-dark2)] rounded-[10px] shadow-[5px_5px_20px_1px_black]">
                    <a className="center px-4 p-1 border-[1px] rounded-[10px]">
                
                    <p className="text-sm">More</p></a>
                </div>           
            </div>
            </main>

        </section>
    )
}

export default Skills_Tech