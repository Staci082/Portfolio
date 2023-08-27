import { Link } from 'react-scroll'
import { useState } from 'react'


function NavBar() {

    const [menuOpen, setMenuOpen] = useState(false)


    return (
        <>
        <nav className={(menuOpen ? "open" : "" + " nav")}>

            <div className={(menuOpen ? "open" : "" + " hamburger")}  onClick={() => setMenuOpen(!menuOpen)}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <ul className={(menuOpen ? "open" : "" + " nav-links")}>
                <li>
                    <Link to="home-container" className="section-link" spy={true} smooth={true} offset={50} duration={500}>
                        _home
                    </Link>
                </li>
                <li>
                    <Link to="skills-container" className="section-link" spy={true} smooth={true} offset={50} duration={500}>
                        _skills
                    </Link>
                </li>
                <li>
                    <Link to="projects-container" className="section-link" spy={true} smooth={true} offset={50} duration={500}>
                        _projects
                    </Link>
                </li>
                <li>
                    <Link to="contact-container" className="section-link" spy={true} smooth={true} offset={50} duration={500}>
                        _contact
                    </Link>
                </li>
            </ul>
        </nav>
        </>
    );
}

export default NavBar;
