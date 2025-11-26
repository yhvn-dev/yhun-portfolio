import { useState } from "react";
import { Search, ChevronLeft, ChevronRight, RotateCw, Home, FolderKanban, Minimize2, Maximize2, X, LayoutPanelTop } from 'lucide-react';

export function ProjectTemplate({Project_Logo, Project_Name, Project_Img, defaultValue, ProjectName2, Project_Descr, Tech_Stack, Resources}) {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs = [
    { id: 0, title: 'Project Overview' },
    { id: 2, title: 'Resources' }
  ]; 

  return (
    <>
      {/* Header Section */}
      <div className="flex items-center justify-center flex-col w-[95%] sm:w-[90%] lg:w-[80%] h-auto py-4 sm:py-6">  
        <div className="scale-75 sm:scale-90 md:scale-100">
          {Project_Logo}
        </div>
        <span className="pr-name NODELAB_TEXT bg-transparent text-[var(--main-white)] tracking-wide my-2  sm:text-3xl md:text-sm text-center">
          {Project_Name}
        </span> 
      </div>

      {/* Browser Frame with Shiny Border */}
      <div className=" flex flex-col items-center justify-start w-[95%] sm:w-[90%] lg:w-[80%] rounded-xl sm:rounded-2xl overflow-hidden relative 
      border-2 sm:border-4 border-[var(--metal-dark1)] shadow-[0_20px_60px_rgba(0,0,0,0.7)]">

        {/* Tab Bar (Row 1) */}
        <div className="flex items-center justify-start w-full h-8 sm:h-10 md:h-12 bg-gradient-to-b from-[#2d2d2d] to-[#252525] border-b border-gray-700/50">
          <ul className="flex items-center justify-start h-full px-2 sm:px-4 rounded-[10px]">
            <div className="circ w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-red-300 mx-0.5 sm:mx-1"></div>
            <div className="circ w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-orange-300 mx-0.5 sm:mx-1"></div>
            <div className="circ w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-green-300 mx-0.5 sm:mx-1"></div>
          </ul>

          <div className="flex items-center gap-1 sm:gap-2 px-1 sm:px-3 overflow-x-auto scrollbar-hide flex-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 rounded-t-lg text-[9px] sm:text-[10px] md:text-xs whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'border-b-2 sm:border-b-3 md:border-b-4 border-[var(--metal-dark2)] text-white outline-0 cursor-pointer'
                    : 'bg-transparent text-gray-400 hover:text-gray-200 border-b-2 border-transparent'
                }`}
              >
                {tab.title}
              </button>
            ))}

            <button className="hidden md:flex w-5 h-5 md:w-6 md:h-6 items-center justify-center text-gray-400 hover:text-white ml-1">
              <span className="text-base md:text-lg">+</span>
            </button>
          </div>
        </div>

        {/* Navigation Bar (Row 2) */}
        <div className="flex items-center justify-start w-full h-9 sm:h-10 md:h-12 px-2 sm:px-3 md:px-4 gap-1 sm:gap-2 md:gap-3 py-2">
          <div className="hidden md:flex items-center gap-1 sm:gap-2">
            <button className="w-6 h-6 md:w-7 md:h-7 rounded-md hover:bg-gray-700/50 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
              <ChevronLeft size={14} />
            </button>
            <button className="w-6 h-6 md:w-7 md:h-7 rounded-md hover:bg-gray-700/50 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
              <ChevronRight size={14} />
            </button>
            <button className="w-6 h-6 md:w-7 md:h-7 rounded-md hover:bg-gray-700/50 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
              <RotateCw size={14} />
            </button>
            <button className="w-6 h-6 md:w-7 md:h-7 rounded-md hover:bg-gray-700/50 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
              <Home size={14} />
            </button>
          </div>
          
          <div className="search-div flex-1 flex items-center bg-[#2a2a2a] rounded-lg px-2 sm:px-3 py-1 sm:py-1.5 w-full transition-colors">   
            <Search size={14} className="hidden md:block text-gray-400 mr-2 flex-shrink-0" />
            <input 
              type="text" 
              placeholder="Search or enter project URL..." 
              className="flex-1 bg-transparent text-[9px] sm:text-[10px] md:text-sm text-gray-300 outline-none placeholder-gray-500"
              defaultValue={defaultValue}
            />      
          </div>
        </div>

        {/* Image Gallery Section */}
        <div className="flex items-center justify-center w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[600px] bg-gradient-to-br from-[#1a1a1a] to-[#252525] border-b border-gray-700/50">
          {activeTab === 0 ? (
            <img
              src={Project_Img}
              className="w-full h-full object-contain"
              alt="Project Preview"
            />  
          )  : (
            <div className="con text-white flex items-center justify-center flex-col w-full h-full p-2 sm:p-4 overflow-y-auto">
              {Resources}
            </div>
          )}
        </div>
      </div>

      {/* Project Description Section */}
      <div className="flex flex-col items-start justify-start w-[95%] sm:w-[90%] lg:w-[80%] bg-transparent py-4 sm:py-6">
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-[var(--main-white)] mb-2 sm:mb-3">
          {ProjectName2}
        </h2>
          {Project_Descr}
        <div className="py-2 sm:py-4 w-full">
          {Tech_Stack}
        </div>
      </div>
    </>
  )
}



export function Desktop_Template({Project_Logo, Project_Name, Project_Img,     Project_Name_Tab, ProjectName2, Resources, Project_Descr, Tech_Stack}) {
  const [activeView, setActiveView] = useState('dashboard');
  
  const menuItems = [
    { id: 'dashboard', icon: <LayoutPanelTop size={18}/>},
    { id: 'resources', icon: <FolderKanban size={18}/> }
  ];

  return (
    <>
      {/* Header Section */}
      <div className="flex items-center justify-center flex-col w-[95%] sm:w-[90%] lg:w-[80%] h-auto py-4 sm:py-6">  
        <div className="scale-75 sm:scale-90 md:scale-100">
          {Project_Logo}
        </div>
        <span className="NODELAB_TEXT bg-transparent text-[var(--main-white)] tracking-wide my-2 sm:text-3xl md:text-sm text-center">
          {Project_Name}
        </span> 
      </div>

      {/* Desktop Window Frame */}
      <div className="flex flex-col items-center justify-start w-[95%] border-2 border-[var(--metal-dark1)]   sm:w-[90%] lg:w-[80%] rounded-xl overflow-hidden relative  shadow-[0_20px_60px_rgba(0,0,0,0.7)]">

        {/* Window Title Bar */}
        <div className="flex items-center justify-between w-full h-8 sm:h-10 md:h-12 bg-gradient-to-b from-[#3a3a3a] to-[#2d2d2d] border-b border-gray-700/50 px-2 sm:px-3 md:px-4">
          <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-[#ff5f57] hover:bg-[#ff6b63] cursor-pointer"></div>
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-[#febc2e] hover:bg-[#ffc93a] cursor-pointer"></div>
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-[#28c840] hover:bg-[#34d84c] cursor-pointer"></div>
          </div>
          
          <div className="flex items-center gap-2 flex-1 justify-center ">
            <span className="pr-name text-gray-300 text-[10px] sm:text-xs md:text-sm font-medium truncate max-w-[120px] sm:max-w-[200px] md:max-w-none">
              {Project_Name_Tab}
            </span>
          </div>

          <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2">

            <button className="hidden md:flex w-6 h-6 md:w-7 md:h-7 rounded hover:bg-gray-600/50 items-center justify-center text-gray-400 hover:text-white transition-colors">
              <Maximize2 size={12} />
            </button>
            <button className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded hover:bg-red-500/50 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
              <X size={14} className="hidden md:block" />
            </button>
          </div>
        </div>
     
        {/* Content Area with Sidebar */}
        <div className="flex flex-col items-center justify-end w-full h-full bg-[#1a1a1a]">
          <div className="flex-1 flex items-center justify-center overflow-hidden w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[600px]">
            {activeView === "dashboard" ? (
              <img
                src={Project_Img}
                className="sm:h-5 sm:w-5 md:w-full md:h-full md:object-contain"
                alt="Desktop Application"
              />
            ) : (
              <div className="con text-white flex items-center justify-center flex-col w-full h-full p-2 sm:p-4 overflow-y-auto">
                {Resources}
              </div>
            )}
          </div> 

          {/* Bottom Taskbar */}
          <nav className="w-full h-10 sm:h-12 md:h-14 bg-[#252525] border-t border-gray-700/50 flex gap-2 sm:gap-3 justify-center items-center">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveView(item.id)}
                className={`desktop-icon px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded text-xs transition-all ${
                  activeView === item.id
                    ? 'text-[var(--ash1-lgray)] border-b-2 border-[var(--ash1-gray)]'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700/30'
                }`}
              >
                <div className="scale-75 sm:scale-90 md:scale-100">
                  {item.icon}
                </div>
                
              </button>
            ))}
          </nav>
        </div>
        
      </div>

      {/* Project Description Section */}
      <div className="flex flex-col items-start justify-start w-[95%] sm:w-[90%] lg:w-[80%] bg-transparent py-4 sm:py-6">
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white mb-2 sm:mb-3">
          {ProjectName2}
        </h2>     
          {Project_Descr}

        <div className="w-full">
          {Tech_Stack}
        </div>
      </div>
    </>
  )
}