import { useState } from "react";
import Jhvn from "../assets/Images/jhvn_1_LOGO.png";
import { House, Heart, Brain, LaptopMinimalCheck, Phone } from "lucide-react";

function Sidebar() {
  const [active, setActive] = useState("#home");

  const links = [
    { id: "#home", label: "Home", icon: <House size={16} /> },
    { id: "#about", label: "About", icon: <Heart size={16} /> },
    { id: "#skills-tech", label: "Technologies", icon: <Brain size={16} /> },
    { id: "#projects", label: "Projects", icon: <LaptopMinimalCheck size={16} /> },
    { id: "#contacts", label: "Contacts", icon: <Phone size={16} /> },
  ];

  return (
    <aside
      className="
        fixed z-30
        w-full h-[10vh] bottom-5   
        center
        md:w-[10rem] md:h-screen md:top-0 md:right-0
      "
    >
      <div
        className="
          sbar-nav flex w-full md:h-[60vh] items-center justify-evenly px-2
          md:flex-col md:justify-evenly md:py-6
          
          bg-[var(--metal-dark5)]
          dark:bg-[var(--metal-dark5)]

          text-[var(--metal-dark4)]
          dark:text-[var(--main-white)]

          border-1 border-[var(--metal-dark2)]
          rounded-[10px]
        "
      >
        {/* Logo */}
        <div className="flex items-center justify-center w-auto">
          <img className="logo w-10 h-auto" src={Jhvn} />
        </div>

        {/* Nav */}
        <nav className="flex items-center justify-center gap-4 w-full md:flex-col md:justify-start md:items-start md:gap-4 my-4">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.id}
              onClick={() => setActive(link.id)}
              className={`
                nav_link flex items-center md:flex-row flex-col text-[0.8rem] 
                w-full my-1 cursor-pointer transition-colors duration-300

                ${
                  active === link.id
                    ? `
                        border-b border-[var(--main-white)]
                        md:bg-[var(--main-white)]
                        md:text-[var(--metal-dark5)]
                        rounded-lg sm:p-2 md:pr-4 py-1

                        dark:md:bg-[var(--metal-dark4)]
                        dark:text-[var(--main-white)]
                      `
                    : `
                        text-[var(--metal-dark4)]
                        hover:text-[var(--main-white)]

                        dark:text-[var(--main-white)]
                        dark:hover:text-[var(--main-white)]
                      `
                }
              `}
            >
              <span className="mx-2 my-2 md:my-0">{link.icon}</span>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
