import { FadeInWhenVisible } from "../../../hooks/animations";
import { motion } from "framer-motion";

const lightVariant = {
  hidden: { opacity: 0, y: 0 },
  visible: { opacity: 1, y: 0 },
  transition: { duration: 2, ease: "ease in out" },
};

const parentVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

function Hero() {
  return (
    <>
      <section id="home" className="homesections w-full col-start-1 col-end-1 row-start-1 row-end-2 border-none">
        <div className="sections col-start-1 col-end-4 row-start-1 row-end-4 border-none ">

          {/* HERO BACKDROP */}
          <div className="relative flex flex-col items-center justify-start 
            col-start-1 col-span-full md:col-start-2 md:col-end-2 row-start-2 row-end-3 
            center  h-full w-full rounded-2xl overflow-hidden">

            <div className="hero-bd absolute top-4 bg-[var(--moon-phases-c)] rounded-full w-1/2 h-1/2">
       
            </div>
                
          </div>                   
                
          <main className="
            hero-main-box flex flex-col items-center justify-start 
            col-start-1 col-span-full md:col-start-2 md:col-end-2 row-start-2 row-end-3 
            center border-r-5 border-l-5 border-t-5 
            border-[var(--metal-dark2)] shadow-[0px_10px_5px_0px_rgba(0,0,0,0.8)]
            h-full w-full rounded-2xl overflow-hidden  backdrop-blur-[150px] bg-transparent
          ">

            <header className="box-header w-full h-[3rem] border-[1px] border-[var(--dark-variant)]
              flex justify-center items-center"
            >
              <ul className="flex items-center justify-start w-full h-full px-4 rounded-[10px]">
                <div className="circ w-[0.8rem] h-[0.8rem] rounded-full bg-red-500 mx-1"></div>
                <div className="circ w-[0.8rem] h-[0.8rem] rounded-full bg-orange-500 mx-1"></div>
                <div className="circ w-[0.8rem] h-[0.8rem] rounded-full bg-green-500 mx-1"></div>
              </ul>
            </header>

            <div className="flex flex-col items-center justify-start h-full w-full">
              <div className="w-full flex-col flex items-start justify-start h-full px-4 py-8 ">

                <FadeInWhenVisible delay={0.1}>
                  <div className="flex flex-col md:flex-row items-start md:items-center">
                    <p className="hook-txt md:text-start md:ml-2 text-[clamp(4.2rem,9.2vw,7.8rem)]">
                      HI I'M
                    </p>
                    <p className="hook-txt jhun-text ml-14 md:text-start text-[clamp(4.2rem,9.2vw,7.8rem)] md:ml-12 mt-2 md:mt-0">
                      JHUN
                    </p>
                  </div>
                </FadeInWhenVisible>

                <FadeInWhenVisible delay={0.4}>
                  <p className="text-start w-full text-[var(--metal-dark4)] mx-2 text-[clamp(1rem, 1vw, 1rem)]">
                    Full-Stack Web Developer
                  </p>
                  <p className="text-start w-full text-[var(--metal-dark4)] mx-2 text-xs">
                    I build end-to-end solutions with precision and care. <br />
                    I seamlessly integrate UI/UX design with backend development and security <br />
                    to create robust, user-friendly applications.
                  </p>
                </FadeInWhenVisible>

              </div>

              <div className="w-full ">
                <FadeInWhenVisible delay={0.55} className="flex flex-col items-end justify-end w-full h-full p-4">
                  <ul className="flex flex-col items-end justify-end w-full h-full  p-4">
                    <i className="text-[var(--metal-dark4)] text-xs mx-2">College Student At Sariaya, Quezon Philippines</i>
                    <i className="text-[var(--metal-dark4)] text-xs mx-2">jhunguidef@gmail.com</i>
                  </ul>
                </FadeInWhenVisible>
              </div>

            </div>
          </main>
        </div>
      </section>
    </>
  );
}

export default Hero;
