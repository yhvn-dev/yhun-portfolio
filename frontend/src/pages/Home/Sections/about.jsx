import { GithubStats } from "../../../services/GithubStats";
import { useGithub } from "../../../Context/githubContext";
import Me_1 from "../../../assets/Images/Me 1.png";
import * as Animation from "../../../hooks/animations"
import Carousel from "../../../features/carousel";


function About() {
  const { stats } = useGithub();
      
  return (
    <section id="about" className="sections column col-start-1 col-end-2 row-start-2 row-end-2 ">
   
      <GithubStats username="yhvn-dev"/>
      
      {/* MAIN BOX   */}
      <main className="about_main_box flex flex-col items-center justify-start 
      col-start-1 col-span-full md:col-start-2 md:col-end-2 row-start-2 row-end-3 h-full 
      w-full rounded-2xl p-1  ">

        {/* Title */}
        <div className="center w-full h-[20%] fade-in-up">
          <p className="monu-txt text-2xl text-[var(--main-white)] my-16">About Me</p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-10 md:grid-rows-auto w-full md:h-[100%] rounded-[10px] gap-4">
        
            {/* CARD */}
          <div className="relative p-4 gap-4 grid grid-rows-10 grid-cols-1 
          col-start-1 col-span-full
          md:col-start-1 md:col-end-9 md:row-start-1 md:row-end-7
          border-2 border-[var(--metal-dark2)] rounded-[10px] shadow-[5px_5px_20px_1px_black] overflow-hidden fade-in-up">
            {/* Header Background */}

            <header className="relative center w-full h-full rounded-[10px] 
            row-start-1 row-end-4 bg-[var(--dark-variant)] 
            overflow-hidden p-4 border-2 border-[var(--metal-dark2)]
            shadow-[5px_5px_10px_1px_black">
              <div className="about-bg-header absolute rounded-[10px] w-[98%] h-[98%] overflow-hidden">
                <div className="bd-header absolute bg-[var(--dark-variant)] right-0 top-0 rounded-bl-[90%] w-[50%] h-[90%]"></div>
                <div className="bd-header absolute bg-[var(--dark-variant)] rounded-tr-[90%] left-0 bottom-0 w-[50%] h-[90%]"></div>
              </div>
              <div className="absolute bg-transparent backdrop-blur-[50px] rounded-[10px] center w-full h-full"></div>

            </header>

            {/* Profile Image */}
            <div className="center absolute top-15 w-full h-[30%] p-4 rounded">
              <div className="flex items-center justify-start relative mx-8 w-full h-full">
                <img
                  className="rounded-full object-cover w-24 h-24 border-2 shadow-lg"
                  src={Me_1}
                  alt="Profile Picture"
                />
              </div>
            </div>

            {/* Info Section */}
            <div className="about-info-sect column-start p-4 row-start-4 row-span-full rounded-[10px] bg-[var(--dark-variant)]">
              <p className="text-2xl mt-10 text-[var(--main-white)]">Jhunguide Flores</p>
              <a  href="https://github.com/yhvn-dev" className="text-sm text-[var(--metal-dark4)] mb-4 hover:text-white transition-all duration-500">yhvn</a>
              <p className="text-sm text-[var(--metal-dark4)]">
                  I Turn Coffee into React Apps… and Occasional Bugs
              </p>  

              {/* Social Media / Stats */}
              {stats?.error ? (
               <Animation.SociaMediaAnimation></Animation.SociaMediaAnimation>
              ) : (
                stats?.user && (
                  <ul className="flex items-center justify-evenly mt-4 h-full w-full list-none rounded-[10px]">
                    <li className="column transition-1 ease-in">
                      <span className="monu-txt text-3xl text-[var(--main-white)] hover:text-white">{stats.user.followers}</span>
                      <span className="text-xs text-[var(--metal-dark4)] hover:text-[var(--white-blple)]">Followers</span>
                    </li>
                    <li className="column transition-1 ease-in">
                      <span className="monu-txt text-3xl text-[var(--main-white)]  hover:text-white">{stats.repos.length}</span>
                      <span className="text-xs text-[var(--metal-dark4)] hover:text-[var(--white-blple)]">Repositories</span>
                    </li>
                    <li className="column transition-1 ease-in">
                      <span className="monu-txt text-3xl text-[var(--main-white)] hover:text-white ">{stats.totalCommits}</span>
                      <span className="text-xs text-[var(--metal-dark4)] hover:text-[var(--white-blple)]">Commits</span>
                    </li>
                  </ul>
                )
              )}
            </div>
          </div>


         {/* TECH STACK - MOVED DOWN FOR MOBILE */}
          <div className="flex flex-col items-center justify-center
            col-start-1 col-span-full row-start-4
            md:col-start-9 md:col-span-full md:row-start-1 md:row-end-7
            border-2 border-[var(--metal-dark2)] rounded-[10px] 
            shadow-[5px_5px_20px_1px_black] p-4
            w-full md:max-w-[380px] md:mx-auto fade-in-up">

            <div className="center w-full p-2 bg-[var(--dark-variant)] 
            rounded-[10px] border-2 border-[var(--metal-dark2)] 
            shadow-[5px_5px_10px_1px_black] text-[var(--main-white)]">
              Tech Stack
            </div>
            <Animation.TechStackAnimation/>
          </div>




          {/* DESCRIPTION - MOVED UP FOR MOBILE */}
          <div className="description flex items-start justify-start p-4 
          col-start-1 col-span-full row-start-3
          md:col-start-4 md:col-end-11 md:row-start-7 md:row-end-8
          border-2 border-[var(--metal-dark2)] 
          rounded-[10px] shadow-[5px_5px_20px_1px_black] text-[var(--main-white)] overflow-y-auto
          fade-in-up">
              <p className="">
                  Hi I'm Jhunguide Flores from the Philippines, I build full-stack 
                web applications using the PERN Stack ---- PostgreSQL, ExpressJs, ReactJs, and NodeJs.
                I also work with other technologies such as PHP,Laravel and Python and had experience using Java
                and Visual Basic.I started out using PHP and other langauges where I learned about the fundamentals of basic web
                development. Over time, I shifted my focuses to the PERN Stack because I enjoy creating modern,
                fast, scalable and high performing web applications. My experiences using these technologies gave
                me a sense of stabilty and commitment to modern web development, enhance my understanding of building 
                dynamic web applications. Beyod my current stack, my background as a developer also strengthen 
                my adaptability ---- allowing me to learn and work with different technologies.
              </p>          
          </div>

          {/* ACHIEVEMENTS */}
          <div className="col-span-full md:col-span-3 md:col-start-1 md:row-start-7 md:row-end-8 ">
            <div className="border-2 border-[var(--metal-dark2)] rounded-[10px] 
              shadow-[5px_5px_20px_1px_black] p-4 flex flex-col overflow-hidden h-full">

             
              <div className="center w-full p-2 bg-[var(--dark-variant)] rounded-[10px] border-2 border-[var(--metal-dark2)] 
                shadow-[5px_5px_10px_1px_black] text-[var(--main-white)]">
                Achievements
              </div>

              <div className="flex-1 center w-full my-4 rounded-[10px]">
                <Carousel/>
              </div> 
            </div>
          </div>


        </div>

      </main>
      
    </section>
    
  );
}

export default About;