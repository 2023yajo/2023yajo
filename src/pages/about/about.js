import About_articles from "./about_articles";
import About_poster from "./about_poster";
import '../css/about.css'
import Smallfoot from "../../component/Smallfoot";

function About() {
    return (
        <>
            {/* <div className="aboutSide">
                About
            </div> */}
            <About_articles />
            <About_poster />
            <Smallfoot />
        </>
    )
}

export default About;