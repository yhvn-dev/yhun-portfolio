import PTRS_Logo from "../../../../assets/Images/ptrs_images/HEART ELECT FULL.png"
import PTRS_Db from "../../../../assets/Images/ptrs_images/ptrs 2.png"
import { Desktop_Template } from "../../../../components/project_template"
import {FrontEnd,BackEnd,Database} from "../../../../data/image_resources"
function Ptrs() {
  return (
    
    <main className="h-full flex flex-col items-center justify-start
         col-start-1 col-end-3 row-start-5 row-end-5
         overflow-hidden border-8 border-[var(--metal-dark1)] rounded-2xl
         bg-gradient-to-tr from-[var(--metal-dark5)] to-[var(--metal-dark1)] cursor-pointer">
          <Desktop_Template
             Project_Logo={<img className="w-20 h-10 " src={PTRS_Logo}/>} 
             Project_Name="Heart Elect"
             Project_Img={PTRS_Db}
             ProjectName2={"Heart Elect - Political Track Record System"}
             defaultValue={"heartelect.com/ptrs"}
             Project_Descr={
             <p>
                  A desktop-based Political Track Record System developed using Python, CustomTkinter, and MySQL. 
                  This application enables administrators to securely store and manage verified political records 
                  sourced from trusted references. The system provides users with a clean and interactive feed where 
                  they can view politician profiles and track records, as well as engage through features such as 
                  liking or unliking entries. Designed with usability and transparency in mind, this platform offers 
                  an organized and reliable way to access political information.
              </p>}
             Tech_Stack={
                <div className="flex gap-8">
                      {BackEnd.filter(item => item.label === "Python").map((item, index) => (
                      <img 
                        key={index} 
                        src={item.src} 
                        className="w-10 h-10" 
                        alt={item.label}
                      />
                    ))}
                          {FrontEnd.filter(item => item.label === "CustomTkinter").map((item, index) => (
                      <img 
                        key={index} 
                        src={item.src} 
                        className="w-8 h-8" 
                        alt={item.label}
                      />
                    ))}
                  
                      {Database.filter(item => item.label === "MySQL").map((item, index) => (
                      <img 
                        key={index} 
                        src={item.src} 
                        className="w-10 h-10" 
                        alt={item.label}
                      />
                    ))}
                </div>            
             }
            /> 
       </main>

  )
}

export default Ptrs