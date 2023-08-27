import "./SassStyles/app.scss";

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
                <Skills />
                <Projects />
                <Contact />
            </div>
        </>
    );
}

export default App;
