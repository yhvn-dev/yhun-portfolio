import HRMS_Logo from "../../../../assets/Images/hrms_images/NodeLab LOGO 1.png"
import HRMS_Front from "../../../../assets/Images/hrms_images/d-hrms-front-1.png"
import { ProjectTemplate } from '../../../../components/project_template';
import {FrontEnd, BackEnd, Database } from "../../../../data/image_resources";
import Github from "../../../../assets/Icons/GITHUB.png"

function Hrms() {
  
  return (
    <main className="h-full flex flex-col items-center justify-evenly
       col-start-1 col-end-3 row-start-3 row-end-3
       overflow-y-auto overflow-x-hidden
       border-4 sm:border-6 md:border-8 border-[var(--metal-dark1)] 
       rounded-xl sm:rounded-2xl
       bg-gradient-to-tr from-[var(--metal-dark5)] to-[var(--metal-dark1)] 
       cursor-pointer 
       shadow-[0px_8px_3px_1px] sm:shadow-[0px_10px_4px_1px] md:shadow-[0px_14px_5px_1px] 
       shadow-black">
 
        <ProjectTemplate
           Project_Logo={
             <img 
               className="w-12 h-7 sm:w-16 sm:h-9 md:w-18 md:h-10" 
               src={HRMS_Logo}
             />
           } 
           Project_Name={
             <p className="NODELAB_TEXT text-xl sm:text-2xl md:text-sm">
               NODELAB
             </p>
           } 
           Project_Img={HRMS_Front}
           defaultValue={"nodelab.hrms"}
           Resources={
             <div className="flex flex-col items-center justify-center">
               <a 
                 href="https://github.com/yhvn-dev/Human-Resource-Management-System-HRMS-.git" 
                 target="_blank"
                 rel="noopener noreferrer"
               >
                 <img 
                   src={Github} 
                   className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 
                              p-1.5 sm:p-2 
                              bg-[var(--main-white)] 
                              rounded-xl sm:rounded-2xl
                              hover:scale-110 transition-transform"
                 />
               </a>                    
               <p className="text-[10px] sm:text-xs md:text-sm 
                             my-2 sm:my-3 md:my-4 
                             text-[var(--main-white)]">
                 View On Github
               </p>
             </div>
           }
           ProjectName2={"Nodelab - Human Resource Management System"}
           Project_Descr={
             <p className="text-[11px] sm:text-xs md:text-sm 
                           leading-relaxed text-[var(--main-white)]">
               A Web based Human Resource Management System, powered by HTML, CSS, Javascript, Php and MYSQL. 
               Designed to make recruitment, employee management, and HR workflows more efficient. 
               It allows HR staff to manage job postings, track applicants, and maintain employee records, 
               while providing employees and job seekers with an organized, user-friendly platform for 
               accessing information. Built to reduce manual work, improve accuracy, and support efficient 
               HR operations in the digital age.
             </p>
           }
           Tech_Stack={
             <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 lg:gap-8 
                             items-center justify-start">
               {FrontEnd.filter(item => item.label === "HTML5").map((item, index) => (
                 <div 
                   key={index}
                   className="flex items-center justify-center 
                              bg-[var(--metal-dark1)] 
                              rounded-lg sm:rounded-xl 
                              p-1.5 sm:p-2 
                              w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-15 lg:h-15"
                 >
                   <img 
                     src={item.src} 
                     className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" 
                     alt={item.label}
                   />
                 </div>
               ))}
               
               {FrontEnd.filter(item => item.label === "CSS").map((item, index) => (
                 <div 
                   key={index}
                   className="flex items-center justify-center 
                              bg-[var(--metal-dark1)] 
                              rounded-lg sm:rounded-xl 
                              p-1.5 sm:p-2 
                              w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-15 lg:h-15"
                 >
                   <img 
                     src={item.src} 
                     className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" 
                     alt={item.label}
                   />
                 </div>
               ))}
               
               {FrontEnd.filter(item => item.label === "Javascript").map((item, index) => (
                 <div 
                   key={index}
                   className="flex items-center justify-center 
                              bg-[var(--metal-dark1)] 
                              rounded-lg sm:rounded-xl 
                              p-1.5 sm:p-2 
                              w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-15 lg:h-15"
                 >
                   <img 
                     src={item.src} 
                     className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" 
                     alt={item.label}
                   />
                 </div>
               ))}
               
               {BackEnd.filter(item => item.label === "Php").map((item, index) => (
                 <div 
                   key={index}
                   className="flex items-center justify-center 
                              bg-[var(--metal-dark1)] 
                              rounded-lg sm:rounded-xl 
                              p-1.5 sm:p-2 
                              w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-15 lg:h-15"
                 >
                   <img 
                     src={item.src} 
                     className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" 
                     alt={item.label}
                   />
                 </div>
               ))}
               
               {Database.filter(item => item.label === "MySQL").map((item, index) => (
                 <div 
                   key={index}
                   className="flex items-center justify-center 
                              bg-[var(--metal-dark1)] 
                              rounded-lg sm:rounded-xl 
                              p-1.5 sm:p-2 
                              w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-15 lg:h-15"
                 >
                   <img 
                     src={item.src} 
                     className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" 
                     alt={item.label}
                   />
                 </div>
               ))}
             </div>
           }
        />
     </main>
  )
}

export default Hrms;