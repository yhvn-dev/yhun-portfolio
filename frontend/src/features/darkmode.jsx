import { useState,useEffect } from "react";
import {Sun,MoonStar} from "lucide-react"
import "./darkmode.css"

export function Darkmode(){
    const [dark,setDark] =  useState(() =>{
        const savedTheme = localStorage.getItem("theme");
        return savedTheme ? savedTheme === "dark" : false
    })

    useEffect(() =>{
        if(dark){
            document.body.classList.add("dark")
            document.body.classList.remove("light")
            localStorage.setItem("theme","dark")
            const state = localStorage.getItem("theme")
            console.log(state)
        }else{
            document.body.classList.add("light")
            document.body.classList.remove("dark")
            localStorage.setItem("theme","light")
            const state = localStorage.getItem("theme")
            console.log(state)
        }
    },[dark])
    
    return(<>
        <div className="dmode-box flex items-center justify-start px-4
         w-16 rounded-lg shadow-lg mx-4 border-1 border-[var(--metal-dark2)] shadow-[0px_5px_5px_1px] 
       shadow-black " >
            <button onClick={() => setDark(!dark)} 
                className="dmode-btn w-5 h-5 rounded-full cursor-pointer ">
                {!dark ? 
                <Sun className="w-5 h-5 sun stroke-var(--main-white) transition-all duration-500" size={14} stroke="var(--main-white) " /> : 
                <MoonStar className="w-5 h-5 moonstar stroke-var(--main-white)  hover:stroke-white transition-all duration-500"  size={14} />
                }
             </button>
        </div>  
    </>)    

}