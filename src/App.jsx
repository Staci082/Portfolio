import "./Assets/SassStyles/app.scss";

import ReCaptcha from "./Components/ReCaptcha/ReCaptcha";

import NavBar from "./Components/navbar/NavBar";
import Contact from "./Components/contact/Contact";
import About from "./Components/about/About";
import Skills from "./Components/skills/Skills";
import Projects from "./Components/projects/Projects";


function App() {

    const siteKey = import.meta.env.VITE_SITE_KEY
    
    const handleVerify = (token) => {
        console.log('ReCaptcha token:', token)
    }

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
                <ReCaptcha siteKey={siteKey} onVerify={handleVerify}/>
            </div>
        </>
    );
}

export default App;
