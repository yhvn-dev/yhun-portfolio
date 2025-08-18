import { useEffect,useRef, useState } from "react";
import Header from "../Header/header";
import Sidebar from "../Sidebar/sidebar";
import {motion} from "framer-motion"

const lightVariant = {
    hidden:{opacity:0, y:0 },
    visible:{opacity:1, y:0},
    transition:{duration:2, ease:"ease in out"}
}

const parentVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};



function Hero() {
  
    return (

        <>

        <section className="sections hero">
            <Header/>
            <Sidebar></Sidebar>

            {/* HERO BACKDROP */}
            <div className="bd bd_main_wrapper">
                
                <motion.div
                    variants={lightVariant}
                    initial={{opacity: 0, y:50}}
                    animate="visible"  
                    transition={{ duration: 2,               
                    ease: "easeInOut",
                    times: [0,  1],  }}
                    className="bd_light">
                   

                </motion.div>

            </div>
            
       
            <div 
            variants={parentVariant}
            initial="hidden"
            animate="visible"
            transition={{ duration: 2,               
            ease: "easeInOut",
            times: [0,  1],  }}
            className="box main_wrapper">
          
                <div className="hero_grid browser_header">

                    <ul className="circ_div">
                        <div className="circ" id="a"></div>
                        <div className="circ" id="b"></div>
                        <div className="circ" id="c"></div>
                    </ul>

                </div>                

                <div className="text_content_main_frame">


                    <div className="hero_grid hook_frame">
                        
                        <ul className="bento_text hook" id="hook">
                            <p id="hook_text">HI!, IM JHUN</p>
                        </ul>

                    </div>


           
                    <div className="hero_grid text_frame">
                        <div className="bento_text role">
                            <span id="role_text">Fullstack Web Developer</span>
                            <p id="selling_prop_text_1">
                                Fullstack skills in progress, front-end skill in full swing - building, learning, and exploring.
                            </p>
                            <p id="selling_prop_text_2">
                                I thrive on building responsive, user-focused designs while understanding how the backend powers them.
                            </p>
                            <p id="selling_prop_text_3">
                                My goal is to keep creating projects that inspire curiosity and deliver great user experiences.
                            </p>
                        </div>

                        <div className="bento_text hero_contact">

                            <ul className="hc_contact hc_more">
                                <a className="links more" id="more" href="#">

                                    <p className="more_c">More</p>

                                    <ol>
                                        
                                    </ol>
                                    <svg className="more_c" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
                                    
                                </a>
                            </ul>
                            
                            <ul className="hc_contact hc_location">

                                <p>College Student At Sariaya, Quezon Philippines</p>
                                                <p>jhunguidef@gmail.com</p>
                            </ul>


                        </div>


                    </div>

                </div>
              
            </div>
            {/* end of main wrapper */}

        </section>

      
        
        </>
        
      
        
    );
}

export default Hero;
