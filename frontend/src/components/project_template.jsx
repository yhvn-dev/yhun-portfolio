import { useState } from "react";
import { Search, ChevronLeft, ChevronRight, RotateCw, Home,Minimize,Minimize2,Maximize2,X} from 'lucide-react';

export function ProjectTemplate({Project_Logo,Project_Name,Project_Img,defaultValue,ProjectName2,Project_Descr,Tech_Stack,Resources}){
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
      border-4 border-[var(--metal-dark1)] ">

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
              <div className="text-white center full  column">{Resources}</div>
          )}
        </div>
        

      </div>

        {/* Project Description Section */}
      <div className="flex flex-col items-start justify-start w-[80%] bg-transparent h-[70%] py-6 px-0 overflow-y-auto">
          <h2 className="text-xl font-semibold text-[var(--main-white)] mb-3">
            {ProjectName2}
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed mb-4">
            {Project_Descr}
          </p>
          <div className="center-l py-4  w-full">
            {Tech_Stack}
          </div>
      </div>
        </>
    )
}



export function Desktop_Template({Project_Logo,Project_Name,Project_Img,defaultValue,ProjectName2,Resources,Project_Descr,Tech_Stack}){
    const [activeView, setActiveView] = useState('dashboard');
    const menuItems = [
        { id: 'dashboard', label: 'Dashboard' },
        { id: 'documentation', label: 'Documentation' },
        { id: 'resources', label: 'Resources' }
    ];

    return(
    <>
      {/* Header Section */}
      <div className="flex items-center justify-center flex-col w-[80%] h-[20%] overflow-hidden py-6">  
        <div>
            {Project_Logo}
        </div>
        <span className="NODELAB_TEXT bg-transparent text-[var(--main-white)] tracking-wide my-2">{Project_Name}</span> 
      </div>

      {/* Desktop Window Frame */}
      <div className="flex flex-col items-center justify-start h-full w-[80%] rounded-xl overflow-hidden relative 
      border border-gray-700 shadow-[0_20px_60px_rgba(0,0,0,0.7)] bg-amber-700">

        {/* Window Title Bar */}
        <div className="flex items-center justify-between w-full h-10 bg-gradient-to-b from-[#3a3a3a] to-[#2d2d2d] border-b border-gray-700/50 px-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57] hover:bg-[#ff6b63] cursor-pointer"></div>
            <div className="w-3 h-3 rounded-full bg-[#febc2e] hover:bg-[#ffc93a] cursor-pointer"></div>
            <div className="w-3 h-3 rounded-full bg-[#28c840] hover:bg-[#34d84c] cursor-pointer"></div>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-gray-300 text-sm font-medium">{Project_Name}</span>
          </div>

          <div className="flex items-center gap-2">
            <button className="w-7 h-7 rounded hover:bg-gray-600/50 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
              <Minimize2 size={12} />
            </button>
            <button className="w-7 h-7 rounded hover:bg-gray-600/50 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
              <Maximize2 size={12} />
            </button>
            <button className="w-7 h-7 rounded hover:bg-red-500/50 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
              <X size={14} />
            </button>
          </div>
        </div>
     
      
        {/* Content Area with Sidebar */}
        <div className="flex flex-col items-center justify-end w-full h-full bg-[#1a1a1a] ">


          <div className="flex-1 flex items-center justify-center overflow-hidden">
            {activeView === 'dashboard' ? (
              <img
                src={Project_Img}
                className="w-full h-90 "
                alt="Desktop Application"
              />
            ) : activeView === 'features' ? (
              <div className="text-center p-8">
                <p className="text-white text-lg mb-2">✨ Features</p>
                <p className="text-gray-400 text-sm">Project features and capabilities</p>
              </div>
            ) : activeView === 'documentation' ? (
              <div className="text-center p-8">
                <p className="text-white text-lg mb-2">📄 Documentation</p>
                <p className="text-gray-400 text-sm">Technical documentation and guides</p>
              </div>
            ) : activeView === "resources" ? (
                <div className="text-white center full  column">{Resources}</div>
            ) : (
              <>
              </>
            )}




            </div> 

              {/* Bottom Taskbar */}
            <nav className="w-full h-[3rem] bg-[#252525] border-t border-gray-700/50 flex gap-3 justify-center items-center">
              <div className="text-xs text-gray-400 font-semibold">PROJECT</div>

              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveView(item.id)}
                  className={`px-4 py-2 rounded text-xs transition-all ${
                    activeView === item.id
                      ? 'bg-blue-600/20 text-blue-400 border-b-2 border-blue-500'
                      : 'text-gray-400 hover:text-white hover:bg-gray-700/30'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

        </div>
      </div>

      {/* Project Description Section */}
      <div className="flex flex-col items-start justify-start w-[80%] bg-transparent h-[70%] py-6 px-0 overflow-y-auto">
        <h2 className="text-xl font-semibold text-white mb-3">
            {ProjectName2}
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