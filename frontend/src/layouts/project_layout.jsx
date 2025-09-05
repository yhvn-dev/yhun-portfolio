import React from 'react'

import "./project_layout.css"

function Project_Layout(props) {
  return (
         <div className="projects_box projects_main_wrapper ">

                <ul className="pscreen_box">

                    <div class="pcontent_frame project_screen">
                          {props.img}
                    </div>

                    <div class="pcontent_framee project_context">
                         {props.context}
                    </div>
                       
                </ul>
                
            </div>
  )
}

export default  Project_Layout