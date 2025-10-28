
import PTRS_Logo from "../../../../assets/Images/ptrs_images/HEART ELECT FULL.png"
import PTRS_Db from "../../../../assets/Images/ptrs_images/ptrs 2.png"
import { ProjectTemplate } from "../../../../components/project_template"

function Ptrs() {
  return (
    <main className="h-full flex flex-col items-center justify-start
         col-start-1 col-end-3 row-start-4 row-end-4
         overflow-hidden border-8 border-[var(--metal-dark1)] rounded-2xl
         bg-gradient-to-tr from-[var(--metal-dark5)] to-[var(--metal-dark1)] cursor-pointer">
   
          <ProjectTemplate
             Project_Logo={<img className="w-20 h-10" src={PTRS_Logo}/>} 
             Project_Name={<p className="HEART_ELECT_TEXT">Heart Elect</p>} 
             Project_Img={PTRS_Db}
             defaultValue={"heartelect.com/ptrs"}
             Project_Descr={<p>Description</p>}
             Tech_Stack={<p>Tech Stack</p>}
            /> 

       </main>
  )
}

export default Ptrs