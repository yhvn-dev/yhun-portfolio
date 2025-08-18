import { useEffect } from "react"

function Projects(){

    return(
        
        <section className="sections projects">

            <div className="projects_box moving_text_intro_frame">

                <ul class="box mt_content_frame">

                    <ol className="mt_box mt_header">
                        mt_header
                    </ol>


                    <ol className="mt_box mt_screen" id="mt_screen">
                        <p>PROJECTS</p>                      
                    </ol>


                </ul>

            </div>

            
            <div className="projects_box projects_main_wrapper">

                <ul className="box">

                    
                </ul>
                
            </div>
        
    
        </section>

    )
    
    
}
 
export default Projects

//     useEffect(

//     const scrollers = document.getElementById("mt_screen")
//     if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
//         addAnimation()
//     }
//     function addAnimation(){
//         scrollers.forEach(scroller =>{
//             scroller.setAttribute("data-animated",true)
//         })
//     }

// )

