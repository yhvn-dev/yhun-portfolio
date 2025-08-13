import { useEffect } from "react";
import Header from "./header";
import Sidebar from "./sidebar";

function Hero() {

    useEffect(() => {
    const hookText = document.getElementById("hook_text");
    const hookFrame = hookText.parentElement.parentElement; 

    const handleMouseOver = (event) => {
        hookFrame.style.backgroundColor = "hsl(258, 44%, 93%)";
        let target = event.target
        target.style.color = "hsl(0, 2%, 14%)";
    };
    const handleMouseOut = (event) => {
        hookFrame.style.backgroundColor = ""; 
        let target = event.target
        target.style.color = "hsl(258, 44%, 93%)";
    };



    hookText.addEventListener("mouseover", handleMouseOver);
    hookText.addEventListener("mouseout", handleMouseOut);

    return () => {
        hookText.removeEventListener("mouseover", handleMouseOver);
        hookText.removeEventListener("mouseout", handleMouseOut);
    };
    }, []);



    return (
        <section className="hero">
            <Header />
            <Sidebar></Sidebar>

            <div className="main_wrapper">

                
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
                            My goal is to keep creating projects that inspire curiosity and deliver great user experiences
                        </p>
                    </div>

                    <div className="bento_text contact">
                        <p id="contact">contact</p>
                    </div>
                </div>
            </div>





        </section>
    );
}

export default Hero;
