import { useState } from "react";
import { Search, ChevronLeft, ChevronRight, RotateCw, Home } from 'lucide-react';

export function ProjectTemplate({Project_Logo,Project_Name,Project_Img,defaultValue,Project_Descr,Tech_Stack}){
    const [activeTab, setActiveTab] = useState(0);
  
    const tabs = [
        { id: 0, title: 'Project Overview' },
        { id: 1, title: 'Documentation' },
        { id: 2, title: 'Resources' }
    ]; 

    return(
    <>

      {/* Header Section */}
      <div className="flex items-center justify-center flex-col w-[80%] h-[20%] overflow-hidden py-6">  
        <div>
            {Project_Logo}
        </div>
          <span className="NODELAB_TEXT bg-transparent text-[var(--main-white)]  tracking-wide my-2">{Project_Name}</span> 
      </div>

      {/* Browser Frame with Shiny Border */}
      <div className="flex flex-col items-center justify-start h-full w-[80%] rounded-2xl overflow-hidden relative 
      border-4 border-[var(--metal-dark1)]">

        {/* Tab Bar (Row 1) */}
        <div className="flex items-center justify-start w-full h-10 bg-gradient-to-b from-[#2d2d2d] to-[#252525] border-b border-gray-700/50">

          <ul className="flex items-center justify-start h-full 
                  px-4  rounded-[10px]">
              <div className="circ w-[0.8rem] h-[0.8rem] rounded-full
              bg-red-300 mx-1"></div>
            <div className="circ w-[0.8rem] h-[0.8rem] rounded-full
              bg-orange-300 mx-1"></div>
            <div className="circ w-[0.8rem] h-[0.8rem] rounded-full
              bg-green-300 mx-1" ></div>
         </ul>

          <div className="flex items-center gap-2 px-3">
            {tabs.map((tab) => (
           <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-1.5 rounded-t-lg text-xs transition-all ${
                activeTab === tab.id
                  ? 'border-b-4 border-[var(--metal-dark2)] text-white outline-0 cursor-pointer'
                  : 'bg-transparent text-gray-400 hover:text-gray-200 border-b-2 border-transparent' // keeps layout consistent
              }`}>

              {tab.title}
            </button>
            ))}

            <button className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-white ml-1">
              <span className="text-lg">+</span>
            </button>
          </div>
        </div>


        {/* Navigation Bar (Row 2) */}
        <div className="flex items-center justify-start w-full h-12 px-4 gap-3 py-2">
          <div className="flex items-center gap-2">
            <button className="w-7 h-7 rounded-md hover:bg-gray-700/50 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
              <ChevronLeft size={14} />
            </button>
            <button className="w-7 h-7 rounded-md hover:bg-gray-700/50 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
              <ChevronRight size={14} />
            </button>
            <button className="w-7 h-7 rounded-md hover:bg-gray-700/50 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
              <RotateCw size={14} />
            </button>
            <button className="w-7 h-7 rounded-md hover:bg-gray-700/50 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
              <Home size={14} />
            </button>
          </div>
          


          <div className="flex-1 flex items-center bg-[#2a2a2a] rounded-lg px-3 py-1.5 w-full transition-colors">
            <Search size={14} className="text-gray-400 mr-2" />
            <input 
              type="text" 
              placeholder="Search or enter project URL..." 
              className="flex-1 bg-transparent text-sm text-gray-300 outline-none placeholder-gray-500"
              defaultValue={defaultValue}
            />      
          </div>

          <div className='w-[10%]'>
            extension
          </div>
        </div>

          {/* Image Gallery Section */}
          <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-[#1a1a1a] to-[#252525] border-b border-gray-700/50 ">
            {activeTab === 0 ? (
              <img
                src={Project_Img}
                className="w-full h-full object-fit"
                alt="HRMS Front"
              />  
            ) : activeTab === 1 ? (
              <p className="text-white">Documentation</p>
            ) : (
              <p className="text-white">Resources</p>
          )}
        </div>
        

      </div>

        {/* Project Description Section */}
      <div className="flex flex-col items-start justify-start w-[80%] bg-transparent h-[70%] py-6 px-0 overflow-y-auto">
          <h2 className="text-xl font-semibold text-white mb-3 bg-gradient-to-r bg-clip-text text-transparent">
            Project Overview
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed mb-4">
            {Project_Descr}
          </p>
          <div>
            {Tech_Stack}
          </div>
      </div>
        </>
    )

}