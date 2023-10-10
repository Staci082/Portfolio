import { Link } from "react-scroll";
import { useState } from "react";

function NavBar() {

    const [showNav, setShowNav] = useState(false);
    const ToggleNav = () => {
        setShowNav(!showNav);
    };
    

    return (
        <>
                <nav className={`hamburger ${showNav && 'open'}`} onClick={ToggleNav}  tabIndex="1">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </nav>

<nav>
                <ul className={`${showNav && 'nav'}`}>
                    <li className="link">
                        <Link
                        // added both "to" and "href" for a better SEO score
                            to="home-container"
                            href="home-container"
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
                            href="skills-container"
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
                            href="projects-container"
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
                            href="contact-container"
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
                </nav>
        </>
    );
}

export default NavBar;
