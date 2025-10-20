
import Project_Label from "../Sections/Projects/project_label"
import Rgrr_jobfinder from "./Projects/rgrr_jobfinder";
import Hrms from "./Projects/hrms";
import Ptrs from "./Projects/ptrs";
import Lms from "./Projects/lms"

function Projects(){
    
    return(
        <div className="sections grid grid-cols-1
        col-start-1 col-end-2  row-start-4 row-end-4 w-full h-full">
            <div className="grid grid-rows-[50vh_150vh_150vh_150vh_150vh] col-start-2 col-end-2  row-span-full">
                <Project_Label/>
                <Rgrr_jobfinder/>
                <Hrms/>
                <Ptrs/>
                <Lms/>
             </div>
        </div>
    
    )

}


export default Projects;