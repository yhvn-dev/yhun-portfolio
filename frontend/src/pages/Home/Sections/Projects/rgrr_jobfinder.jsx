
import RGRR_Logo from "../../../../assets/Images/rgrr_images/RGRR LOGO FINAL 3.png"
import RGRR_Front from "../../../../assets/Images/rgrr_images/RGRR Front.png"
import { ProjectTemplate } from '../../../../components/project_template';
import { BackEnd } from "../../../../data/image_resources";
import { FrontEnd } from "../../../../data/image_resources";
import { Database } from "../../../../data/image_resources"
import Github  from "../../../../assets/Icons/GITHUB.png"

function Rgrr_jobfinder() {
  return (
    <main className="h-full flex flex-col items-center justify-evenly
      col-start-1 col-end-3 row-start-4 row-end-4
      overflow-hidden border-8 border-[var(--metal-dark1)] rounded-2xl
      bg-gradient-to-tr from-[var(--metal-dark5)] to-[var(--metal-dark1)] cursor-pointer">

       <ProjectTemplate
          Project_Logo={<img className="w-18 h-15" src={RGRR_Logo}/>} 
          Project_Name={<p className="text-sm">RGRR Internship Hub</p>} 
          Project_Img={RGRR_Front}
          defaultValue={"rgrr.internship.com"}
          Resources={ <>
              <a href="https://github.com/rgrr-webmaker/RGRR-Internship-Hub-jhun.git" target="blank">
                <img src={Github} className="w-14 h-14 p-2 bg-[var(--main-white)] rounded-2xl"/>
              </a>           
              <p className="text-sm my-4 text-[var(--main-white)]">View On Github</p>
            </>
            }
          Project_Descr={<p>
            Built with TailwindCSS, Laravel, and MySQL, this Student Job Internship Hiring System was developed for RGRR Webmaker to streamline the internship application process. The platform allows students to browse available internship opportunities offered by the company, view detailed job descriptions, and submit their applications through a simplified and user-friendly interface. Administrators can manage job postings, review applicants, and maintain records efficiently, making the system a practical tool for connecting students with real industry experience.
          </p>}
          Tech_Stack={
            <div className="flex gap-8">
            {FrontEnd.filter(item => item.label === "HTML5").map((item, index) => (
               <div className="center bg-[var(--metal-dark1)] rounded-xl p-2 w-15">
                  <img 
                    key={index} 
                    src={item.src} 
                    className="w-6 h-6  " 
                    alt={item.label}
                  />
                </div>
                ))}
              

                    {FrontEnd.filter(item => item.label === "TailwindCss").map((item, index) => (
                       <div className="center bg-[var(--metal-dark1)] rounded-xl p-2 w-15">
                      <img 
                        key={index} 
                        src={item.src} 
                        className="w-6 h-6" 
                        alt={item.label}
                      />
                  </div>
                ))}

                  {FrontEnd.filter(item => item.label === "Javascript").map((item, index) => (
                    <div className="center bg-[var(--metal-dark1)] rounded-xl p-2 w-15">
                      <img 
                        key={index} 
                        src={item.src} 
                        className="w-6 h-6" 
                        alt={item.label}
                      />
                    </div>
                ))}

                  {BackEnd.filter(item => item.label === "Laravel").map((item, index) => (
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
            </div>}/>

    </main>
  
  )
}

export default Rgrr_jobfinder