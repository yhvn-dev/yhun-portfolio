import './hrms.css'
import front_a from "../../../assets/Images/hrms_images/d-hrms-front-1.png"
import useScrollAnimation from '../../../hooks/userscroll_animation'


function hrms(){


    useScrollAnimation("hrm_box")

    return(
        <> 
                     
            <section className="projects_box projects_main_wrapper hrms_project">

                <ul className="box pname_box hrm_box">  

                    <div className="hrms_grid hrms_header">
                        header
                    </div>



                    <ol class="hrms_grid project_content_frame">
                            
                        <div className="pcontent_frame screen_frame hrms_screen">
                            <img src={front_a}></img>
                        </div>

                        <div className=" pcontent_frame context_frame hrms_context">

                            <span>Human Resource Management System</span>
                            <p>
                                The Human Resource Management System is a school project developed for improving 
                                efficieny on managing employee data and jobposting process. The system allows HR to manage 
                                employee records, recruitment workflows and jobposting process, while jobseekers has their own 
                                platform that helps navigating jobs and company postions easily. HR can provide detailed jobposts for required positions.
                            </p>

                        </div>

                        <ol class="hrms_grid tech_stack_div"> 
                            tech_stack_div                          
                        </ol>

                    </ol>
                

                </ul>
                
            </section>
        </>

    )

}

export default hrms