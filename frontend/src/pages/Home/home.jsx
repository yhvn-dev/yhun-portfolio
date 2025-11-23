import Header  from "../Home/Sections/header"
import Hero from "../Home/Sections/hero"
import About from "../../pages/Home/Sections/about"
import Sidebar from "../../components/sidebar"
import Skills_Tech from "../Home/Sections/skills_tech"
import Projects from "../Home/Sections/projects"
import Name_section from "./Sections/name_section"
import Footer from "../../components/footer"
import "./../../App.css"
import "./home.css"

function Home(){
    return(
        <div className="wrapper grid 
        grid-cols-1 
        grid-rows-[100vh_auto_150vh_auto_auto_auto_auto]
        md:grid-rows-[100vh_auto_100vh_auto_auto_auto_auto]
        md:grid-rows-[100vh_180vh_150vh_auto_auto_auto]
        bg-[var(--metal-dark5)]
        w-full
        overflow-x-hidden">             
            <Header />
            <Sidebar />     
            <Hero />
            <About />
            <Skills_Tech />
            <Projects />
            <Name_section />
            <Footer />
        </div>
    )
}

export default Home