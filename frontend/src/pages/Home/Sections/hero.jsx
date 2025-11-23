
function Hero() {

    return (
        <>
        <section className="sections w-full
        col-start-1 col-end-1 row-start-1 row-end-2 border-none ">

            <div className="sections col-start-1 col-end-4 row-start-1 row-end-4  border-none">
                    
           
                <main className="hero-main-box flex flex-col items-center justify-start col-start-1 col-span-full md:col-start-2 md:col-end-2 row-start-2 row-end-3 
                    center bg-[var(--metal-dark5)] border-r-5 border-l-5 border-t-5 border-[var(--metal-dark2)] shadow-[0px_10px_5px_0px_rgba(0,0,0,0.8)]
                    h-full w-full rounded-2xl overflow-hidden">

                    <div className="box-header w-full h-[3rem] border-[1px] border-[var(--dark-variant)]
                        flex justify-center items-center">
                        <ul className="flex items-center justify-start w-full h-full px-4 rounded-[10px]">
                            <div className="circ w-[0.8rem] h-[0.8rem] rounded-full bg-red-500 mx-1"></div>
                            <div className="circ w-[0.8rem] h-[0.8rem] rounded-full bg-orange-500 mx-1"></div>
                            <div className="circ w-[0.8rem] h-[0.8rem] rounded-full bg-green-500 mx-1"></div>
                        </ul>
                    </div>                

                    <div className="flex column flex-col items-center center h-full w-full ">
        
                        <div className="w-full flex-col flex items-start justify-start px-4">                     
                            <p className="hook-txt text-[7rem] text-start w-full center">HI I'M JHUN</p>
                            <p className="text-start w-full text-[var(--metal-dark4)] mx-4">Full-Stack Web Developer</p>  
                            <p className="text-start w-full text-[var(--metal-dark4)] text-xs mx-4">
                                I build end-to-end solutions with precision and care. <br/>
                                I seamlessly integrate UI/UX design with backend development and security <br/>
                                to create robust, user-friendly applications.
                            </p>
                        </div>

                        <div className="flex items-end justify-start flex-col w-full p-4">
                            <i className="text-[var(--metal-dark4)] text-sm">College Student At Sariaya, Quezon Philippines</i>
                            <i className="text-[var(--metal-dark4)] text-sm">jhunguidef@gmail.com</i>         
                        </div>

                    </div>
                
                </main> 

            </div>
    
        </section>
        </>
    );
}

export default Hero;

