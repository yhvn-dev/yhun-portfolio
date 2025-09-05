import './projects.css'

import Project_Cat from './project_cat/project_cat.jsx'
import Hrms from './hrms/hrms.jsx'
import Ptrs from './ptrs/ptrs.jsx'


import useScrollAnimation from "../../hooks/userscroll_animation.jsx";

function Projects(){

    useScrollAnimation("mt_content_frame")
    useScrollAnimation("hrm_box")
  
    return(
        
        <section className="sections projects" >
        
            <Project_Cat></Project_Cat>
            <Hrms></Hrms>
            <Ptrs></Ptrs>

        </section>

    )
    
}
 
export default Projects

