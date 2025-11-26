import VB2 from "../../../../assets/Images/lms_images/[VB 2]Dashboard.png"
import { Desktop_Template } from "../../../../components/project_template"
import { BackEnd,Database } from "../../../../data/image_resources"
import Github from "../../../../assets/Icons/GITHUB.png"
import LMS from "../../../../assets/Images/lms_images/DASHBOARD_LOGO__BLUE.png"

function Lms() {
  return (

    <main className="pr-main  h-full flex flex-col items-center justify-evenly
        col-start-1 col-end-3 row-start-7 row-end-7 
         overflow-hidden border-8 border-[var(--metal-dark1)] rounded-2xl
         bg-gradient-to-tr from-[var(--metal-dark5)] to-[var(--metal-dark1)] cursor-pointer shadow-[0px_14px_5px_1px] 
       shadow-black z-10">
          <Desktop_Template
             Project_Logo={<img className="w-20 h-10 " src={LMS}/>} 
             Project_Name={<p className="">Celestical Catalog</p>}
             Project_Img={VB2}
            Project_Name_Tab={<p className="pr-name text-sm">Celestial Catalog</p>} 
            defaultValue={"heartelect.com/ptrs"}
             ProjectName2={"Celestial Catalog - Library Management System"}
              Resources={
                <>           
                  <a href="https://github.com/yhvn-dev/Celestial_Catalog.git" target="blank">
                      <img src={Github} className="w-14 h-14 p-2 bg-[var(--main-white)] rounded-2xl"/>
                    </a>             
                    <p className="text-sm my-4 text-[var(--main-white)]">View On Github</p>                        
                </>
              }
             Project_Descr={           
              <p className="text-[11px] sm:text-xs md:text-sm 
                           leading-relaxed text-[var(--main-white)]">
                A Desktop based Library Management application powered by VB.NET and MYSQL to simplify book organization, 
                membership handling, and circulation processes. The system features a secure login, interactive dashboard, 
                and modules for managing books, genres, authors, members, and borrowing transactions. 
                Designed for efficiency, it automates repetitive tasks, reduces errors, and ensures accurate 
                record-keeping—providing librarians and staff with a fast, 
                reliable, and user-friendly tool for daily operations.
              </p>
             }    
             
             
             Tech_Stack={
                <div className="flex gap-8 my-4">
                  {BackEnd.filter(item => item.label === "VisualBasic").map((item, index) => (
                    <div className="stack-div center bg-[var(--metal-dark1)] rounded-xl p-2 w-15" key={item.label}>
                        <img 
                        key={index} 
                        src={item.src} 
                        className="w-6 h-6" 
                        alt={item.label}
                      />
                  </div>
                 
                ))}
                
                 {Database.filter(item => item.label === "MySQL").map((item, index) => (
                    <div className="stack-div center bg-[var(--metal-dark1)] rounded-xl p-2 w-15" key={item.label}>
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

export default Lms