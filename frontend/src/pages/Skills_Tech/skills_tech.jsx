import "./skills_tech.module.css"
import st from "./skills_tech.module.css"




function Skills_Tech(){

    return(
  
        <section className={`${st.skills_tech}`}>




            <div className={`box ${st.skills_tech_contents_frame}`}>    

                {/* header */}
                <ul className={`${st.st_part} ${st.header}`}>

                    <ol className={`${st.header_part} ${st.left}`}> 

                  

                    </ol>

                    <ol className={`${st.header_part} ${st.middle}`}> 

                        <p>SKILLS</p> 
                        <p>&</p> 
                        <p>TECHNOLOGIES</p>           

                    </ol>

                    <ol className={`${st.header_part} ${st.right}`}>
                        
                    </ol>

                </ul >
    
                <div className={`${st.st_part} ${st.content_grid_frame}`}>
                   
                    <ol className={`${st.bento_stack } ${st.front_end}`}>

                        <div className="bs_headers front_end_header">
                                
                        </div>
                        
                    </ol>

                    <ol className={`${st.bento_stack} ${st.back_end}`}>

                        
                        <div className="bs_headers front_end_header">
                                
                        </div>

                    </ol>

                     <ol className={`${st.bento_stack} ${st.tools}`}>

        
                        <div className="bs_headers front_end_header">
                                
                        </div>
                       
                    </ol>

                    <ol className={`${st.bento_stack} ${st.version_control}`}>
                      
                        <div className="bs_headers front_end_header">
                                
                        </div>

                    </ol>

                    <ol className={`${st.bento_stack} ${st.soft_skills}`}>


                        <div className="bs_headers front_end_header">
                                
                        </div>
                       
                    </ol>
                
                   
                
                </div>

            </div>
         
        </section>



    )

}

export default Skills_Tech