import { FaGithub } from "react-icons/fa6";

function Projects() {
    const projectList = [
        {
            id: "card1",
            title: "Project title",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus.",
            tech: ["sass, node.js, express.js, mongoDB"]
        },
        {
            id: "card2",
            title: "Project title",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus.",
        },
        {
            id: "card3",
            title: "Project title",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus.",
        },
    ];

    return (
        <section id="projects-container">
            <h3>projects</h3>

            <div className="projects-wrapper">
                {projectList.map((item) => (
                    <card className="card" id={item.id}>
                        <div className="card-img"></div>
                        <div className="details">
                            <h4>{item.title}</h4>
                            <p>{item.desc}</p>

                            <h4>Tech used:</h4>
                                <p>{item.tech}</p>
                        </div>
                    </card>
                ))}
            </div>

            <a className="github" target="_blank" rel="noreferrer" href="https://github.com/Staci082">
                <FaGithub />
            </a>
        </section>
    );
}

export default Projects;
