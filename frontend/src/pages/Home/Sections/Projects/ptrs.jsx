import PTRS_Logo from "../../../../assets/Images/ptrs_images/HEART ELECT FULL.png"
import PTRS_Db from "../../../../assets/Images/ptrs_images/ptrs 2.png"
import { Desktop_Template } from "../../../../components/project_template"
import {FrontEnd,BackEnd,Database} from "../../../../data/image_resources"
import Github from "../../../../assets/Icons/GITHUB.png"

function Ptrs() {
  return (
    
    <main className="h-full flex flex-col items-center justify-evenly
         col-start-1 col-end-3 row-start-5 row-end-5
         overflow-hidden border-8 border-[var(--metal-dark1)] rounded-2xl
         bg-gradient-to-tr from-[var(--metal-dark5)] to-[var(--metal-dark1)] cursor-pointer">
          <Desktop_Template
             Project_Logo={<img className="w-20 h-10 " src={PTRS_Logo}/>} 
             Project_Name="Heart Elect"
             Project_Img={PTRS_Db}
             ProjectName2={"Heart Elect - Political Track Record System"}
             Resources={<>
                <a href="https://github.com/yhvn-dev/Political-Track-Record-System.git" target="blank">
                  <img src={Github} className="w-14 h-14 p-2 bg-[var(--main-white)] rounded-2xl"/>
               </a>                    
                <p className="text-sm my-4 text-[var(--main-white)]">View On Github</p>
             </>}
             defaultValue={"heartelect.com/ptrs"}
             Project_Descr={
             <p className="text-[11px] sm:text-xs md:text-sm 
            leading-relaxed text-[var(--main-white)]">
                  A desktop-based Political Track Record System developed using Python, CustomTkinter, and MySQL. 
                  This application enables administrators to securely store and manage verified political records 
                  sourced from trusted references. The system provides users with a clean and interactive feed where 
                  they can view politician profiles and track records, as well as engage through features such as 
                  liking or unliking entries. Designed with usability and transparency in mind, this platform offers 
                  an organized and reliable way to access political information.
              </p>}
             Tech_Stack={
                <div className="flex gap-8 my-4">
                      {BackEnd.filter(item => item.label === "Python").map((item, index) => (
                        <div className="center bg-[var(--metal-dark1)] rounded-xl p-2 w-15">
                          <img 
                            key={index} 
                            src={item.src} 
                            className="w-6 h-6" 
                            alt={item.label}
                          />
                        </div>        
                    ))}
                      {FrontEnd.filter(item => item.label === "CustomTkinter").map((item, index) => (
                      <div className="center bg-[var(--metal-dark1)] rounded-xl p-2 w-15">
                        <img 
                          key={index} 
                          src={item.src} 
                          className="w-6 h-6" 
                          alt={item.label}
                        />
                      </div>        
                    ))}
                  
                      {Database.filter(item => item.label === "MySQL").map((item, index) => (
                        <div className="center bg-[var(--metal-dark1)] rounded-xl p-2 w-15">
                          <img 
                            key={index} 
                            src={item.src} 
                            className="w-6 h-6" 
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

export default Ptrs