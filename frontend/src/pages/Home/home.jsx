import Header  from "../Home/Sections/header"
import Hero from "../Home/Sections/hero"
import About from "../../pages/Home/Sections/about"
import Sidebar from "../Home/Sections/sidebar"
import Skills_Tech from "../Home/Sections/skills_tech"
import "./../../App.css"
import "./home.css"

function Home(){

    return(

        <div className="wrapper grid 
        grid-cols-[1fr] grid-rows-[100vh_200vh_150vh_100vh_100vh] bg-[var(--metal-dark5)]">
            <Header></Header>
            <Hero></Hero>
            <About></About>
            <Sidebar></Sidebar>
            <Skills_Tech></Skills_Tech>       
        </div>

    )

}

export default Home