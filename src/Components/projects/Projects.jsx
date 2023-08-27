import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";

function Projects() {
    const projectList = [
        {
            id: "card1",
            title: "Project title",
            image: "/images/music-app.png",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus.",
            tech: ["sass, node.js, express.js, mongoDB"],
            website: ""
        },
        {
            id: "card2",
            title: "Project title",
            image: "",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus.",
            tech: ["tailwind", "react", "node.js", "express.js", "api"],
            website: ""
        },
        {
            id: "card3",
            title: "Project title",
            image: "",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus.",
            tech: ["sass, ejs, node.js, express.js, mongoDB"],
            website: ""
        },
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
                            <h4>{item.title}</h4>
                            <a href="#" className="link-button"><FaArrowUpRightFromSquare/></a>
                            </div>

                            <p>{item.desc}</p>

                            <h4>Tech used:</h4>
                            <ul>
                                {item.tech.map((tech) => {
                                    <li>{tech}</li>
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
