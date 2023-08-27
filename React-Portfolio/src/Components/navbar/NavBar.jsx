
function NavBar() {


  return (
    <nav className="nav">
            <div className="hamburger">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <ul className="nav-links">
                <li><a href="#home-container" className="section-link">_home</a></li>
                <li><a href="#skills-container" className="section-link">_skills</a></li>
                <li><a href="#projects-container" className="section-link">_projects</a></li>
                <li><a href="#contact-container" className="section-link">_contact</a></li>
            </ul>
        </nav>
  )
}

export default NavBar