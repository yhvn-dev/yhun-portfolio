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
        grid-cols-[1fr] grid-rows-[100vh_200vh_150vh_1000vh_100vh_100vh] bg-[var(--metal-dark5)] ">
            <Header></Header>
            <Sidebar></Sidebar>
            <Hero></Hero>
            <About></About>
            <Skills_Tech></Skills_Tech>  
            <Projects></Projects>
            <Name_section></Name_section>
            <Footer/>
        </div>
    )

}

export default Home