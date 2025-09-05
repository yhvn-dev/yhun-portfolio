import React from 'react'
import './project_cat.css'
import useScrollAnimation from '../../../hooks/userscroll_animation'

function Project_Cat() {

useScrollAnimation("mt_content_frame")


  return (
    
     <div className="projects_box moving_text_intro_frame">

        <ul className="box mt_content_frame">

            <ol className="mt_box mt_header">
                mt_header
            </ol>

            <ol className="mt_box mt_screen bg-blue-500" id="mt_screen">
                <p>PROJECTS</p>                      
            </ol>

        </ul>

    </div>


  )
}

export default Project_Cat