import HRMS_Logo from "../../../../assets/Images/hrms_images/NodeLab LOGO 1.png"
import HRMS_Logo_2 from "../../../../assets/Images/hrms_images/NodeLab LOGO 2.png"
import HRMS_Front from "../../../../assets/Images/hrms_images/d-hrms-front-1.png"
import { ProjectTemplate } from '../../../../components/project_template';

function Hrms() {
  

  return (

    <main className="h-full flex flex-col items-center justify-start
       col-start-1 col-end-3 row-start-2 row-end-2
       overflow-hidden border-8 border-[var(--metal-dark1)] rounded-2xl
       bg-gradient-to-tr from-[var(--metal-dark5)] to-[var(--metal-dark1)] cursor-pointer 
       shadow-[0px_14px_5px_1px] shadow-black">
 
        <ProjectTemplate
           Project_Logo={<img className="w-18 h-10" src={HRMS_Logo}/>} 
           Project_Name={<p className="NODELAB_TEXT">NODELAB</p>} 
           Project_Img={HRMS_Front}
           defaultValue={"nodelab.hrms"}
           Project_Descr={<p>Description</p>}
           Tech_Stack={<p>Tech Stack</p>}
       />
       
     </main>
  )


}

export default Hrms;