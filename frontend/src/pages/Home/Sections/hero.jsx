
import useScrollAnimation from "../../../hooks/userscroll_animation";
function Hero() {
  
    useScrollAnimation("main_wrapper")
    useScrollAnimation("bd_light")
    useScrollAnimation("circ")

    return (
    
        <>
        <section className="sections  w-full hero 
        col-start-1 col-end-1 row-start-1 row-end-2
        ">
        
            {/* HERO BACKDROP */}
            <div className="relative center  col-start-1 col-end-4 row-start-1 row-end-4 l ">                 
                <div  className="center bd_lights absolute   
                bg-[var(--metal-dark5)] shadow-[50px_0px_10000px_2px_gray,-50px_0px_10000px_2px_gray]
                 top-[30%] rounded-br-full rounded-bl-full h-[50%] w-[50%]">          
                </div>
            </div>
            
            

            {/* MAIN BOX */}
          <main className="z-10 flex flex-col items-center justify-start col-start-2 col-end-2 row-start-2 row-end-3 
            center bg-[var(--metal-dark5)] border-4  border-[var(--dark-variant)]  h-full w-full rounded-2xl overflow-hidden">
        
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

                <div className="flex column flex-col items-center center h-full p-4">

            
                    <div className="w-full h-full flex-col flex items-start justify-start p-4 ">                     
                        <p className="hook-txt hook-txt-2 text-5xl px-12 py-8
                        flex justify-end align-start text-[var(--metal-dark4)] w-[100%]">
                            I Deliver end-to-end solutions 
                        </p>
                        <p className="hook-txt  text-3xl 
                        flex items-center justify-end text-[var(--metal-dark4)] px-12 w-[100%]">
                            with precision and clarity
                        </p>
                                   
                    </div>

                    <div className="flex items-start justify-center h-[50%] w-full p-4">

                        <ul className="flex item-center justify-start w-full px-12">
                            <a className="flex items-center justify-center flex-row-reverse
                             border-[1px] rounded-[10px] border-[var(--metal-dark4)] px-4 py-1" >
                                <p className=" border-1 border-[var(--metal-dark4)] mx-2  rounded-[10px]">More</p>
                                <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>                                 
                            </a>
                        </ul>         

                        <ul className="flex flex-col items-end justify-center h-full px-12 w-full">
                            <i  className="text-[var(--metal-dark4)] text-sm">College Student At Sariaya, Quezon Philippines</i>
                            <i  className="text-[var(--metal-dark4)] text-sm">jhunguidef@gmail.com</i>
                        </ul>
                    </div>

                </div>
              
            </main> 
    
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
