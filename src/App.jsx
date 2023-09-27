/* eslint-disable no-undef */
import "./Assets/SassStyles/app.scss";
import NavBar from "./Components/navbar/NavBar";
import Contact from "./Components/contact/Contact";
import About from "./Components/about/About";
import Skills from "./Components/skills/Skills";
import Projects from "./Components/projects/Projects";


function App() {

    return (
        <>
            <div className="app">
                
                <NavBar />
                <About />
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars"></div>
                <Skills />
                <Projects />
                <Contact />

            </div>
        </>
    );
}

export default App;
