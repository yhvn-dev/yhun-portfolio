
import { ProjectTemplate } from '../../../../components/project_template';
import { BackEnd,FrontEnd,Database } from '../../../../data/image_resources';
import  LOMINLINDOL_Frontpage from "../../../../assets/Images/lomilindol/Settings Dark A.png"
import Github from "../../../../assets/Icons/GITHUB.png"

function Lomilindol() {
  return (

    <main className="h-full flex flex-col items-center justify-start
      col-start-1 col-end-3 row-start-2 row-end-2
      overflow-hidden border-8 border-[var(--metal-dark1)] rounded-2xl
      bg-gradient-to-tr from-[var(--metal-dark5)] to-[var(--metal-dark1)] cursor-pointer">
       <ProjectTemplate
          Project_Logo={<p className='LOMILINDOL_TEXT text-2xl text-[var(--main-white)]'>LOMILINDOL</p>} 
          Project_Name={<p className="LOMILINDOL_TEXT text-[var(--main-white]" >LOMILINDOL</p>} 
          Project_Img={LOMINLINDOL_Frontpage}
          ProjectName2={"LOMILINDOL - An Earthquake Monitoring System With Real Time Alerts"}
          defaultValue={"lomilindol.monitor.com"}
          Resources={ <>
                      <a href="https://github.com/ianpurifying/quake.git" target="blank">
                        <img src={Github} className="w-14 h-14 p-2 bg-[var(--main-white)] rounded-2xl"/>
                      </a>           
                      <p className="text-sm my-4 text-[var(--main-white)]">View On Github</p>
                    </>
                          }
          Project_Descr={
          <p>
            Awarded 3rd Place in the openIT hackathon on November,20,2025.
            An Eartthquake Monitoring Web Application powered by TailwindCss,React, NodeJs and MySQL. It allows the public to monitor
            live earthquake updates sources through web scraping from PHILVOLCS, as trusted and widely known Philippines Goverment Scientific 
            Agency. Our system automatically gathers the latest seismic data, stores it, and displays it in real time through an intuitive and responsive interface.
              
          </p>}
          Tech_Stack={
            <div className="flex gap-8">
  
                {FrontEnd.filter(item => item.label === "TailwindCss").map((item, index) => (
                <img 
                  key={index} 
                  src={item.src} 
                  className="w-8 h-8" 
                  alt={item.label}
                />
              ))}
            
                {FrontEnd.filter(item => item.label === "ReactJs").map((item, index) => (
                <img 
                  key={index} 
                  src={item.src} 
                  className="w-8 h-8" 
                  alt={item.label}
                />
              ))}

              {BackEnd.filter(item => item.label === "NodeJs").map((item, index) => (
                <img 
                  key={index} 
                  src={item.src} 
                  className="w-10 h-10" 
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
          }/>
    </main> 
  )

}


export default Lomilindol