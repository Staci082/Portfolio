import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";

function Projects() {
    const projectList = [
        {
            id: "card1",
            title: "Fiesta Flavors",
            image: "/images/music-app.png",
            desc: "Recipe app. Discover, save and organize your beloved recipes using an online platform. ",
            tech: ["sass", "react.js", "node.js", "express.js", "mongoDB", "cheerio"],
            website: ""
        },
        {
            id: "card2",
            title: "Project title",
            image: "",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus.",
            tech: ["tailwind", "react.js", "node.js", "express.js", "fetch api"],
            website: ""
        },
        {
            id: "card3",
            title: "Project title",
            image: "",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus.",
            tech: ["sass", "ejs", "node.js", "express.js", "mongoDB", "something.js"],
            website: ""
        }
    ];

    return (
        <section id="projects-container">
            <h3>projects</h3>

            <div className="projects-wrapper">
                {projectList.map((item) => (
                    <div className="card" id={item.id} key={item.id}>
                        <div className="card-img"></div>
                        <div className="details">
                            <div className="title-container">
                            <h4 className="h4">{item.title}</h4>
                            <a href="#" className="link-button"><FaArrowUpRightFromSquare/></a>
                            </div>

                            <p>{item.desc}</p>

                            <h4 className="h4">Tech:</h4>
                            <ul>
                                {item.tech.map((tech, index) => {
                                    return <li className="li" key={index}>{tech}</li>
                                })}
                            </ul>
                            
                            
                        </div>
                    </div>
                ))}
            </div>

            <a className="github" target="_blank" rel="noreferrer" href="https://github.com/Staci082">
                <FaGithub />
            </a>
        </section>
    );
}

export default Projects;
