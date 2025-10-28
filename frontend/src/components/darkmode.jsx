
import React, { useEffect, useState } from 'react'

export function Darkmode() {
   const [dark,setDark] = useState(() =>{
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme ===  "dark" : false;
   })   

    useEffect(() =>{
        if(dark){
            document.body.classList.add("dark");
            document.body.classList.remove("light")

            localStorage.setItem("theme","dark")
            let theme = localStorage.getItem("theme");
            console.log(theme)
        }else{
            document.body.classList.add("light");
            document.body.classList.remove("dark");
        
            localStorage.setItem("theme","light")
            let theme = localStorage.getItem("theme");
            console.log(theme)
        }

    })

   
  return (
   <div className="dmode-box flex items-center justify-start relative py-1 px-4 w-[80%] rounded-2xl 
    shadow-[inset_-5px_-5px_10px_1px_rgba(53,53,53,0.5)]">
        <button onClick={() => setDark(!dark)} 
        className={`dmode-btn center rounded-full w-6 h-auto bg-black py-[4px] cursor-pointer`}>  
            {dark ? <ion-icon name="partly-sunny-outline">
            </ion-icon> 
                : 
            <ion-icon name="moon-outline"></ion-icon> }
        </button>
        
</div>
                  

  )
}
