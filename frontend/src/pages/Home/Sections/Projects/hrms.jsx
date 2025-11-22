import HRMS_Logo from "../../../../assets/Images/hrms_images/NodeLab LOGO 1.png"
import HRMS_Front from "../../../../assets/Images/hrms_images/d-hrms-front-1.png"
import { ProjectTemplate } from '../../../../components/project_template';
import {FrontEnd, BackEnd, Database } from "../../../../data/image_resources";


function Hrms() {
  
  return (

    <main className="h-full flex flex-col items-center justify-start
       col-start-1 col-end-3 row-start-3 row-end-3
       overflow-hidden border-8 border-[var(--metal-dark1)] rounded-2xl
       bg-gradient-to-tr from-[var(--metal-dark5)] to-[var(--metal-dark1)] cursor-pointer 
       shadow-[0px_14px_5px_1px] shadow-black">
 
        <ProjectTemplate
           Project_Logo={ <img className="w-18 h-10" src={HRMS_Logo}/>  } 
           Project_Name={<p className="NODELAB_TEXT">NODELAB</p>} 
           Project_Img={HRMS_Front}
           defaultValue={"nodelab.hrms"}
           Project_Descr={<p>A Web based Human Resource Management System, powered by HTML,CSS,Javascript, Php and MYSQL. 
           Designed to make recruitment, employee management, and HR workflows more efficient. 
           It allows HR staff to manage job postings, track applicants, and maintain employee records, while providing employees and job seekers with an organized, user-friendly platform for accessing information. Built to reduce manual work, improve accuracy, and support efficient HR operations in the digital age. </p>}
           Tech_Stack={
             <div className="flex gap-8">
                {FrontEnd.filter(item => item.label === "HTML5").map((item, index) => (
                <img 
                  key={index} 
                  src={item.src} 
                  className="w-8 h-8" 
                  alt={item.label}
                />
              ))}
                 {FrontEnd.filter(item => item.label === "CSS").map((item, index) => (
                <img 
                  key={index} 
                  src={item.src} 
                  className="w-8 h-8" 
                  alt={item.label}/>
              ))}
                {FrontEnd.filter(item => item.label === "Javascript").map((item, index) => (
                <img 
                  key={index} 
                  src={item.src} 
                  className="w-8 h-8" 
                  alt={item.label}/>
              ))}
                {BackEnd.filter(item => item.label === "Php").map((item, index) => (
                <img 
                  key={index} 
                  src={item.src} 
                  className="w-10 h-10" 
                  alt={item.label}/>
              ))}        
               {Database.filter(item => item.label === "MySQL").map((item, index) => (
                <img 
                  key={index} 
                  src={item.src} 
                  className="w-10 h-10" 
                  alt={item.label}/>
              ))}
               
            </div>
           }/>
    
       
     </main>
  )


}

export default Hrms;