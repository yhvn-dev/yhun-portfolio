
import RGRR_Logo from "../../../../assets/Images/rgrr_images/RGRR LOGO FINAL 3.png"
import RGRR_Front from "../../../../assets/Images/rgrr_images/RGRR Front.png"
import { ProjectTemplate } from '../../../../components/project_template';


function Rgrr_jobfinder() {
  return (
    <main className="h-full flex flex-col items-center justify-start
      col-start-1 col-end-3 row-start-3 row-end-3
      overflow-hidden border-8 border-[var(--metal-dark1)] rounded-2xl
      bg-gradient-to-tr from-[var(--metal-dark5)] to-[var(--metal-dark1)] cursor-pointer">

       <ProjectTemplate
          Project_Logo={<img className="w-18 h-15" src={RGRR_Logo}/>} 
          Project_Name={<p>RGRR Internship Hub</p>} 
          Project_Img={RGRR_Front}
          defaultValue={"rgrr.internship.com"}
          Project_Descr={<p>Description</p>}
          Tech_Stack={<p>Tech Stack</p>}/>

    </main>
  
  )
}

export default Rgrr_jobfinder