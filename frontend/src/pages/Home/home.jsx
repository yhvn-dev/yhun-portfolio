import Header  from "../../components/Header/header"
import Hero from "../../components/Hero/hero"
import Sidebar from "../../components/Sidebar/sidebar"
import Skills_Tech from "../Skills_Tech/skills_tech"

function Home(){

    return(

        <div className="wrapper">

       
            <Hero></Hero>
            <Sidebar></Sidebar>
            <Skills_Tech></Skills_Tech>

        </div>

    )

}

export default Home