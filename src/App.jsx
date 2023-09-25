import "./Assets/SassStyles/app.scss";
import ReCaptcha from "./Components/ReCaptcha/ReCaptcha";
import NavBar from "./Components/navbar/NavBar";
import Contact from "./Components/contact/Contact";
import About from "./Components/about/About";
import Skills from "./Components/skills/Skills";
import Projects from "./Components/projects/Projects";


function App() {

    const sitekey = import.meta.env.VITE_SITE_KEY || process.env.VITE_SITE_KEY
  
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
                <ReCaptcha sitekey={sitekey} 
                />
            </div>
        </>
    );
}

export default App;
