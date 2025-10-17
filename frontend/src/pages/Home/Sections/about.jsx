import { GithubStats } from "../../../services/GithubStats";
import { useGithub } from "../../../Context/githubContext";

import Me_1 from "../../../assets/Images/Me 1.png";
import Github from "../../../assets/Icons/GITHUB.jpg";
import Linkedin from "../../../assets/Icons/LINKEDIN.jpg";
import Instagram from "../../../assets/Icons/INSTAGRAM.jpg";
import Facebook from "../../../assets/Icons/FACEBOOK.jpg";

function About() {
  const { stats } = useGithub();
  

 const Social_Media = [
  { src: Github, label: "Github", url: "https://github.com/yhvn-dev" },
  { src: Linkedin, label: "LinkedIn", url: "https://linkedin.com/in/your-profile" },
  { src: Instagram, label: "Instagram", url: "https://instagram.com/__jhvn" },
  { src: Facebook, label: "Facebook", url: "https://facebook.com/your-profile" },
];

  return (
    <section className="sections column col-start-1 col-end-2 row-start-2 row-end-2 w-full">
   
      <GithubStats username="yhvn-dev"/>
      
      {/* MAIN BOX */}
      <main className="flex flex-col items-center justify-start col-start-2 col-end-2 row-start-2 row-end-3 h-full w-full rounded-2xl p-1">
        {/* Header */}
        <div className="center w-full h-[20%]">
          <p className="monu-txt text-2xl">About Me</p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-10 grid-rows-10 w-full h-[80%] rounded-[10px] gap-4">
         

            {/* CARD */}
          <div className="relative p-4 gap-4 grid grid-rows-10 grid-cols-1 col-start-1 col-end-8 row-start-1 row-end-7 border-2 border-[var(--metal-dark2)] rounded-[10px] shadow-[5px_5px_20px_1px_black] overflow-hidden">
            {/* Header Background */}
            <header className="relative center w-full h-full rounded-[10px] row-start-1 row-end-4 bg-[var(--dark-variant)] overflow-hidden p-4 border-2 border-[var(--metal-dark2)]">
              <div className="about-bg-header absolute rounded-[10px] w-[98%] h-[98%] overflow-hidden">
                <div className="absolute bg-[var(--dark-variant)] right-0 top-0 rounded-bl-[90%] w-[50%] h-[90%]"></div>
                <div className="absolute bg-[var(--dark-variant)] rounded-tr-[90%] left-0 bottom-0 w-[50%] h-[90%]"></div>
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
            <div className="column-start p-4 row-start-4 row-span-full rounded-[10px] bg-[var(--dark-variant)]">
              <p className="text-2xl mt-10">Jhunguide Flores</p>
              <a className="text-sm text-[var(--metal-dark4)] mb-4">@__jhvn</a>
              <p className="text-sm text-[var(--metal-dark4)]">
                I build end-to-end solutions with precision and care. I seamlessly integrate UI/UX design with backend development and security to create robust, user-friendly applications.
              </p>

              {/* Social Media / Stats */}
              {stats?.error ? (
                <div className="center relative w-full overflow-hidden h-full rounded-[10px]">
                    <div className="flex animate-scroll-stats ">
                        {[...Array(4)].map((_, repeatIdx) =>
                        Social_Media.map((item, idx) => (
                            <a
                            key={`social-${repeatIdx}-${idx}`}
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center justify-center min-w-[175px] rounded-[10px]"
                            >
                            <img
                                src={item.src}
                                className="w-8 h-8 mx-4 shadow-lg transition-transform duration-500 1s hover:scale-105 hover:shadow-2xl"
                            />
                            <span className="text-xs text-[var(--metal-dark4)] mt-2 
                            transition-transform duration-500 hover:text-[var(--white-blple)]">{item.label}</span>
                            </a>
                        ))
                        )}
                    </div>
                    </div>
              ) : (
                stats?.user && (
                  <ul className="flex items-center justify-evenly mt-4 h-full w-full list-none rounded-[10px]">
                    <li className="column transition-1 ease-in">
                      <span className="monu-txt text-3xl">{stats.user.followers}</span>
                      <span className="text-xs text-[var(--metal-dark4)]">Followers</span>
                    </li>
                    <li className="column transition-1 ease-in">
                      <span className="monu-txt text-3xl">{stats.repos.length}</span>
                      <span className="text-xs text-[var(--metal-dark4)]">Repositories</span>
                    </li>
                    <li className="column transition-1 ease-in">
                      <span className="monu-txt text-3xl">{stats.totalCommits}</span>
                      <span className="text-xs text-[var(--metal-dark4)]">Commits</span>
                    </li>
                  </ul>
                )
              )}
            </div>
          </div>


          {/* TECH STACK */}
          <div className="col-start-8 col-end-11 row-start-1 row-end-6 border-2 border-[var(--metal-dark2)] rounded-[10px] shadow-[5px_5px_20px_1px_black]">
            tech stack
          </div>
          <div className="col-start-4 col-end-11 row-start-7 row-end-11 border-2 border-[var(--metal-dark2)] rounded-[10px] shadow-[5px_5px_20px_1px_black]">
            description
          </div>
          <div className="col-start-1 col-end-4 row-start-7 row-end-7 border-2 border-[var(--metal-dark2)] rounded-[10px] shadow-[5px_5px_20px_1px_black]">
            tags
          </div>
          <div className="col-start-1 col-end-4 row-start-8 row-end-11 border-2 border-[var(--metal-dark2)] rounded-[10px] shadow-[5px_5px_20px_1px_black]">
            action
          </div>
        </div>
      </main>
    </section>
  );
}

export default About;
