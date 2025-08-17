import Header  from "../../components/Header/header"
import Hero from "../../components/Hero/hero"
import Sidebar from "../../components/Sidebar/sidebar"
import Skills_Tech from "../../components/Skills_Tech/skills_tech"
import Projects  from "../../components/Projects/projects"

function Home(){

    return(

        <div className="wrapper">

            <Hero></Hero>
            <Sidebar></Sidebar>
            <Skills_Tech></Skills_Tech>
            <Projects></Projects>

        </div>

    )

}

export default Home