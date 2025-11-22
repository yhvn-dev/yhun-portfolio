
function Project_label() {
  return (
    <>
        <main className="h-full w-full center col-start-1 col-end-3 row-start-1 row-end-2 relative ">
            <div className="absolute project-label-bg-header rounded-[10px] w-[98%] h-[98%] overflow-hidden">
              <div className="absolute bg-[var(--metal-dark5)] right-0 top-0 rounded-bl-[90%] w-[50%] h-[90%]"></div>
              <div className="absolute bg-[var(--metal-dark5)] rounded-tr-[90%] left-10 bottom-0 w-[50%] h-[90%]"></div>
            </div>

            <div className="center bg-[var(--dark-variant)] h-full w-full rounded-2xl
            border-2 border-[var(--metal-dark2)] ">
              <div className="center bg-transparent backdrop-blur-3xl h-full w-full rounded-2xl
              border-2 border-[var(--metal-dark2)] p-4">
                <p className="text-6xl hook-txt md:hook-txt-2">PROJECTS</p>      
              </div>
            </div>

          
        </main>

     </>
  )
}

export default Project_label