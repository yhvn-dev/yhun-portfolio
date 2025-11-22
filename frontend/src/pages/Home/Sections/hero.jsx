import {useScrollAnimation} from "../../../hooks/animations";


function Hero() {
  
    useScrollAnimation("main_wrapper")
    useScrollAnimation("bd_light")
    useScrollAnimation("circ")

    return (
        <>
        <section className="sections w-full hero 
        col-start-1 col-end-1 row-start-1 row-end-2 relative ">

         
            <div className="sections col-start-1 col-end-4 row-start-1 row-end-4  backdrop-blur-[200px]">
                    
                {/* MAIN BOX */}
                <main className="hero-main-box flex flex-col items-center justify-start col-start-2 col-end-2 row-start-2 row-end-3 
                    center bg-[var(--metal-dark5)] border-r-5 border-l-5 border-t-5 border-[var(--metal-dark2)] shadow-[0px_10px_5px_0px_rgba(0,0,0,0.8)]
                    h-full w-full rounded-2xl overflow-hidden">
                
                        <div className="box-header w-full h-[3rem] border-[1px] border-[var(--dark-variant)]
                            flex justify-center items-center">
                            <ul className="flex items-center justify-start w-full h-full 
                            px-4  rounded-[10px]">
                                <div className="circ w-[0.8rem] h-[0.8rem] rounded-full
                                bg-red-500 mx-1"></div>
                                <div className="circ w-[0.8rem] h-[0.8rem] rounded-full
                                bg-orange-500 mx-1"></div>
                                <div className="circ w-[0.8rem] h-[0.8rem] rounded-full
                                bg-green-500 mx-1" ></div>
                            </ul>

                        </div>                

                        <div className="flex column flex-col items-center center h-full  w-full">
        
                            <div className="w-full  flex-col flex items-start justify-start px-4 py-16 ">                     
                                <p className="hook-txt text-[7rem] text-start w-full center">HI I'M JHUN</p>
                                <p className=" text-start w-full text-[var(--metal-dark4)]  mx-4">Full-Stack Web Developer </p>  
                                <p className=" text-start w-full text-[var(--metal-dark4)] text-xs mx-4"> Building Scalable & Responsive Web Applications</p>                                   
                            </div>

                            <div className="flex items-end justify-center flex-col h-[50%] w-full p-4 ">
                                    <i  className="text-[var(--metal-dark4)] text-sm">College Student At Sariaya, Quezon Philippines</i>
                                    <i  className="text-[var(--metal-dark4)] text-sm">jhunguidef@gmail.com</i>         
                            </div>

                        </div>
                    
                    </main> 

                 </div>
    
        </section>
      
        </>
        

    );
}

export default Hero;


// 1. Hero Section (Already done)

// Catchy headline, short intro, maybe an image or animation.

// CTA: “View my work” or “Contact me.”

// 2. About Me / Summary

// Short, readable paragraph about who you are.

// Mention your full-stack skills, preferred technologies, and what drives you.

// Optional: small photo or avatar to humanize your portfolio.

// 3. Skills / Tech Stack

// Visual representation of your skills (icons, progress bars, or cards).

// Split between Front-end, Back-end, Database, and Other Tools.

// This section gives credibility immediately after your intro.

// 4. Projects / Portfolio

// Showcase 3–6 of your best projects.

// Each project:

// Short description

// Tech stack used

// Link to live demo (if possible)

// Link to GitHub repo

// Screenshots or GIFs for visual engagement

// Optional: add a filter by tech for interactivity.

// 5. Experience / Work

// Can include internships, freelance work, or jobs.

// Include role, company, duration, and key contributions.

// For smaller portfolios, you could merge this with projects.

// 6. Testimonials / Recommendations (Optional but impactful)

// Quotes from clients, colleagues, or teachers.

// Adds social proof.

// 7. Contact

// Simple form (name, email, message) or just email + social links.

// CTA like: “Let’s build something together.”

// 8. Footer

// Links to social media, GitHub, LinkedIn, resume download.

// Small copyright notice.
