import { useEffect, useState } from "react"
import Jhvn from "../assets/Images/jhvn_1_LOGO.png"

function Sidebar() {
  const [light,setLight] = useState(false);
  

  useEffect(() =>{
    if(light){
        document.documentElement.classList.remove("dark")
    }else{
        document.documentElement.classList.add("dark")
    }

  },[light])

  const toggleTheme = () =>{
    setLight(!light)
    console.log(light) 
  }
  

  return (
    <aside  className='fixed column  right-4 top-0 w-[8rem] h-[100vh]'>
        
        <div className='column-start h-[50%] w-full bg-transparent border-2 border-[var(--metal-dark2)] rounded-[10px]'>
            <div className='w-full flex items-center justify-start p-4'>
                <img className="w-10 h-auto" src={Jhvn}/>
            </div>

            <div className='w-full center  p-4 '>
                <div className="flex items-center justify-start py-1 px-4 w-full rounded-2xl 
                shadow-[inset_-5px_-5px_10px_1px_rgba(53,53,53,0.5)]">
                    <button onClick={toggleTheme} 
                    className={`center rounded-full w-6 h-auto bg-black py-[4px] cursor-pointer 
                    ${light === "true" ? "hidden" : "center"}`}>  
                        <ion-icon name="moon-outline"></ion-icon>
                    </button>
                    
                    <button onClick={toggleTheme}
                    className={`hidden rounded-full w-6 h-auto bg-black py-[4px] cursor-pointer
                    ${light === "true" ? "hidden" : "center"}`}>
                        
                         <ion-icon name="partly-sunny-outline"></ion-icon>

                    </button>
                  

                </div>
            </div>

            <div className='h-full column-start w-full p-4 bg'>
                <a href="#" className='text-[0.8rem] text-[var(--metal-dark4)] my-1 cursor-pointer
                hover:text-[var(--main-white)] transition-colors duration-400'>
                    Hero
                </a>

                <a href="#" className='text-[0.8rem] text-[var(--metal-dark4)] my-1
                hover:text-[var(--main-white)] transition-colors duration-400'>
                    About
                </a>

                <a href="#" className='text-[0.8rem] text-[var(--metal-dark4)] my-1 cursor-pointer
                hover:text-[var(--main-white)]  transition-colors duration-400'>
                    Skills & Technologies
                </a>

                <a href="#" className='text-[0.8rem] text-[var(--metal-dark4)] my-1 cursor-pointer
                hover:text-[var(--main-white)]  transition-colors duration-400'>
                    Projects
                </a>

                <a href="#" className='text-[0.8rem] text-[var(--metal-dark4)] my-1 cursor-pointer
                hover:text-[var(--main-white)]  transition-colors duration-400'>
                    Contacts
                </a>

                <a href="#" className='text-[0.8rem] text-[var(--metal-dark4)] my-1 cursor-pointer
                hover:text-[var(--main-white)]  transition-colors duration-400'>
                    Footer
                </a>

            </div>
        </div>
       
    </aside>    
  )

}

export default Sidebar