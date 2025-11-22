import Meloniche_Logo from "../../../../assets/Images/meloniche_images/MELONICHE LOGO.png"
import Meloniche_Front from "../../../../assets/Images/meloniche_images/Feed Overview.png"
import { Desktop_Template } from '../../../../components/project_template'
import Github from "../../../../assets/Icons/GITHUB.png"

function Meloniche() {
  return (
    <main className='"h-full flex flex-col items-center justify-start
       col-start-1 col-end-3 row-start-6 row-end-6
       overflow-hidden border-8 border-[var(--metal-dark1)] rounded-2xl
       bg-gradient-to-tr from-[var(--metal-dark5)] to-[var(--metal-dark1)] cursor-pointer'>


    <Desktop_Template
            Project_Logo={<img className="w-10 h-10 " src={Meloniche_Logo}/>} 
            Project_Name={<p className="MELONICHE_TEXT">MELONICHE</p>}
            Project_Img={Meloniche_Front}
            defaultValue={"Melonciche"}
            Resources={
                  <>
                      <a href="https://github.com/yhvn-dev/Meloniche-Music-Player-.git" target="blank">
                          <img src={Github} className="w-14 h-14 p-2 bg-[var(--main-white)] rounded-2xl"/>
                       </a>             
                       <p className="text-sm my-4 text-[var(--main-white)]">View On Github</p>
                  </>
                      }
            Project_Descr={<p>Description</p>}
            Tech_Stack={<p>Tech Stack</p>}
          /> 

    
    </main >
  )
}

export default Meloniche