
function Project_label() {
  return (
    <>
        <main className="h-full w-full col-start-1 col-end-3 row-start-1 row-end-2 relative mt-20 md:mt-0 ">
            <div className="pr-label-bd-div absolute project-label-bg-header rounded-[10px] w-[98%] h-[98%] overflow-hidden  ">
              <div className="pr-label-bd absolute bg-[var(--metal-dark5)] right-0 top-0 rounded-bl-[90%] w-[50%] h-[90%]"></div>
              <div className="pr-label-bd absolute bg-[var(--metal-dark5)] rounded-tr-[90%] left-10 bottom-0 w-[50%] w h-[90%]"></div>
            </div>
            
            <div className="pr-label-div center bg-[var(--dark-variant)] h-full w-full rounded-2xl ">
              <div className="center bg-transparent backdrop-blur-3xl h-full w-full rounded-2xl
              border-2 border-[var(--metal-dark2)] p-4">
                <p className="text-5xl hook-txt md:text-[6rem]">PROJECTS</p>      
              </div>
            </div>
        </main>

     </>
  )
}

export default Project_label