import { Link } from "react-scroll";
import { useState } from "react";

function NavBar() {

    const [showNav, setShowNav] = useState(false);
    const ToggleNav = () => {
        setShowNav(!showNav);
    };
    

    return (
        <>
                <div className={`hamburger ${showNav && 'open'}`} onClick={ToggleNav}  tabIndex="0">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>

                <ul className={`${showNav && 'nav'}`}>
                    <li className="link">
                        <Link
                            to="home-container"
                            className="section-link"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                            onClick={ToggleNav}
                        >
                            home
                        </Link>
                    </li>
                    <li className="link">
                        <Link
                            to="skills-container"
                            className="section-link"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                            onClick={ToggleNav}
                        >
                            skills
                        </Link>
                    </li>
                    <li className="link">
                        <Link
                            to="projects-container"
                            className="section-link"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                            onClick={ToggleNav}
                        >
                            projects
                        </Link>
                    </li>
                    <li className="link">
                        <Link
                            to="contact-container"
                            className="section-link"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                            onClick={ToggleNav}
                        >
                            contact
                        </Link>
                    </li>
                </ul>
        </>
    );
}

export default NavBar;
